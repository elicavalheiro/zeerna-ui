module.exports = {
  stories: ['../packages/**/stories/*.stories.@(js|jsx|ts|tsx|mdx)', '../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@pxtrn/storybook-addon-themes',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  features: {
    postcss: false,
  },
};