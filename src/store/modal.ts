import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';

interface Modal {
  isShown: boolean;
  setModal: (isShown: boolean) => void;
}

const useModal = create<Modal>()(persist(devtools(immer((set) => ({
  isShown: false,
  setModal: (isShown) => set({ isShown })
}))), { name: 'storeApiTest', version: 1 }));

export default useModal;
