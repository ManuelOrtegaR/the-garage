import variables from './theme.module.scss';

const theme = {
  colors: {
    gray200: variables['gray-200'],
    gray100: variables['gray-100'],
    mainColor: variables.mainColor,
    secondaryColor: variables.secondaryColor,
    buttonColor: variables.buttonColor,
  },
  fonts: [
    '14px',
    variables['font-1'],
    variables['font-2'],
    variables['font-3'],
    variables['font-4'],
    variables['font-5'],
    variables['font-6'],
  ],
  fontFamily: {
    mainFont: 'Arial',
    titleFont: 'Anton',
  },
  lineHeight: {
    base: variables.lineHeightBase,
    small: variables.lineHeightSm,
    lg: variables.lineHeightLg,
  },
};

export default theme;
