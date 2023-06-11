export default `<div>
{{>input name='login' type="login" placeholder="Логин" }}
{{>input name='password' type="password" placeholder="Пароль" }}
<div class='button__container'>
{{>button buttonText='Войти' buttonClass='button_purple' }}
{{>linkButton linkText='Нет аккаунта?' href='/signin' }}
</div>
</div>`;
