import { expect } from 'chai';
import { Message } from './message';

describe('Message', () => {
  it('Корректное отображение текста', () => {
    const message = new Message({ text: 'Привет' });

    const element = message.element as HTMLElement;

    expect(element.textContent).to.eq('\n\nПривет\n');
  });
});
