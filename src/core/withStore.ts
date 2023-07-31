import { StoreApp } from './Store';
import Block from './Block';

export function withStore(WrappedBlock: typeof Block) {
  return class extends WrappedBlock {
    constructor(props: Record<string, any>) {
      super({ ...props, ...StoreApp.state });
    }

    __onChangeStoreCallback = () => {
      this.setProps({ ...this.props, ...StoreApp.state });
    };

    componentDidMount() {
      super.componentDidMount();
      StoreApp.on('changed', this.__onChangeStoreCallback);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      StoreApp.off('changed', this.__onChangeStoreCallback);
    }
  };
}
