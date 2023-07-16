import Block from './Block';

export const render = (component: Block)  => {
  const root = document.querySelector('#app');

  if (!root) {
    return;
  }

  root.innerHTML = '';

  root.appendChild(component.getContent());

  component.dispatchComponentDidMount();
};
