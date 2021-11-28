import { VariantProps } from '@stitches/react';
import { styled } from '@zeerna-ui/theme';

export const ButtonContainer = styled('button', {
  padding: '$small2 $medium3',
  borderRadius: '$medium',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'all ease 0.2s',

  variants: {
    variationType: {
      primary: {
        backgroundColor: '$accent9',
        color: '$accent12',
        border: '1px solid transparent',

        '&:hover': {
          backgroundColor: '$accent8',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid $accent9',
        color: '$accent9',

        '&:hover': {
          backgroundColor: '$accent4',
        },
      },
      rounded: {
        borderRadius: '$circle',
        backgroundColor: '$accent9',
        color: '$accent12',
        border: '1px solid transparent',
        padding: '$small2 $medium1',

        '&:hover': {
          backgroundColor: '$accent8',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        color: '$accent9',

        '&:hover': {
          backgroundColor: '$accent4',
        },
      },
    },
  },
});

export type ButtonContainerVariants = VariantProps<typeof ButtonContainer>;
