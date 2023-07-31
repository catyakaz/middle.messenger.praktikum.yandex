import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';

import { expect } from 'chai';
import { HTTPTransport } from './HTTPTransport';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    //@ts-expect-error чтобы была возможность протестировать ошибочный сценарий
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  it('Метод get вызывается с GET method', () => {
    instance.get('/', {});

    const [request] = requests;

    expect(request.method).to.equal('GET');
  });

  it('Метод post вызывается с POST method', () => {
    instance.post('/', {});

    const [request] = requests;

    expect(request.method).to.equal('POST');
  });

  it('Метод put вызывается с  PUT method', () => {
    instance.put('/', {});

    const [request] = requests;

    expect(request.method).to.equal('PUT');
  });

  it('Метод delete вызывается с DELETE method', () => {
    instance.delete('/', {});

    const [request] = requests;

    expect(request.method).to.equal('DELETE');
  });
});
