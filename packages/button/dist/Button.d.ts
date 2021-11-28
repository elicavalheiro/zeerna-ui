import * as React from 'react';
import * as S from './Button.styles';
import { As } from '@zeerna-ui/utils';
export declare type ButtonOptions = {
    /**
     * The HTML button type
     */
    type?: 'button' | 'reset' | 'submit';
    /**
     * The style variation
     */
    variationType?: 'primary' | 'secondary' | 'rounded' | 'ghost';
} & {
    as?: As;
} & {
    children?: React.ReactNode;
} & S.ButtonContainerVariants;
export declare type ButtonProps = ButtonOptions & {};
export declare const Button: As<any>;
