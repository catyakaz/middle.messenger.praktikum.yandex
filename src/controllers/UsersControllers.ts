import { UsersApi } from '../api/UsersAPI';
import { Password, User, UserProfile } from '../types';
import Router from '../routing/Router';
import { StoreApp } from '../core/Store';

export const changeUserProfile = async (data: UserProfile) => {
  try {
    const user = await UsersApi.putUserProfile(data) as User;

    StoreApp.dispatch({ user: user });
    Router.go('/settings');

  } catch (e: any) {
    console.error('change user profile', e);
  }
};

export const changeUserAvatar = async (data: FormData) => {
  try {
    const user = await UsersApi.putUserAvatar(data) as User;
    StoreApp.dispatch({ user: user });

  } catch (e: any) {
    console.error('change user avatar', e);
  }
};

export const changeUserPassword = async (data: Password) => {
  try {
    await UsersApi.putUserPassword(data);
  } catch (e: any) {
    console.error('change user password', e);
  }
};

export const searchUser = async (data: { login: string }) => {
  const users = await UsersApi.postSearchUser(data) as User[];

  StoreApp.dispatch({ foundUsers: users });
};
