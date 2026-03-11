import {
  FC,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

import cn from 'classnames';

import { Mods } from 'shared/lib';

import styles from './styles.module.scss';
import { Overlay } from '../Overlay';
import { Portal } from '../portal';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<IModalProps> = ({ isOpen, onClose, className, children, lazy }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isClosing, toggleClosing] = useReducer(prev => !prev, false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      toggleClosing();
      timerRef.current = setTimeout(() => {
        onClose();
        toggleClosing();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    },
    [handleCloseModal]
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

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(styles.modal, mods, [className])}>
        <Overlay onClick={handleCloseModal} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
