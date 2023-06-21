import { create } from "zustand";

interface SiembraModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSiembraModal = create<SiembraModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSiembraModal;
