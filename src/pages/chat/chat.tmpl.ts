export const ChatTmpl =  `<div>
<aside class="sidebar">
<div class="sidebar__container">
<div class='sidebar__main'>
<a class='sidebar__link' href='/settings'> 
<img src={{ srcImg }} alt='изменить' class='img' /> 
</a>
{{{ inputSearch }}}
</div>
{{{ buttonCreateChat }}}
</div>

  <nav class='sidebar__nav'>
     <ul class='sidebar__ul'>
      {{#each userInfoChat }}
         {{{this}}}
      {{/each}}
    </ul>
  </nav>
</aside>
  
{{{ chatContent }}}
{{{ modalAddUser}}}

        {{#if openedNewChat }} 
          {{{ modalNewChat }}} 
        {{/if}}
</div>
`;
