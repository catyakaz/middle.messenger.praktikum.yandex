export const InputTmpl = `
<div class="input__container {{ inputContainerClass }}">  
<input
    name={{ name }}
    placeholder='{{ placeholder }}'
    type={{ type }}
    class="input {{ inputClass }}"
/>
 <span class="input__error">{{ error }}</span>
</div>
`;
