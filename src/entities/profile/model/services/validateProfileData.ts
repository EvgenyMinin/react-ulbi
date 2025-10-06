import { EValidateProfileError, IProfile } from 'entities/profile';

export const validateProfileData = (profile?: IProfile): EValidateProfileError[] => {
  if (!profile) {
    return [EValidateProfileError.NO_DATA];
  }

  const { firstName, lastName, age, country } = profile;

  const errors: EValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(EValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(EValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(EValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
