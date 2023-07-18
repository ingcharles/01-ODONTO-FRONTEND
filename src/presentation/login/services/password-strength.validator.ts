import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function CreatePasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        console.log("CreatePasswordStrengthValidator");
        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}

@Directive({
    selector: "[passwordStrength]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:PasswordStrengthDirective,
        multi: true
    }]
})
export class PasswordStrengthDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return CreatePasswordStrengthValidator()(control);
    }
}