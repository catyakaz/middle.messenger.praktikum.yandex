import { Login } from './src/pages/login';
import { SignIn } from './src/pages/signin';
import { Error500 } from './src/pages/500';
import { Error404 } from './src/pages/404';
import { Profile } from './src/pages/profile';
import { Chat } from './src/pages/chat';
import Router from './src/routing/Router';
import { StoreApp } from './src/core/Store';
import { getUserInfo } from './src/controllers/AuthController';

import './styles/main.scss';

document.addEventListener('DOMContentLoaded', async () => {

  Router.use('/', Login);
  Router.use('/signin', SignIn);
  Router.use('/settings', Profile);
  Router.use('/messenger', Chat);
  Router.use('/error404', Error404);
  Router.use('/error500', Error500);

  StoreApp.on('changed', () => {});

  let isProtectedRoute = true;

  if (window.location.pathname === '/' || window.location.pathname === '/signin') {
    isProtectedRoute = false;
  }

  try {
    await getUserInfo();
    Router.start();

    if (!isProtectedRoute) Router.go('/messenger');
  } catch (e) {
    Router.start();

    if (isProtectedRoute) Router.go('/');
  }
});
