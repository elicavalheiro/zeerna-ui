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
        'Introdução',
        ['Sobre o Cavilha'],
        'Guidelines',
        ['Temas e cores', 'Tipografia', 'Icones', 'Layout'],
        'Versão 0.0.1',
        'Review QA',
        'Review Dev',
        'WIP',
        'Próximos',
        'O Projeto',
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: ZeernaTheme,
  },
};