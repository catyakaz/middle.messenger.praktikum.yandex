import { ChatsAPI } from '../api/ChatsAPI';
import { ChatList, ChatUsers, UsersToChat } from '../types';
import { StoreApp } from '../core/Store';
import { newConnect } from './MessagesControllers';

export const getChats = async () => {
  try {
    const chatList = await ChatsAPI.getChats() as ChatList[];

    chatList.map(async (chat) => {
      const { token } = await ChatsAPI.postToken(chat.id) as any;

      await newConnect(chat.id, token);
    });

    StoreApp.dispatch({ chatList });
  } catch (e: any) {
    console.error('get chats', e);
  }
};

export const createChats = async (data: { title: string }) => {
  try {
    await ChatsAPI.postCreateChats(data);

    getChats().then();
  } catch (e: any) {
    console.error('create chats', e);
  }
};

export const deleteChat = async (data: { chatId: number }) => {
  await ChatsAPI.deleteChats(data);
  getChats().then();

  StoreApp.dispatch({ selectedChat: {} });
};

export const getChatUsers = async (id: number) => {
  const chatUsers = await ChatsAPI.getChatUsers(id) as ChatUsers[];

  StoreApp.dispatch({ chatUsers });
};

export const addUser = async (data: UsersToChat) => {
  await ChatsAPI.putAddUsers(data);
  getChatUsers(data.chatId).then();
};

export const deleteUser = async (data: UsersToChat) => {
  await ChatsAPI.deleteUsers(data);
  getChatUsers(data.chatId).then();
};
