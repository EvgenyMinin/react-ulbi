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

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readOnly,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [currentPosition, setIsCurrentPosition] = useState<number>(0);

  const isCaretVisible = isFocused && !readOnly;

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
  }, [autofocus, handleFocus]);

  return (
    <div className={cn(styles.inputWrapper, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}

      <div className={cn(styles.caretWrapper, { [styles.readOnly]: readOnly })}>
        <input
          ref={ref}
          type={type}
          value={value}
          readOnly={readOnly}
          onChange={handleOnChange}
          className={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSelect={handleSelect}
          {...rest}
        />
        {isCaretVisible && (
          <span className={styles.caret} style={{ left: `${currentPosition * 9}px` }} />
        )}
      </div>
    </div>
  );
});
