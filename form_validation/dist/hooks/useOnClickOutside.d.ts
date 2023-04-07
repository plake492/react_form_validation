import { MutableRefObject } from 'react';
interface PropTypes {
    handler: Function;
    reference: MutableRefObject<HTMLElement>;
    exception?: MutableRefObject<HTMLElement> | undefined;
}
export declare const useOnClickOutside: ({ handler, reference, exception, }: PropTypes) => void;
export {};
