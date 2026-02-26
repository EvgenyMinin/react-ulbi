import { Flex, TFlexProps } from '../Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

export const VStack = (props: THStackProps) => <Flex {...props} direction='column' />;
