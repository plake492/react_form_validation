import * as React from 'react';
import { InputTypes } from '../types';
interface IdValueProps {
    id: string;
    value: string | number;
}
export declare const useFormFieldsValidation: ({ children, }: {
    children: React.ReactElement[] | React.ReactElement;
}) => {
    missingRequiredValue: boolean;
    updateRequiredFieldValue: ({ id, value }: IdValueProps) => void;
    formItemValues: {
        [key: string]: {
            [key: string]: string | number | boolean;
        };
    };
    setFormItemValues: React.Dispatch<React.SetStateAction<{
        [key: string]: {
            [key: string]: string | number | boolean;
        };
    }>>;
    containesValidationError: boolean;
    checkFieldValidation: ({ id, value, validationType, isTouched, shouldValidate, isRequired, type, }: {
        id: string;
        value: string | number | Function;
        validationType: 'email' | 'text' | 'password' | Function;
        isTouched: boolean;
        shouldValidate: boolean;
        isRequired: boolean;
        type: InputTypes;
    }) => boolean;
};
export {};
