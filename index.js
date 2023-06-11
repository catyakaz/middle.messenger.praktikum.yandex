import Login from './src/pages/login';
import Signin from './src/pages/signin';
import Error404 from './src/pages/404';
import Error500 from './src/pages/500';
import Chat from './src/pages/chat';
import Profile from './src/pages/profile';
import ROUTES from './src/routes';
import './styles/main.scss';

const routes = {
  [ROUTES.LOGIN]: Login,
  [ROUTES.SIGNIN]: Signin,
  [ROUTES.ERROR_404]: Error404,
  [ROUTES.ERROR_500]: Error500,
  [ROUTES.CHAT]: Chat,
  [ROUTES.PROFILE]: Profile,
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');

  const location = window.location.pathname;

  if (location) {
    const result = routes[window.location.pathname];
    root.innerHTML = result;
  }
});
