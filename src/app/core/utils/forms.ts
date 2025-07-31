import { AbstractControl } from '@angular/forms';

const ERROR_MESSAGES = {
  required: 'This field is required.',
  email: 'Please enter a valid email address.',
  minlength: (length: number) => `Must be at least ${length} characters long.`,
  maxlength: (length: number) => `Cannot exceed ${length} characters.`,
  min: (value: number) => `Value must be greater than or equal to ${value}.`,
  max: (value: number) => `Value must be less than or equal to ${value}.`,
  range: 'Range is invalid',
  pattern: 'The entered format is invalid.',
};

export const getErrorMessage = (control: AbstractControl | null) => {
  if (!control || !control.errors || !control.touched) return null;

  if (control.errors['required']) return ERROR_MESSAGES.required;

  if (control.errors['email']) return ERROR_MESSAGES.email;

  if (control.errors['pattern']) return ERROR_MESSAGES.pattern;

  if (control.errors['minlength'])
    return ERROR_MESSAGES.minlength(
      control.errors['minlength']?.requiredLength
    );

  if (control.errors['maxlength'])
    return ERROR_MESSAGES.maxlength(
      control.errors['maxlength']?.requiredLength
    );

  if (control.errors['min'])
    return ERROR_MESSAGES.min(control.errors['min']?.min);

  if (control.errors['max'])
    return ERROR_MESSAGES.max(control.errors['max']?.max);

  if (control.errors['range']) return ERROR_MESSAGES.range;

  return null;
};
