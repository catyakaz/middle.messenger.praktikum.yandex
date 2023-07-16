import Validator from './Validator';

const findInputError = (input: HTMLElement) => {
  return input.closest('.input__container')?.querySelector('.input__error');
};

const addError = (
  input: HTMLInputElement,
  error: {
    verify: boolean;
    message: string;
  },
): void => {
  const errorElement = findInputError(input);

  if (!error.verify && errorElement) {
    errorElement.textContent = error.message;
    errorElement?.classList.add('input__error_visible');
  } else {
    errorElement?.classList.remove('input__error_visible');
  }
};


export const handleSubmit = (event: Event): void => {
  event.preventDefault();
  const inputValue: Record<string, string> = {};
  const inputList = document.querySelectorAll('.input');

  //прописываем any, а не HTMLInputElement, чтобы можно было добавить input.value
  inputList.forEach((input: any) => {
    inputValue[input.name] = input.value;

    const result = Validator.validate(input.name, input.value);

    if (result) {
      addError(input, result);
    }

  });

  console.log(inputValue);
};

export const focus = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const errorElement = findInputError(input);

  errorElement?.classList.remove('input__error_visible');
};

export const blur = (event: Event): void => {
  const input = event.target as HTMLInputElement;
  const result = Validator.validate(input.name, input.value);

  if (result) {
    addError(input, result);
  }
};
