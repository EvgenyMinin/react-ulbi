import { Flex, TFlexProps } from '../Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

export const VStack = (props: THStackProps) => {
  const { align = 'start' } = props;

  return <Flex {...props} direction='column' align={align} />;
};
