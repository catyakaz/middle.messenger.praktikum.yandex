export default `
<aside class="sidebar">
<div class='sidebar__main'>
<a class='sidebar__link' href='/profile'> 
<img src={{ srcImg }} alt='изменить' class='img' /> 
</a>

{{>input name='search' type="search" placeholder="Поиск..." inputClass='input_search' }}
</div>

  <nav class='sidebar__nav'>
    <ul class='sidebar__ul'>
    {{#each userInfoChatList}}
    {{>userInfoChat}}
    {{/each}}    
    </ul>
  </nav>
</aside>
  
<section class="chat">
<header class="chat__header">
  <div class='chat__content'>
  <div class='chat__user'>
  <div class='chat__user_img'></div>
  <div class='chat__user_name'>Андрей</div>
  </div>
  <img src={{ moreImg }} alt='больше инфы' class='chat__more' /> 
  </div>
</header>

<main class="chat__main">
{{#each messageList}}
{{>message}}
{{/each}} 
</div>
</main>

<footer class="chat__footer">
<div class='chat__content'>
{{>input name='message' type="text" placeholder="Печатай..." inputClass='input_message' }}
</div>
</footer>
</section>
`;
