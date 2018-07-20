import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormGroupDirective, NgForm, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  private passwordRegex: RegExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);

  public userRegistrationForm: FormGroup;

  public confirmValidParentMatcher = new ConfirmValidParentMatcher();

  public errors = {
    fullName: 'Le nom complet doit faire entre 1 et 128 caractères',
    email: 'L\'email doit être une adresse mail valide (utilisateur@domaine)',
    confirmEmail: 'Les adresses mail doivent correspondre',
    password: 'Le mot de passe doit faire entre 7 et 15 caractères, et contenir au moins un chiffre et un caractère spécial',
    confirmPassword: 'Les mots de passe doivent correspondre'
  };
  ;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {

    this.userRegistrationForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]],

      emailGroup: this.formBuilder.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        confirmEmail: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual }),

      passwordGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.pattern(this.passwordRegex)
        ]],
        confirmPassword: ['', Validators.required]
      }, { validator: CustomValidators.childrenEqual })
    });
  }

  register(): void {
    // API call to register your user
  }
}

/**
 * Custom validator
 */
class CustomValidators {
  /**
   *  Validates that child controls in the form group are equal
   */
  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
    return isValid ? null : { childrenNotEqual: true };
  }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.parent.invalid && control.touched;
  }
}
