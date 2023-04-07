import * as React from 'react';
export type HTMLFormEventElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
interface FormEventPropTypes<T> {
    onChange: (v: string | number | boolean, e?: React.ChangeEvent) => void;
    onClick: (v: string | number | boolean, e?: React.MouseEvent) => void;
    onBlur: React.FocusEventHandler<T>;
}
export declare const formEvents: <T extends HTMLFormEventElements>({ onChange, onClick, onBlur, }: FormEventPropTypes<T>) => {
    onChange: (event: React.ChangeEvent<T>) => void;
    onClick: (event: React.MouseEvent<T, MouseEvent>) => void;
    onBlur: React.FocusEventHandler<T>;
};
export {};
