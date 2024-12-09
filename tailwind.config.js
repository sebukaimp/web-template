/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'display-large': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-medium': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-large': ['1.75rem', { lineHeight: '1.3' }],
        'heading-medium': ['1.5rem', { lineHeight: '1.4' }],
        'heading-small': ['1.25rem', { lineHeight: '1.4' }],
        'body-large': ['1.125rem', { lineHeight: '1.5' }],
        'body-medium': ['1rem', { lineHeight: '1.5' }],
        'body-small': ['0.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        'label-large': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'label-medium': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'label-small': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  colors: {
    'content-primary': '#1a1a1a',

    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    // Neutral colors for text and backgrounds
    content: {
      primary: 'rgb(var(--content-primary) / <alpha-value>)',
      secondary: 'rgb(var(--content-secondary) / <alpha-value>)',
      tertiary: 'rgb(var(--content-tertiary) / <alpha-value>)',
    },
    surface: {
      primary: 'rgb(var(--surface-primary) / <alpha-value>)',
      secondary: 'rgb(var(--surface-secondary) / <alpha-value>)',
      tertiary: 'rgb(var(--surface-tertiary) / <alpha-value>)',
    },
  },
  // Typography scale
  fontSize: {
    'display-large': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'display-medium': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'display-small': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    'heading-large': ['1.75rem', { lineHeight: '1.3' }],
    'heading-medium': ['1.5rem', { lineHeight: '1.3' }],
    'heading-small': ['1.25rem', { lineHeight: '1.4' }],
    'body-large': ['1.125rem', { lineHeight: '1.5' }],
    'body-medium': ['1rem', { lineHeight: '1.5' }],
    'body-small': ['0.875rem', { lineHeight: '1.5' }],
    'label-large': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
    'label-medium': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
    'label-small': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
  },


  plugins: [],


}