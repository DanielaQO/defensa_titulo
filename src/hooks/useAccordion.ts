import { useState } from 'react';

export function useAccordion(initial: string | null) {
  const [openId, setOpen] = useState(initial);
  return { openId, isOpen: (id: string) => openId === id, toggle: (id: string) => setOpen((cur) => (cur === id ? null : id)) };
}
