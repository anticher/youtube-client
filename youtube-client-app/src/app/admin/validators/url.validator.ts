import { FormControl } from "@angular/forms";

export class UrlValidator {
    static isCorrect(control: FormControl) :{[key: string]: boolean} | null {
        const reg = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        if (control.value.match(reg) || control.value.length === 0) {
            return null
        }
        return {'urlValidator': true}
    }
}
