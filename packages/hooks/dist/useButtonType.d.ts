import * as React from 'react';
/**
 * Check button type and return its ref and type
 *
 * If the value provided is a button type, the default type returned is 'button', else it return a undefined type
 * ps.: button type would only be possible if the value provided is a "button"
 *
 * @param value
 * @returns ref, type
 */
export declare function useButtonType(value?: React.ElementType): {
    readonly ref: (node: any) => void;
    readonly type: "button" | undefined;
};
