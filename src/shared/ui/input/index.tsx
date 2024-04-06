import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', placeholder, autofocus, ...rest } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [currentPosition, setIsCurrentPosition] = useState<number>(0);

  const handleOnChange = useCallback(
    ({ target: { value: inputValue } }: ChangeEvent<HTMLInputElement>) => {
      onChange?.(inputValue);
      setIsCurrentPosition(inputValue.length);
    },
    [onChange]
  );

  const handleSelect = useCallback((e: any) => {
    setIsCurrentPosition(e?.target?.selectionStart || 0);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (autofocus) {
      handleFocus();
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={cn(styles.inputWrapper, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}

      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleOnChange}
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          {...rest}
        />
        {isFocused && (
          <span className={styles.caret} style={{ left: `${currentPosition * 9}px` }} />
        )}
      </div>
    </div>
  );
});
