import { Directive ,Input} from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appMatchPassword]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective {
  @Input('appMatchPassword') MatchPassword: string[] = [];

  constructor(private customValidator: CustomvalidationService) {}

  validate(control:AbstractControl): ValidationErrors | null {
    return this.customValidator.MatchPassword(
      this.MatchPassword[0],
      this.MatchPassword[1]
    )(control);
  }
}
