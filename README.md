### Учебный проект: Чат мессенджера

### Прототипы экранов в Figma:
(https://www.figma.com/file/0u1x2z8G10BXqW0K2XMB6B/Chat?type=design&node-id=0-1&t=IkXIc2yIFgiFwjDv-0)

### Ссылка на приложение:
https://chat-messenger-praktikum.netlify.app

### Ссылки на страницы:

## Вход:
https://chat-messenger-praktikum.netlify.app

## Авторизация:
https://chat-messenger-praktikum.netlify.app/signin

## Профиль:
https://chat-messenger-praktikum.netlify.app/settings

## Чат:
https://chat-messenger-praktikum.netlify.app/messenger

## 404:
https://chat-messenger-praktikum.netlify.app/error404

## 500:
https://chat-messenger-praktikum.netlify.app/error500


### Команды для запуска:

Проект собирается в [Vite](https://vitejs.dev/):

```bash
npm run build
```

Сборка и запуск статического сервера на Express:

```bash
npm run start
```

Сборка проекта в Vite:

```bash
npm run dev
```

## Sprint 2

- Реализован компонентный подход с помощью EventBus и компонента Block
- Добавлены: ts, ESLint, Stylelint
- Работает валидация на формы по submit и blur
- Добавлен класс HTTPTransport для работы с запросами

## Sprint 3

- Добавлен роутинг в проект
- Подключен HTTP API чатов, сообщений, информации о пользователях, авторизации и регистрации
- Подключен WebSocket для работы с real-time сообщениями.
