import * as React from 'react';
interface PropTypes {
    bem: Function;
    children: React.ReactElement;
    message?: string | JSX.Element | string[];
    forceMessageClass?: boolean;
}
export declare const useFormFieldMessages: ({ message, children, bem, forceMessageClass, }: PropTypes) => JSX.Element;
export {};
