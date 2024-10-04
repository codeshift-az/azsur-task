import { create } from 'zustand';

interface BurgerMenuState {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  toggle: () => void,
}

export const useBurgerMenuState = create<BurgerMenuState>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
