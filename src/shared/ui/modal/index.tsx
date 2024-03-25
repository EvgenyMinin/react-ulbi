import { FC, ReactNode, useCallback, useEffect, useReducer, useRef } from 'react';

import cn from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';

import styles from './styles.module.scss';
import { Portal } from '../portal';

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<IModalProps> = ({ isOpen, onClose, className, children }) => {
  const [isClosing, toggleClosing] = useReducer(prev => !prev, false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
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

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return (
    <Portal>
      <div className={cn(styles.modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div className={styles.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
