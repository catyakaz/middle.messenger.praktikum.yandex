export default `<div>
{{>input name='first_name' type="text" placeholder="Имя" }}
{{>input name='second_name' type="text" placeholder="Фамилия" }}
{{>input name='login' type="text" placeholder="Логин" }}
{{>input name='email' type="email" placeholder="Email" }}
{{>input name='password' type="password" placeholder="Пароль" }}
{{>input name='phone' type="phone" placeholder="Телефон" }}
<div class='button__container'>
{{>button buttonText='Зарегистрироваться' buttonClass='button_purple' }}
{{>linkButton linkText='Уже есть аккаунт?' href='/login' }}
</div>
</div>`;
