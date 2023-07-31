export const HeaderTmpl = `
      <div class="header">
        <div>
          <div class="header__name">
            {{{ title }}}          
          </div>
          <p class="header__title_users">Участники:<span class="header__users"> {{{usersInChat}}} </span> </p>
        </div>
        <div class="header__utils">
          {{{ button }}} 
          {{#if isShowHint}}
            {{{ hint }}}
          {{/if}}
        </div>
      </div>;
`;
