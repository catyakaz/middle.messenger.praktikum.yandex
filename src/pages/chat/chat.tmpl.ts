export const ChatTmpl =  `<div>
<aside class="sidebar">
<div class='sidebar__main'>
<a class='sidebar__link' href='/profile'> 
<img src={{ srcImg }} alt='изменить' class='img' /> 
</a>
{{{ inputSearch }}}
</div>

  <nav class='sidebar__nav'>
     <ul class='sidebar__ul'>
        {{{ userInfoChat }}}
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
{{{ messageChat }}}
</main>

<footer class="chat__footer">
<div class='chat__content'>
{{{ inputMessage }}}
</footer>
</section>
</div>
`;
