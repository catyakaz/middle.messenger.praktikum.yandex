import { ValidateRegex } from './ValidateRegex';

class Validator {
  private static INPUTS: Record<
  string,
  {
    pattern: RegExp;
    error: string;
  }> = ValidateRegex;

  static validate(inputName: string, inputValue: string) {
    const result: {
      verify: boolean;
      message: string;
    } = {
      verify: true,
      message: '',
    };

    const pattern = Validator.INPUTS[inputName]?.pattern;

    if (!pattern) {
      return;
    }

    if (!pattern.test(inputValue)) {
      result.verify = false;
      result.message = Validator.INPUTS[inputName].error;
    }

    return result;
  }
}

export default Validator;
