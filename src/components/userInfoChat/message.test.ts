import { expect } from 'chai';
import { UserInfoChat } from './userInfoChat';

describe('UserInfoChat', () => {
  it('Корректное отображение текста', () => {
    const chatInfo = new UserInfoChat({ name: 'Наш чат' });

    const element = chatInfo.element as HTMLElement;

    expect(element.textContent).to.eq('\n\n\n  Наш чат\n  \n\n');
  });
});
