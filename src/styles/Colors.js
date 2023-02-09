const colors = {
  dark: {
    background: '#16161a',
    headline: '#fffffe',
    paragraph: '#94a1b2',
    button: '#7f5af0',
    buttonText: '#fffffe',
  },
  light: {
    background: '#fffffe',
    headline: '#16161a',
    paragraph: '#5f6c7b',
    button: '#7f5af0',
    buttonText: '#fffffe',
  },
};

function getColors(isDarkMode) {
  return isDarkMode ? colors.dark : colors.light;
}

export { getColors };
