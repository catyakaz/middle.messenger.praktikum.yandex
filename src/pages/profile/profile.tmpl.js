export default `<div class='profile'>
<div class='logo'></div>
<div class='name'>Катя</div>
{{>input name='first_name' type="text" placeholder="Имя" inputClass='input_profile'}}
{{>input name='second_name' type="text" placeholder="Фамилия" inputClass='input_profile' }}
{{>input name='display_name' type="text" placeholder="Имя в аккаунте" inputClass='input_profile' }}
{{>input name='login' type="text" placeholder="Логин" inputClass='input_profile' }}
{{>input name='email' type="email" placeholder="Email" inputClass='input_profile' }}
{{>input name='phone' type="phone" placeholder="Телефон" inputClass='input_profile' }}
{{>input name='avatar' type="url" placeholder="Аватар" inputClass='input_profile' }}
{{>input name='oldPassword' type="password" placeholder='Старый пароль' inputClass='input_profile' }}
{{>input name='newPassword' type="password" placeholder="Новый пароль" inputClass='input_profile' }}
<div class='button__container'>
{{>button buttonText='Применить' buttonClass='button_purple' }}
{{>linkButton linkText='Выйти' href='/login' }}
</div>
</div>`;
