export const PopupDeleteUserTmpl = ` 
      <div class="popup {{#if popups.deleteUsers}} popup_opened {{/if}}">
            {{{buttonClose}}}
          <form class="popup__container">
           {{#if chatUsersList}}
            <h3 class="popup__title">Участники на выбывание из вашего милого чатика</h3>
              <ul class="popup__list">                  
                {{#each chatUsersList}}
                  {{{this}}}
                {{/each}}
              </ul>
            {{else}}
              <p  class="popup__title">Вы еще никого не добавили, чтобы удалить</p>
            {{/if}}    
          </form>
        </div>
      </div>`;
