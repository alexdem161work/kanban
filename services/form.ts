export type FormFields = {
  [key: string]: string | null | object | number | boolean;
}

interface FormErrors {
  [key: string]: string | null;
}

export default class Form {
  public fields: FormFields;
  public errors: FormErrors;

  constructor(fields: FormFields) {
    this.fields = fields;
    this.errors = {};
  }

  public getValues() {
    return this.fields;
  }

  public setErrors(errors: FormErrors): void {
    this.errors = errors;
  }
}
