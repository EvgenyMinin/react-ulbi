import { useCallback } from 'react';

import { useAppDispatch } from 'app/providers';

import { profileService, profileSlice } from 'entities/profile';

interface IUseHeaderActions {
  handleEdit: () => void;
  handleDecline: () => void;
  handleSave: () => void;
}

export const useHeaderActions = (): IUseHeaderActions => {
  const dispatch = useAppDispatch();

  const handleEdit = useCallback(() => {
    dispatch(profileSlice.profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleDecline = useCallback(() => {
    dispatch(profileSlice.profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(profileService.updateProfileData());
  }, [dispatch]);

  return { handleEdit, handleDecline, handleSave };
};
