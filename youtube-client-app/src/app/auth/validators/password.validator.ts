import { FormControl } from "@angular/forms";

export class PasswordValidator {
    public static isCorrect(control: FormControl) :{[key: string]: boolean} | null {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
        if (control.value.match(reg) || control.value.length === 0) {
            return null
        }
        return {'passwordValidator': true}
    }
}
