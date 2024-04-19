import { defineRecipe, defineStyles, type Preset } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'tui-button',
  description: 'A button with some nice style',
  base: {
    display: 'inline-block',
    outline: '0',
    padding: '1px 10px',
    backgroundColor: '{colors.tui.green}',
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '10px 10px black',
    borderRadius: '0px',
    userSelect: 'none',
    _active: {
      backgroundColor: 'rgb(0, 168, 168) !important',
      color: 'black !important',
      boxShadow: 'none !important',
    },
    _focus: {
      color: 'rgb(0, 255, 255) !important',
    },
  },
  variants: {
    disabled: {
      true: {
        textDecoration: 'line-through',
      },
    },
    color: {
      Black168: { backgroundColor: '{colors.tui.black168}' },
      Blue168: { backgroundColor: '{colors.tui.blue168}' },
      Green168: { backgroundColor: '{colors.tui.green168}' },
      Cyan168: { backgroundColor: '{colors.tui.cyan168}' },
      Red168: { backgroundColor: '{colors.tui.red168}' },
      Purple168: { backgroundColor: '{colors.tui.purple168}' },
      Yellow168: { backgroundColor: '{colors.tui.yellow168}' },
      White168: { backgroundColor: '{colors.tui.white168}' },
      Orange168: { backgroundColor: '{colors.tui.orange168}' },
    },
    textColor: {
      Black255: { color: '{colors.tui.black255}' },
      Blue255: { color: '{colors.tui.blue255}' },
      Green255: { color: '{colors.tui.green255}' },
      Cyan255: { color: '{colors.tui.cyan255}' },
      Red255: { color: '{colors.tui.red255}' },
      Purple255: { color: '{colors.tui.purple255}' },
      Yellow255: { color: '{colors.tui.yellow255}' },
      White255: { color: '{colors.tui.white255}' },
      Orange255: { color: '{colors.tui.orange255}' },
    },
  },
  defaultVariants: {
    color: 'Green168',
    textColor: 'Black255',
  },

  jsx: ['TuiButton', 'Button', 'button'],
});

export const tuicss: Preset = {
  theme: {
    extend: {
      tokens: {
        colors: {
          tui: {
            white168: { value: '#a8a8a8 !important' },
            black168: { value: '#000000 !important' },
            blue168: { value: '#0000a8 !important' },
            green168: { value: '#00a800 !important' },
            cyan168: { value: '#00a8a8 !important' },
            red168: { value: '#a80000 !important' },
            purple168: { value: '#a800a8 !important' },
            yellow168: { value: '#a8a800 !important' },
            orange168: { value: '#a85600 !important' },
            white255: { value: '#FFFFFF !important' },
            black255: { value: '#000000 !important' },
            blue255: { value: '#0000FF !important' },
            green255: { value: '#00FF00 !important' },
            cyan255: { value: '#00FFFF !important' },
            red255: { value: '#FF0000 !important' },
            purple255: { value: '#FF00FF !important' },
            yellow255: { value: '#FFFF00 !important' },
            orange255: { value: '#FFA800 !important' },
            base: {
              value: '{colors.tui.white168}',
            },
            background: { value: '{colors.tui.black168}' },
          },
        },
        fonts: {
          DOS: { value: 'DOS, sans-serif' },
        },
      },
      recipes: {
        button,
      },
    },
  },
};
