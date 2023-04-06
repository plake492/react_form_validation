import * as React from 'react';
interface FadeInComponentTypes {
    trigger: boolean;
    timeout?: number;
    children: React.ReactNode;
}
export default function FadeInComponent({ trigger, timeout, children, }: FadeInComponentTypes): JSX.Element;
export {};
