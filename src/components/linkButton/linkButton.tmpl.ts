export const LinkButtonTmpl = `
<div class="link {{linkClass}}">
<a class="link__text">
{{#if linkText }}
{{ linkText }}
{{else}}
 <img src="{{ contentImg }}" alt='изменить' class='img' /> 
{{/if}}
</a>
</div>
`;
