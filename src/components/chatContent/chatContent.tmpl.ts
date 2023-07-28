export const ChatContentTmpl = `
<section class="chat">
{{#if selectedChat.id}}
<header class="chat__header">
{{{ header }}}
</header>
<main class="chat__main">
{{#if messageChat }}
   {{#each  messageChat}}
      {{{this}}} 
    {{/each}}
 {{else}}
<div class="chat__no_selected">
 <p>Напишите первое сообщение</p>
</div>
{{/if}}
</main>
<footer class="chat__footer">
<div class='chat__content chat__content__footer'>
{{{ inputMessage }}}
{{{ sendMessageButton }}}
</footer>
{{else}}
<div class="chat__no_selected">
   <p>Выберите чат</p>
</div>
  {{/if}}
{{{ modalDeleteUser }}}
{{{ modalAddUser }}}
</section>`;
