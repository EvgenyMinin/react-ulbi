import { MutableRefObject, UIEvent, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { RootState, useAppDispatch, useAppSelector } from 'app/providers';

import { useThrottle } from 'shared/hooks';

import { layoutSlice } from '../model';
import { scrollSelector } from '../model/selectors';

type TUseScrollConfig = {
  wrapperRef: MutableRefObject<HTMLElement>;
};

type TReturnType = { onScroll: () => void };

export const useScroll = ({ wrapperRef }: TUseScrollConfig): TReturnType => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scroll = useAppSelector((state: RootState) => scrollSelector(state, pathname));

  useEffect(() => {
    wrapperRef.current.scrollTop = scroll;
  }, [scroll, wrapperRef]);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      layoutSlice.actions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return { onScroll };
};
