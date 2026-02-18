import { Flex, TFlexProps } from '../Flex';

type THStackProps = Omit<TFlexProps, 'direction'>;

export const HStack = (props: THStackProps) => <Flex {...props} direction='row' />;
