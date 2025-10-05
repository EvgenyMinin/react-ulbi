import { useCallback } from 'react';

import { useAppDispatch } from 'app/providers';

import { profileActions } from 'entities/profile';

import { NUMBERS } from 'shared/consts';
import { ECountry, ECurrency } from 'shared/lib';

interface IUseInputChange {
  handleChangeFirstName: (value?: string) => void;
  handleChangeLastName: (value?: string) => void;
  handleChangeAge: (value: string) => void;
  handleChangeCity: (value?: string) => void;
  handleChangeUsername: (value?: string) => void;
  handleChangeAvatar: (value?: string) => void;
  handleChangeCurrency: (currency: ECurrency) => void;
  handleChangeCountry: (country: ECountry) => void;
}

export const useInputChange = (): IUseInputChange => {
  const dispatch = useAppDispatch();

  const handleChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || '' }));
    },
    [dispatch]
  );

  const handleChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || '' }));
    },
    [dispatch]
  );

  const handleChangeAge = useCallback(
    (value: string) => {
      const canType = NUMBERS.test(value);
      if (canType) {
        dispatch(profileActions.updateProfile({ age: parseFloat(value) }));
      }
    },
    [dispatch]
  );

  const handleChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const handleChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const handleChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const handleChangeCurrency = useCallback(
    (currency: ECurrency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const handleChangeCountry = useCallback(
    (country: ECountry) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return {
    handleChangeFirstName,
    handleChangeLastName,
    handleChangeAge,
    handleChangeCity,
    handleChangeUsername,
    handleChangeAvatar,
    handleChangeCurrency,
    handleChangeCountry,
  };
};
