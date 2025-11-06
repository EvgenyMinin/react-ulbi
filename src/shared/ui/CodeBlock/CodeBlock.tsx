import { memo, useCallback } from 'react';

import { cilCopy } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

import styles from './CodeBlock.module.scss';
import { Button, EButtonTheme } from '../button';

type TCodeBlockProps = {
  code: string;
};

export const CodeBlock = memo((props: TCodeBlockProps) => {
  const { code } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <pre className={styles.codeBlock}>
      <Button className={styles.copyButton} theme={EButtonTheme.CLEAR} onClick={onCopy}>
        <CIcon icon={cilCopy} width={24} />
      </Button>

      <code>{code}</code>
    </pre>
  );
});
