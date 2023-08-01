import { expect } from 'chai';
import sinon from 'sinon';
import { LinkButton } from './linkButton';

describe('LinkButton', () => {
  it('Должен быть кликабельным', () => {
    const callback = sinon.stub();
    const linkButton = new LinkButton({ events: { click: callback } });

    const element = linkButton.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});
