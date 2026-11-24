import { type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useKey } from '../hooks/useKey';

export default function Modal({ open, onClose, className = '', children, closeOnBackdrop = false }: { open: boolean; onClose: () => void; className?: string; children: ReactNode; closeOnBackdrop?: boolean }) {
  useKey({ Escape: onClose }, open);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);
  if (!open) return null;
  return createPortal(
    <div role="dialog" aria-modal="true" className={`fixed inset-0 ${className}`} onClick={closeOnBackdrop ? (e) => e.target === e.currentTarget && onClose() : undefined}>
      {children}
    </div>,
    document.body,
  );
}
