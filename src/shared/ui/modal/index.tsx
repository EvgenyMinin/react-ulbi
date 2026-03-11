import { FC, ReactNode } from 'react';

import cn from 'classnames';

import { useModal } from 'shared/hooks';
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
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(styles.modal, mods, [className])}>
        <Overlay onClick={close} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
