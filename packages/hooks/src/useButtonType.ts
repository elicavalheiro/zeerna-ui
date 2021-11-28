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
export function useButtonType(value?: React.ElementType) {
  const [isButton, setIsButton] = React.useState(!value);

  const refCallback = React.useCallback((node) => {
    if (!node) return;
    setIsButton(node.tagName === 'BUTTON');
  }, []);

  const type = isButton ? 'button' : undefined;
  return { ref: refCallback, type } as const;
}
