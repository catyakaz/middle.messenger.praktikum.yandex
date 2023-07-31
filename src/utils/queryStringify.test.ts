import { expect } from 'chai';
import { queryStringify } from './queryStringify';

describe('queryStringify', () => {
  it('возвращает пустую строку, если вызывается без аргумента', () => {
    //@ts-expect-error чтобы была возможность протестировать ошибочный сценарий
    const res = queryStringify();

    expect(res).to.equal('');
  });

  it('корректно работает, если в аргументах пустой объект', () => {
    const res = queryStringify({});

    expect(res).to.equal('?');
  });

  it('корректно работает, если в аргументах не пустой объект', () => {
    const res = queryStringify({ 'first': 1, 'second': 2 });

    expect(res).to.equal('?first=1&second=2');
  });
});
