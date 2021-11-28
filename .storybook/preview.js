import ZeernaTheme from './theme';

// eslint-disable-next-line import/prefer-default-export
export const parameters = {
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: false,
    },
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Guides',
        ['Theming', 'Typography', 'Icons', 'Layout'],
        'Components',
        'Examples',
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: ZeernaTheme,
  },
};