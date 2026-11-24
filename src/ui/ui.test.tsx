import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Modal from './Modal';
import FilterPills from './FilterPills';

afterEach(cleanup);

describe('Modal', () => {
  it('Esc llama onClose y bloquea scroll mientras está abierto', () => {
    const onClose = vi.fn();
    const { unmount } = render(<Modal open onClose={onClose}><p>hola</p></Modal>);
    expect(screen.getByText('hola')).toBeTruthy();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
  it('cerrado no renderiza', () => {
    render(<Modal open={false} onClose={() => {}}><p>nada</p></Modal>);
    expect(screen.queryByText('nada')).toBeNull();
  });
});

describe('FilterPills', () => {
  it('marca activo con aria-pressed y llama onPick', () => {
    const onPick = vi.fn();
    render(<FilterPills options={[{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }]} active="a" onPick={onPick} itemClass={() => ''} />);
    expect(screen.getByText('A').getAttribute('aria-pressed')).toBe('true');
    fireEvent.click(screen.getByText('B'));
    expect(onPick).toHaveBeenCalledWith('b');
  });
});
