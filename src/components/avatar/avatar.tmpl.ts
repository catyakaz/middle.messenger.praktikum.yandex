export const AvatarTmpl = `      
      <div class="avatar">
        {{#if user.avatar}}
          <img class="avatar__logo"
           src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" 
           alt="avatar" />
        {{else}}
            <img alt="поменять аватар" class='avatar__base__logo' src={{ editImg }} alt="Поменять аватар" />  
        {{/if}}
     
          <label class="avatar__label">
            {{{ inputAvatar }}}
            <span class="avatar__change">Сменить лого</span>
          </label>
      </div>`;
