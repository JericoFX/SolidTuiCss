import {
  defineRecipe,
  defineStyles,
  defineSlotRecipe,
  type Preset,
} from '@pandacss/dev';

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
export const windows = defineRecipe({
  className: 'tui-windows',
  description: 'Windows',
  base: {
    backgroundColor: '{colors.tui.blue168}',
    padding: '1px',
    display: 'inline-block',
    position: 'relative',
    boxShadow: '10px 10px black',
    color: '{colors.tui.white255}',
  },
  variants: {
    backgroundColor: {
      GreenWhite: {
        backgroundImage: '{assets.greenWhite}',
        backgroundRepeat: 'repeat',
      },
      GreenBlack: {
        backgroundImage: '{assets.greenBlack}',
        backgroundRepeat: 'repeat',
      },
      CyanWhite: {
        backgroundImage: '{assets.cyanWhite}',
        backgroundRepeat: 'repeat',
      },
      CyanBlack: {
        backgroundImage: '{assets.cyanBlack}',
        backgroundRepeat: 'repeat',
      },
      RedWhite: {
        backgroundImage: '{assets.redWhite}',
        backgroundRepeat: 'repeat',
      },
      RedBlack: {
        backgroundImage: '{assets.redWhite}',
        backgroundRepeat: 'repeat',
      },
      PurpleWhite: {
        backgroundImage: '{assets.purpleWhite}',
        backgroundRepeat: 'repeat',
      },
      PurpleBlack: {
        backgroundImage: '{assets.purpleBlack}',
        backgroundRepeat: 'repeat',
      },
      YellowWhite: {
        backgroundImage: '{assets.yellowWhite}',
        backgroundRepeat: 'repeat',
      },
      OrangeWhite: {
        backgroundImage: '{assets.orangeWhite}',
        backgroundRepeat: 'repeat',
      },
      OrangeBlack: {
        backgroundImage: '{assets.orangeBlack}',
        backgroundRepeat: 'repeat',
      },
    },
    sizes: {
      small: {
        maxW: '20vw',
        maxH: '10vh',
      },
      medium: {
        maxW: '30vw',
        maxH: '15vh',
      },
      large: {
        maxW: '50vw',
        maxH: '25vh',
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'RedBlack',
    sizes: 'large',
  },
  jsx: ['TuiWindow', 'Window'],
});
export const divider = defineRecipe({
  className: 'tui-divider',
  description: 'A line that divide something?',
  base: {
    borderBottom: '2px solid rgb(255, 255, 255)',
    display: 'block',
    margin: '6px 0px',
  },
  variants: {
    black: {
      true: {
        borderBottom: '2px solid rgb(0, 0, 0)',
        display: 'block',
      },
    },
  },
  jsx: ['TuiDivider', 'Divider'],
});
export const dropdown = defineSlotRecipe({
  className: 'tui-dropdown',
  description: 'A dropdown',
  slots: ['dropdown', 'content'],
  base: {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover > div:first-of-type': {
        display: 'block',
      },
    },
    content: {
      display: 'none',
      position: 'absolute',
      backgroundColor: 'rgb(168, 168, 168)',
      minWidth: '200px',
      padding: '6px',
      zIndex: 9,
      '& ul': {
        border: '2px black solid',
      },
      '& ul li': {
        display: 'block !important',
        margin: '6px',
      },
      '& ul li a:hover': {
        backgroundColor: 'rgb(0, 168, 0)',
      },
    },
  },
});
export const fieldset = defineSlotRecipe({
  className: 'tui-fieldset',
  description: 'A Fieldset',
  slots: ['fieldset', 'legend'],
  base: {
    fieldset: {
      border: '6px white double',
      padding: '12px',
      backgroundColor: 'inherit',
      marginBottom: '6px',
    },
    legend: {
      color: 'rgb(255, 255, 0)',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
  },
  variants: {
    fieldset: {
      noLegend: {
        true: {
          marginTop: 0,
        },
      },
      dotted: {
        true: {
          borderStyle: 'dotted !important',
          borderWidth: '2px !important',
        },
      },
      solid: {
        true: {
          borderStyle: 'solid !important',
          borderWidth: '2px !important',
        },
      },
      doble: {
        true: {
          borderStyle: 'double !important',
          borderWidth: '6px !important',
        },
      },
      dashed: {
        true: {
          borderStyle: 'dashed !important',
          borderWidth: '2px !important',
        },
      },
      backgroundColor: {
        GreenWhite: {
          backgroundImage: '{assets.greenWhite}',
          backgroundRepeat: 'repeat',
        },
        GreenBlack: {
          backgroundImage: '{assets.greenBlack}',
          backgroundRepeat: 'repeat',
        },
        CyanWhite: {
          backgroundImage: '{assets.cyanWhite}',
          backgroundRepeat: 'repeat',
        },
        CyanBlack: {
          backgroundImage: '{assets.cyanBlack}',
          backgroundRepeat: 'repeat',
        },
        RedWhite: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
        RedBlack: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
        PurpleWhite: {
          backgroundImage: '{assets.purpleWhite}',
          backgroundRepeat: 'repeat',
        },
        PurpleBlack: {
          backgroundImage: '{assets.purpleBlack}',
          backgroundRepeat: 'repeat',
        },
        YellowWhite: {
          backgroundImage: '{assets.yellowWhite}',
          backgroundRepeat: 'repeat',
        },
        OrangeWhite: {
          backgroundImage: '{assets.orangeWhite}',
          backgroundRepeat: 'repeat',
        },
        OrangeBlack: {
          backgroundImage: '{assets.orangeBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      textLeft: {
        true: {
          textAlign: 'left',
        },
      },
      textRight: {
        true: {
          textAlign: 'right',
        },
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'RedBlack',
    noLegend: true,
  },
  jsx: ['TuiFieldset', 'fieldset', 'legend'],
});
export const input = defineSlotRecipe({
  className: 'tui-input',
  description: 'Input',
  slot: ['input', 'label'],
  base: {
    input: {
      backgroundColor: 'rgb(0, 0, 0)',
      color: 'white',
      outline: 0,
      border: 'none',
      borderRadius: 0,
      _focus: {
        backgroundColor: 'rgb(255, 255, 0) !important',
        color: 'black !important',
      },
    },
    label: {
      color: 'white',
      w: '100px',
      display: 'inline-block',
      marginRight: '10px',
    },
  },
  variants: {
    disabled: {
      input: {
        true: {
          backgroundColor: 'rgb(168, 168, 168)',
          color: 'black',
        },
      },
      label: {
        disabled: {
          true: {
            color: 'black',
          },
        },
        size: {
          sm: {
            w: '70px',
            marginRight: '5px',
          },
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
    },
  },
  jsx: ['TuiInput', 'input', 'label'],
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
          },
        },
        fonts: {
          DOS: { value: 'DOS, sans-serif' },
        },
        assets: {
          greenWhite: {
            value: { type: 'url', value: '/images/bg-green-white.png' },
          },
          greenBlack: {
            value: { type: 'url', value: '/images/bg-green-black.png' },
          },
          cyanWhite: {
            value: { type: 'url', value: '/images/bg-cyan-white.png' },
          },
          cyanBlack: {
            value: { type: 'url', value: '/images/bg-cyan-black.png' },
          },
          purpleWhite: {
            value: { type: 'url', value: '/images/bg-purple-white.png' },
          },
          purpleBlack: {
            value: { type: 'url', value: '/images/bg-purple-black.png' },
          },
          yellowWhite: {
            value: { type: 'url', value: '/images/bg-yellow-black.png' },
          },
          orangeWhite: {
            value: { type: 'url', value: '/images/bg-orange-white.png' },
          },
          orangeBlack: {
            value: { type: 'url', value: '/images/bg-orange-black.png' },
          },
        },
      },

      recipes: {
        button,
        windows,
        divider,
      },
      slotRecipes: {
        dropdown,
        fieldset,
        input,
      },
    },
  },
};
