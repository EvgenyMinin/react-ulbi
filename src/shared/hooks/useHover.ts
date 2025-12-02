import { useCallback, useMemo, useState } from 'react';

type UseHoverBind = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type TResult = [boolean, UseHoverBind];

export const useHover = (): TResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  );
};
