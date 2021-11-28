import * as React from 'react';
import * as S from './Button.styles';
import { As, forwardRef } from '@zeerna-ui/utils';
import { useButtonType } from '@zeerna-ui/hooks';

export type ButtonOptions = {
  /**
   * The HTML button type
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The style variation
   */
  variationType?: 'primary' | 'secondary' | 'rounded' | 'ghost';
} & { as?: As } & { children?: React.ReactNode } & S.ButtonContainerVariants;

export type ButtonProps = ButtonOptions & {};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const { type, variationType = 'primary', children, as, ...rest } = props;
  const contentProps = { children };

  const { ref: _ref, type: defaultType } = useButtonType(as);

  return (
    <S.ButtonContainer
      ref={ref}
      variationType={variationType}
      as={as}
      type={type ?? defaultType}
      {...rest}
    >
      <ButtonContent {...contentProps} />
    </S.ButtonContainer>
  );
});

type ButtonContentProps = Pick<ButtonProps, 'children'>;

const ButtonContent = (props: ButtonContentProps) => {
  const { children } = props;
  return <>{children}</>;
};
