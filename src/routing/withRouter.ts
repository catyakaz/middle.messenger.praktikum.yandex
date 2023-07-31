import Block from '../core/Block';
import Router from './Router';

export function withRouter(Component: typeof Block<any>) {
  return class WithRouter extends Component {
    constructor(props: Record<string, any>) {
      super({ ...props, router: Router });
    }
  };
}
