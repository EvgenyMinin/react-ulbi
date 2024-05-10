import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers';

import { loginSelectors, loginServices, loginSlice } from 'features/login-by-username';

import { Button, EButtonTheme, ETextTheme, Input, Text } from 'shared/ui';

import styles from './styles.module.scss';

export const LoginForm = memo(() => {
  const { t } = useTranslation('auth');
  const dispatch = useAppDispatch();
  const usernameValue = useAppSelector(loginSelectors.loginUsernameSelector);
  const passwordValue = useAppSelector(loginSelectors.loginPasswordSelector);
  const isLoading = useAppSelector(loginSelectors.loginIsLoadingSelector);
  const loginError = useAppSelector(loginSelectors.loginErrorSelector);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginSlice.actions.setUsername(value));
    },
    [dispatch]
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginSlice.actions.setPassword(value));
    },
    [dispatch]
  );

  const handleLogin = useCallback(() => {
    dispatch(loginServices.loginByUsername({ username: usernameValue, password: passwordValue }));
  }, [dispatch, passwordValue, usernameValue]);

  return (
    <div className={styles.loginForm}>
      <Text title={t('authForm')} />
      {loginError && <Text text={loginError.message} theme={ETextTheme.ERROR} />}
      <Input
        placeholder={t('username')}
        value={usernameValue}
        onChange={handleChangeUsername}
        autofocus
      />
      <Input placeholder={t('password')} value={passwordValue} onChange={handleChangePassword} />
      <Button
        onClick={handleLogin}
        theme={EButtonTheme.OUTLINE}
        disabled={isLoading}
        className={styles.loginBtn}
      >
        {t('login')}
      </Button>
    </div>
  );
});
