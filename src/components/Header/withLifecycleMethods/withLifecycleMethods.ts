import { lifecycle } from 'recompose';
import { AdditionalHandlersProps } from '../withAdditionalHandlers';

type HandlersProps = AdditionalHandlersProps;

export const withLifecycleMethods = lifecycle<HandlersProps, {}>({
  componentDidMount() {
    window.addEventListener('scroll', this.props.checkTopOffset);
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.checkTopOffset);
  }
});
