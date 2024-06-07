import { FC } from 'react';

import { Modal } from 'shared/ui';

import { LoginForm } from './LoginForm';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm onSuccess={onClose} />
    </Modal>
  );
};
