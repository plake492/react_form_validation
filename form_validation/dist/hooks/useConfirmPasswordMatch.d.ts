import * as React from 'react';
interface IdValueProps {
    id: string;
    value: string | number;
    overRideCurrentIsTouched?: boolean;
}
export declare const useConfirmPasswordMatch: ({ children, excludeFieldFromConfirmPassword, }: {
    children: React.ReactElement[] | React.ReactElement;
    excludeFieldFromConfirmPassword: string | undefined;
}) => {
    passwordMatchError: boolean;
    passwordIDs: string[];
    handlePasswordMatchOnBlur: ({ id, value }: IdValueProps) => void;
    checkIfPasswordMatchIsNeeded: ({ id }: {
        id: string;
    }) => boolean;
    updatePasswordValue: ({ id, value }: IdValueProps) => void;
    handlePasswordsMatch: ({ id, value, overRideCurrentIsTouched, }: IdValueProps) => void;
};
export {};
