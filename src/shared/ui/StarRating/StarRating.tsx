import React, { memo, useCallback, useState } from 'react';

import { cilStar } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import cn from 'classnames';

import { Mods } from '@/shared/lib';

import styles from './StarRating.module.scss';

type TStarRatingProps = {
  size?: number;
  selectedStars?: number;
  className?: string;
  onSelect?: (starCount: number) => void;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: TStarRatingProps) => {
  const { size = 20, selectedStars = 0, onSelect, className } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(0);
  const [isSelected, setSelected] = useState(Boolean(selectedStars));

  const mods: Mods = {
    [styles.isHovered]: currentStarsCount > 0,
    [styles.isSelected]: isSelected,
  };

  const onHover = useCallback(
    (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount);
      }
    },
    [isSelected]
  );

  const onLeave = useCallback(() => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  }, [isSelected]);

  const onClick = useCallback(
    (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount);
        setCurrentStarsCount(starsCount);
        setSelected(true);
      }
    },
    [isSelected, onSelect]
  );

  return (
    <div className={cn('', {}, [className])}>
      {stars.map(star => (
        <CIcon
          key={star}
          icon={cilStar}
          width={size}
          color='var(--primary-color)'
          onMouseLeave={onLeave}
          onMouseEnter={onHover(star)}
          onClick={onClick(star)}
          className={cn(
            styles.icon,
            { ...mods, [styles.isHovered]: currentStarsCount >= star },
            []
          )}
        />
      ))}
    </div>
  );
});
