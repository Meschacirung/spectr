import { atom } from "nanostores";

export const isOpen = atom(false);
export const setIsOpen = () => {
  isOpen.set(!isOpen.get());
}