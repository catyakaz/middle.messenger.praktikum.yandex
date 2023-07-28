import { StoreApp } from '../core/Store';
import { Message } from '../types';

const sockets: Map<number, WebSocket> = new Map();

export const newConnect = async (chatId: number, token: string) => {
  if (sockets.has(chatId)) {
    return;
  }

  const id = StoreApp.getState().user!.id!;

  const url = 'wss://ya-praktikum.tech/ws/chats';
  const socket = new WebSocket(`${url}/${id}/${chatId}/${token}`);

  sockets.set(chatId, socket);

  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({ content: '0', type: 'get old' }));
  });

  const ping = setInterval(() => {
    socket.send(JSON.stringify({ type: 'ping' }));
  }, 10000);

  socket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log(`Код: ${event.code} - Соединение закрыто чисто`);
    } else {
      console.log(`Код: ${event.code} - Обрыв соединения`);
    }


    sockets.delete(chatId);
    clearInterval(ping);
  });

  socket.addEventListener('error', (event: any) => {
    console.log('Ошибка', event.message);
  });

  socket.addEventListener('message', (event) => {
    try {
      const data = JSON.parse(event.data);

      if (data.type && data.type === 'pong') {
        return;
      }

      let messagesToAdd: Message[] = [];

      if (Array.isArray(data)) {
        messagesToAdd = data.reverse();
      } else {
        messagesToAdd.push(data);
      }

      const messageList = StoreApp.getState().messageList;

      messageList[chatId] = [...messageList[chatId] || [], ...messagesToAdd];
      StoreApp.dispatch({ messageList });
    } catch (e: any) {
      console.error('message parse', e);
    }
  });
};

export const sendMessage = (id: number, message: string) => {
  const socket = sockets.get(id);

  if (socket) {
    socket.send(JSON.stringify({ type: 'message', content: message }));
  }
};

export const closeSockets = () => {
  Array.from(sockets.values()).forEach(socket => {
    socket.close();
  });

  sockets.clear();
};
