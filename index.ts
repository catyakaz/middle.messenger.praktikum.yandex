import { Login } from './src/pages/login';
import { SignIn } from './src/pages/signin';
import { Error500 } from './src/pages/500';
import { Error404 } from './src/pages/404';
import { Profile } from './src/pages/profile';
import { Chat } from './src/pages/chat';
import { render } from './src/utils/renderDom';
import ROUTES from './src/routes';
import './styles/main.scss';

const routes = {
  [ROUTES.LOGIN]: new Login({}),
  [ROUTES.SIGNIN]: new SignIn({}),
  [ROUTES.ERROR_404]: new Error404({}),
  [ROUTES.ERROR_500]: new Error500({}),
  [ROUTES.CHAT]: new Chat({}),
  [ROUTES.PROFILE]: new Profile({}),
};

document.addEventListener('DOMContentLoaded', () => {
  const location = window.location.pathname;

  if (location) {
    const result = routes[window.location.pathname];

    render(result);
  }
});
