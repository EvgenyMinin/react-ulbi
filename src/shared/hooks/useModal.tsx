import { MutableRefObject, useCallback, useEffect, useReducer, useRef, useState } from 'react';

type TParams = {
  animationDelay: number;
  isOpen?: boolean;
  onClose?: () => void;
};

type TSignature = (params: TParams) => {
  isMounted: boolean;
  isClosing: boolean;
  close: () => void;
};

export const useModal: TSignature = ({ animationDelay, isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, toggleClosing] = useReducer(prev => !prev, false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const close = useCallback(() => {
    if (onClose) {
      toggleClosing();
      timerRef.current = setTimeout(() => {
        onClose();
        toggleClosing();
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
