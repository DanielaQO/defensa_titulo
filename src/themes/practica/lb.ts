import { createContext } from 'react';

/** Abre el lightbox por project id o 'planilla'. */
export const LbCtx = createContext<(id: string) => void>(() => {});
