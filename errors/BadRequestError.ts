interface FormErrors {
  [key: string]: string|null;
}

export default class BadRequestError extends Error {
  private readonly errors: FormErrors;

  constructor(message: string, errors: FormErrors) {
    super(message);
    this.errors = errors;
  }

  public getErrors(): FormErrors {
    return this.errors;
  }
}
