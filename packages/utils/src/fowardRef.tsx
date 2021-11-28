import * as React from 'react';

export type As<Props = any> = React.ElementType<Props>;

/**
 * A base type definition for the fowardRef function
 *
 * - WIP -
 * TODO: undestand exactly what is the purpose of this function type definition
 * TODO: improve these definitions for my context
 *
 * @param component
 * @returns a React.forwardRef function
 */
export function forwardRef<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<any, Props & { as?: As }>
) {
  return React.forwardRef(component) as unknown as Component;
}
