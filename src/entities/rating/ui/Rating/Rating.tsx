import React, { memo, useCallback, useState } from 'react';

import cn from 'classnames';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Card,
  Drawer,
  EButtonSize,
  EButtonTheme,
  HStack,
  Input,
  Modal,
  StarRating,
  Text,
  VStack,
} from '@/shared/ui';

import styles from './Rating.module.scss';

type TRatingProps = {
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  className?: string;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
};

export const Rating = memo((props: TRatingProps) => {
  const { title, feedbackTitle, hasFeedback, onAccept, onCancel, className } = props;

  const { t } = useTranslation('article');
  const [showModal, setShowModal] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedDStarsCount: number) => {
      setStarsCount(selectedDStarsCount);

      if (hasFeedback) {
        setShowModal(true);
      } else {
        onAccept?.(selectedDStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    setShowModal(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setShowModal(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap={16}>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('review')} />
    </VStack>
  );

  return (
    <Card className={cn(styles.rating, {}, [className])}>
      <VStack gap={8} align='center'>
        <Text title={title} />

        <StarRating size={40} onSelect={onSelectStars} />

        <BrowserView>
          <Modal isOpen={showModal} lazy onClose={cancelHandler}>
            <VStack gap={32}>
              {modalContent}
              <HStack gap={16}>
                <Button theme={EButtonTheme.OUTLINE_RED} wide onClick={cancelHandler}>
                  {t('buttons.close')}
                </Button>
                <Button wide onClick={acceptHandler}>
                  {t('buttons.send')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>

        <MobileView>
          <Drawer isOpen={showModal} lazy onClose={cancelHandler}>
            <VStack gap={32}>
              {modalContent}
              <Button
                wide
                onClick={acceptHandler}
                theme={EButtonTheme.BACKGROUND_INVERTED}
                size={EButtonSize.XL}
              >
                {t('buttons.send')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});
