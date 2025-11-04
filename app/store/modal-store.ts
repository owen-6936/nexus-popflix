import { create } from "zustand";

interface ModalState {
  isGetStartedModalOpen: boolean;
  openGetStartedModal: () => void;
  closeGetStartedModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isGetStartedModalOpen: false,
  openGetStartedModal: () => set({ isGetStartedModalOpen: true }),
  closeGetStartedModal: () => set({ isGetStartedModalOpen: false }),
}));
