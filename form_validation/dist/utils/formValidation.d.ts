export interface FormValidationTypes {
    text: Function;
    email: RegExp;
    password: RegExp;
    'date-mm/dd/yyyy': RegExp;
}
export declare const formValidation: FormValidationTypes;
