import { AdditionalHandlersProps } from './withAdditionalHandlers';
import { HeaderStateProps } from './withHeaderState';

export type ComposedProps = HeaderStateProps & AdditionalHandlersProps;
export type HeaderProps = ComposedProps;
