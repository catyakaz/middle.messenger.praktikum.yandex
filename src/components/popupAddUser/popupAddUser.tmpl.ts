export const PopupAddUserTmpl = ` 
      <div class="popup {{#if popups.addUsers}} popup_opened {{/if}}">
        {{{buttonClose}}}
          <form class="popup__container"> 
            <h3 class="popup__title">Поиск</h3>
            <div class="popup__search">
              {{{ inputSearchUser }}}
              {{{ buttonSearch }}}
            </div>
            {{#if isSearch}}
              <p class="popup__title">Найдено:</p>
              <ul class="popup__list">
              {{#each searchList}}
                {{{this}}}
              {{/each}}
              </ul>
            {{/if}}
            {{#if error}}    
              <p class="popup__title">Не найдено ни одного пользователя</p>
           {{/if}}
          </form>
        </div>
      </div>`;
