import { defineRecipe, defineSlotRecipe, type Preset } from '@pandacss/dev';
const button = defineRecipe({
  className: 'tui-button',
  description: 'A button with some nice style',
  base: {
    display: 'inline-block',
    outline: '0',
    padding: '.0625rem .625rem',
    backgroundColor: '{colors.tui.green255}',
    color: '#000000',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '.625rem .625rem black',
    borderRadius: '0rem',
    userSelect: 'none',
    _active: {
      backgroundColor: '{colors.tui.cyan168} !important',
      color: 'black !important',
      boxShadow: 'none !important',
    },
    _focus: {
      color: '{colors.tui.cyan255} !important',
    },
  },
  variants: {
    disabled: {
      true: {
        textDecoration: 'line-through',
        pointerEvents: 'none',
        backgroundColor: '{colors.tui.white168}',
        boxShadow: 'none !important',
        cursor: 'not-allowed',
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
    size: {
      sm: {
        fontSize: '1px',
      },
    },
  },

  defaultVariants: {
    color: 'Green168',
    textColor: 'Black255',
  },

  jsx: ['TuiButton', 'Button', 'button'],
});
const windows = defineRecipe({
  className: 'tui-windows',
  description: 'Windows',
  base: {
    backgroundColor: '{colors.tui.blue168}',
    padding: '.0625rem',
    display: 'inline-block',
    position: 'relative',
    boxShadow: '.625rem .625rem black',
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
        backgroundImage: '{assets.redBlack}',
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
const divider = defineRecipe({
  className: 'tui-divider',
  description: 'A line that divide something?',
  base: {
    borderBottom: '.125rem solid rgb(255, 255, 255)',
    display: 'block',
    margin: '.375rem 0rem',
  },
  variants: {
    black: {
      true: {
        borderBottom: '.125rem solid rgb(0, 0, 0)',
        display: 'block',
      },
    },
    space: {
      true: {
        marginTop: '3vw',
        marginBottom: '3vw',
      },
    },
  },
  jsx: ['TuiDivider'],
});
const dropdown = defineSlotRecipe({
  className: 'tui-dropdown',
  description: 'A dropdown',
  slots: ['dropdown', 'content'],

  base: {
    dropdown: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      padding: '.0625rem .625rem',
      '&:hover > div:first-of-type': {
        display: 'block',
      },
    },
    content: {
      display: 'none',
      position: 'absolute',
      backgroundColor: 'rgb(168, 168, 168)',
      minWidth: '12.5rem',
      zIndex: 9,
      '& ul': {
        border: '.125rem black solid',
        margin: '.375rem',
      },
      '& ul li': {
        display: 'block !important',
        margin: '.375rem',
      },
      '& ul li a:hover': {
        backgroundColor: 'rgb(0, 168, 0)',
      },
    },
  },
  variants: {
    disabled: {
      true: {
        content: {
          '& tr td': {
            color: 'rgb(168, 168, 168)',
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
  jsx: ['TuiDropdown', 'Dropdown', 'TuiOption', 'Option', 'ul', 'li', 'a'],
});
const fieldset = defineSlotRecipe({
  className: 'tui-fieldset',
  description: 'A Fieldset',
  slots: ['fieldset', 'legend'],
  base: {
    fieldset: {
      border: '0.375rem white double',
      padding: '1.125rem',
      backgroundColor: 'inherit',
      marginBottom: '0.375rem',
    },
    legend: {
      color: 'rgb(255, 255, 0)',
      textAlign: 'center',
      fontSize: '{fontSizes.sm}',
      fontWeight: 'bold',
    },
  },
  variants: {
    noLegend: {
      true: {
        fieldset: {
          marginTop: '0',
        },
      },
    },
    dotted: {
      true: {
        fieldset: {
          borderStyle: 'dotted !important',
          borderWidth: '{borderWidths.md}',
        },
      },
    },
    solid: {
      true: {
        fieldset: {
          borderStyle: 'solid !important',
          borderWidth: '{borderWidths.md}',
        },
      },
    },
    doble: {
      true: {
        fieldset: {
          borderStyle: 'double !important',
          borderWidth: '{borderWidths.md}',
        },
      },
    },
    dashed: {
      true: {
        fieldset: {
          borderStyle: 'dashed !important',
          borderWidth: '{borderWidths.md}',
        },
      },
    },
    backgroundColor: {
      GreenWhite: {
        fieldset: {
          backgroundImage: '{assets.greenWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      GreenBlack: {
        fieldset: {
          backgroundImage: '{assets.greenBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanWhite: {
        fieldset: {
          backgroundImage: '{assets.cyanWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanBlack: {
        fieldset: {
          backgroundImage: '{assets.cyanBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      RedWhite: {
        fieldset: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      RedBlack: {
        fieldset: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleWhite: {
        fieldset: {
          backgroundImage: '{assets.purpleWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleBlack: {
        fieldset: {
          backgroundImage: '{assets.purpleBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      YellowWhite: {
        fieldset: {
          backgroundImage: '{assets.yellowWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeWhite: {
        fieldset: {
          backgroundImage: '{assets.orangeWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeBlack: {
        fieldset: {
          backgroundImage: '{assets.orangeBlack}',
          backgroundRepeat: 'repeat',
        },
      },
    },
    textLeft: {
      true: {
        fieldset: {
          textAlign: 'left',
        },
      },
    },
    textRight: {
      true: {
        fieldset: {
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
const input = defineSlotRecipe({
  className: 'tui-input',
  description: 'Input',
  slots: ['input', 'label'],
  base: {
    input: {
      backgroundColor: 'rgb(0, 0, 0)',
      color: 'white',
      outline: 0,
      border: 'none',
      borderRadius: 0,
      verticalAlign: 'middle',
      _focus: {
        backgroundColor: 'rgb(255, 255, 0) !important',
        color: 'black !important',
      },
    },
    label: {
      color: 'white',
      w: '6.25rem',
      display: 'inline-block',
      marginRight: '.625rem',
    },
  },
  variants: {
    disabled: {
      true: {
        input: {
          backgroundColor: 'rgb(168, 168, 168)',
          color: 'black',
          userSelect: 'none',
          cursor: 'not-allowed',
        },
        label: {
          color: 'black',
        },
      },
    },

    size: {
      sm: {
        label: {
          w: '4.375rem',
          marginRight: '.3125rem',
        },
      },
    },
    textColor: {
      Black255: { label: { color: '{colors.tui.black255}' } },
      Blue255: { label: { color: '{colors.tui.blue255}' } },
      Green255: { label: { color: '{colors.tui.green255}' } },
      Cyan255: { label: { color: '{colors.tui.cyan255}' } },
      Red255: { label: { color: '{colors.tui.red255}' } },
      Purple255: { label: { color: '{colors.tui.purple255}' } },
      Yellow255: { label: { color: '{colors.tui.yellow255}' } },
      White255: { label: { color: '{colors.tui.white255}' } },
      Orange255: { label: { color: '{colors.tui.orange255}' } },
    },
  },
  defaultVariants: {
    textColor: 'White255',
  },
  jsx: ['TuiInput', 'input', 'label'],
});
const modal = defineSlotRecipe({
  className: 'tui-modal',
  description: 'A modal with old style',
  slots: ['modal', 'overlap'],
  base: {
    modal: {
      position: 'absolute',
      maxW: '100%',
      maxH: '100%',
      zIndex: '101',
    },
    overlap: {
      position: 'absolute',
      top: '0rem',
      left: '0rem',
      right: '0rem',
      bottom: '0rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 100,
      display: 'none',
    },
  },
  variants: {
    active: {
      true: {
        overlap: {
          display: 'block !important',
        },
      },
    },
  },
});
const navbar = defineRecipe({
  className: 'tui-navbar',
  description: 'Navbar',
  base: {
    width: '100%',
    backgroundColor: '{colors.tui.white168}',
    color: '{colors.tui.black255}',
    padding: '0px 4px',
    zIndex: 9,
    display: 'block',
    position: 'relative',

    '& ul li': {
      display: 'inline-block',
      marginLeft: '.625rem',
      padding: '.0625rem .1875rem',
      _hover: {
        backgroundColor: '{colors.tui.green168}',
      },
    },
    '& ul li a': {
      display: 'block',
      userSelect: 'none',
    },
  },
  jsx: ['TuiNav', 'navbar', 'nav'],
});
const panel = defineSlotRecipe({
  className: 'tui-panel',
  description: 'A nice panel',
  slots: ['panel', 'header', 'content'],
  base: {
    panel: {
      backgroundColor: '{colors.tui.white168}',
      display: 'inline-block',
      color: 'white',
      boxShadow: '.625rem .625rem black',
      maxW: '50vw',
    },
    header: {
      paddingTop: '.125rem',
      display: 'block',
      background: 'white',
      textAlign: 'center',
      color: 'black',
    },
    content: {
      padding: '1.125rem',
      backgroundColor: 'inherit',
      color: '{colors.tui.black255}',
    },
  },
  variants: {
    backgroundColor: {
      Black168: { panel: { backgroundColor: '{colors.tui.black168}' } },
      Blue168: { panel: { backgroundColor: '{colors.tui.blue168}' } },
      Green168: { panel: { backgroundColor: '{colors.tui.green168}' } },
      Cyan168: { panel: { backgroundColor: '{colors.tui.cyan168}' } },
      Red168: { panel: { backgroundColor: '{colors.tui.red168}' } },
      Purple168: { panel: { backgroundColor: '{colors.tui.purple168}' } },
      Yellow168: { panel: { backgroundColor: '{colors.tui.yellow168}' } },
      White168: { panel: { backgroundColor: '{colors.tui.white168}' } },
      Orange168: { panel: { backgroundColor: '{colors.tui.orange168}' } },
    },
  },
  jsx: ['TuiPanel', 'TuiHeader', 'TuiContent'],
});
const progressbar = defineSlotRecipe({
  className: 'tui-progress',
  description: 'A nice progressbar',
  slots: ['bases', 'label', 'progress'],
  base: {
    bases: {
      display: 'block',
      position: 'relative',
      height: '1.25rem',
      width: '12.5rem',
      backgroundColor: '{colors.tui.cyan168}',
      overflow: 'hidden',
    },
    label: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      zIndex: 1,
    },
    progress: {
      position: 'absolute',
      left: '0rem',
      backgroundColor: '{colors.tui.cyan255}',
      height: '100%',
      display: 'inline-block',
    },
  },
  variants: {
    backgroundColor: {
      GreenWhite: {
        bases: {
          backgroundImage: '{assets.greenWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      GreenBlack: {
        bases: {
          backgroundImage: '{assets.greenBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanWhite: {
        bases: {
          backgroundImage: '{assets.cyanWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanBlack: {
        bases: {
          backgroundImage: '{assets.cyanBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      RedWhite: {
        bases: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      RedBlack: {
        bases: {
          backgroundImage: '{assets.redBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleWhite: {
        bases: {
          backgroundImage: '{assets.purpleWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleBlack: {
        bases: {
          backgroundImage: '{assets.purpleBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      YellowWhite: {
        bases: {
          backgroundImage: '{assets.yellowWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeWhite: {
        bases: {
          backgroundImage: '{assets.orangeWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeBlack: {
        bases: {
          backgroundImage: '{assets.orangeBlack}',
          backgroundRepeat: 'repeat',
        },
      },
    },

    foregroundColor: {
      GreenWhite: {
        progress: {
          backgroundImage: '{assets.greenWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      GreenBlack: {
        progress: {
          backgroundImage: '{assets.greenBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanWhite: {
        progress: {
          backgroundImage: '{assets.cyanWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      CyanBlack: {
        progress: {
          backgroundImage: '{assets.cyanBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      RedWhite: {
        progress: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      RedBlack: {
        progress: {
          backgroundImage: '{assets.redWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleWhite: {
        progress: {
          backgroundImage: '{assets.purpleWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      PurpleBlack: {
        progress: {
          backgroundImage: '{assets.purpleBlack}',
          backgroundRepeat: 'repeat',
        },
      },
      YellowWhite: {
        progress: {
          backgroundImage: '{assets.yellowWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeWhite: {
        progress: {
          backgroundImage: '{assets.orangeWhite}',
          backgroundRepeat: 'repeat',
        },
      },
      OrangeBlack: {
        progress: {
          backgroundImage: '{assets.orangeBlack}',
          backgroundRepeat: 'repeat',
        },
      },
    },
    intermediate: {
      true: {
        progress: {
          position: 'absolute',
          left: 0,
          backgroundColor: '{colors.tui.cyan255}',
          height: 20,
          width: 20,
          display: 'inline-block',
          animation: 'indeterminate 1s backwards',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        },
      },
    },
  },
  jsx: ['TuiProgress', 'progress'],
});
const screen = defineRecipe({
  className: 'tui-screen',
  description: 'Screen',
  base: {
    width: '40rem',
    height: '30rem',
    position: 'relative',
    overflow: 'hidden',
  },
  variants: {
    bordered: {
      true: {
        border: '.125rem solid black',
      },
    },
    centered: {
      true: {
        margin: 'auto',
        marginTop: '1.25rem',
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
    size: {
      sm: {
        width: '40rem',
        height: '30rem',
        position: 'relative',
        overflow: 'hidden',
      },
      md: {
        width: '50rem',
        height: '37.5rem',
        position: 'relative',
        overflow: 'hidden',
      },
      lg: {
        width: '64rem',
        height: '48rem',
        position: 'relative',
        overflow: 'hidden',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    centered: true,
    backgroundColor: 'RedBlack',
  },
  jsx: ['TuiScreen'],
});
const radio = defineSlotRecipe({
  className: 'tui-radio',
  description: 'Radio Buttons',
  slots: ['radio', 'input', 'span'],
  base: {
    radio: {
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      color: 'white',
      paddingLeft: '2.1875rem',
      userSelect: 'none',
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      '&:checked ~ span::after': {
        content: '"(•)"',
        color: '{colors.tui.cyan255}',
      },
      '&:not(checked) ~ span:after': {
        padding: 'right .1875rem',
        content: '"( )"',
      },
    },
    span: {
      position: 'absolute',
      width: '.625rem',
      height: '.625rem',
      cursor: 'pointer',
      top: 0,
      left: 0,
    },
  },
  variants: {
    disabled: {
      true: {
        radio: {
          color: '{colors.tui.white168}',
          cursor: 'not-allowed',
        },
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
  jsx: ['TuiRadio'],
});
const shadow = defineRecipe({
  className: 'tui-shadow',
  description: 'SHADOW',
  base: {
    boxShadow: '{shadows.none}',
  },
  variants: {
    shadow: {
      Shadow1: { boxShadow: '{shadows.Shadow1}' },
      Shadow2: { boxShadow: '{shadows.Shadow2}' },
      Shadow3: { boxShadow: '{shadows.Shadow3}' },
      Shadow4: { boxShadow: '{shadows.Shadow4}' },
      Shadow5: { boxShadow: '{shadows.Shadow5}' },
      Shadow1left: { boxShadow: '{shadows.Shadow1left}' },
      Shadowleft2: { boxShadow: '{shadows.Shadowleft2}' },
      Shadowleft3: { boxShadow: '{shadows.Shadowleft3}' },
      Shadowleft4: { boxShadow: '{shadows.Shadowleft4}' },
      Shadowleft5: { boxShadow: '{shadows.Shadowleft5}' },
    },
  },
  jsx: ['TuiShadow'],
});
const table = defineSlotRecipe({
  className: 'tui-table',
  description: 'Tui Table',
  slots: ['table', 'body', 'thead', 'foot'],
  base: {
    table: {
      border: '.125rem solid rgb(168, 168, 168)',
      borderRight: '.125rem solid rgb(168, 168, 168)',
      padding: '.3125rem',

      borderCollapse: 'collapse',
      userSelect: 'none',
      '& tr td': {
        borderRight: '.125rem solid {colors.tui.white168}',
        padding: '0rem .45rem',
        userSelect: 'none',
      },
      backgroundColor: '{colors.tui.none}',
    },
    body: {
      backgroundColor: 'inherit',
      userSelect: 'none',
      color: 'white',
      '& tr td': {
        borderRight: '.190rem solid rgb(168, 168, 168)',
        padding: '0rem .190rem',
        userSelect: 'none',
      },
    },
    thead: {
      borderRight: '.125rem solid rgb(168, 168, 168)',
      padding: '0rem .125rem',
      backgroundColor: 'inherit',
      color: '{colors.tui.yellow255}',
      textAlign: 'center',
      userSelect: 'none',
    },
    foot: {
      borderRight: '.125rem solid {colors.tui.white168}',
      backgroundColor: 'inherit',
      color: '{colors.tui.yellow255}',
      textAlign: 'center',
      userSelect: 'none',
    },
  },

  variants: {
    borderRight: {
      true: {
        table: {
          '& tr td': {
            borderRight: '.125rem solid {colors.tui.white168}',
          },
        },
      },
    },
    borderBottom: {
      true: {
        table: {
          '& tr td': {
            borderBottom: '.125rem solid {colors.tui.white168}',
          },
        },
      },
    },
    backgroundColor: {
      Black168: { table: { backgroundColor: '{colors.tui.black168}' } },
      Blue168: { table: { backgroundColor: '{colors.tui.blue168}' } },
      Green168: { table: { backgroundColor: '{colors.tui.green168}' } },
      Cyan168: { table: { backgroundColor: '{colors.tui.cyan168}' } },
      Red168: { table: { backgroundColor: '{colors.tui.red168}' } },
      Purple168: { table: { backgroundColor: '{colors.tui.purple168}' } },
      White168: { table: { backgroundColor: '{colors.tui.white168}' } },
    },
    hover: {
      cyan: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.cyan255}',
            color: 'black',
          },
        },
      },
      green: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.green255}',
            color: 'black',
          },
        },
      },
      blue: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.blue255}',
            color: 'white',
          },
        },
      },
      red: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.red255}',
            color: 'black',
          },
        },
      },
      purple: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.purple255}',
            color: 'black',
          },
        },
      },
      white: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.white255}',
            color: 'black',
          },
        },
      },
      orange: {
        body: {
          '& tr:hover': {
            backgroundColor: '{colors.tui.orange168}',
            color: 'black',
          },
        },
      },
    },
    stripped: {
      blue: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.cyan168}',
          },
        },
      },
      green: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.green168}',
            color: '{colors.tui.black255}',
          },
        },
      },
      cyan: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.cyan168}',
          },
        },
      },
      red: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.red168}',
          },
        },
      },
      purple: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.purple168}',
          },
        },
      },
      yellow: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.yellow168}',
          },
        },
      },
      white: {
        body: {
          '& tr:nth-child(even)': {
            backgroundColor: '{colors.tui.white168}',
            color: 'black',
          },
        },
      },
    },
  },
  jsx: [
    'TuiTable',
    'table',
    'tbody',
    'thead',
    'tfoot',
    'tr',
    'td',
    'TuiRoot',
    'TuiBody',
    'TuiThead',
    'TuiFoot',
  ],
});
const textArea = defineRecipe({
  className: 'tui-textarea',
  description: 'Text Area',
  base: {
    backgroundColor: '{colors.tui.black168}',
    border: 'none',
    padding: '0rem',
    color: '{colors.tui.yellow255}',
    outline: 'none',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: '{colors.tui.white168}',
        color: 'black',
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
  jsx: ['TuiTextArea'],
});
const shortcut = defineRecipe({
  className: 'tui-shortcut',
  description: 'Shortcut',
  base: {
    float: 'right',
  },
  jsx: ['TuiShortcut'],
});
const tabs = defineSlotRecipe({
  className: 'tui-tabs',
  description: 'Tabs',
  slots: ['Root', 'tab', 'content'],
  base: {
    Root: {
      backgroundColor: '{colors.tui.blue168}',
      width: '100%',
      padding: '0px 0.625rem 0px 0.625rem',
      '& ul li': {
        display: 'inline-block',
      },
      '& ul li a': {
        display: 'block',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
      },
    },
    tab: {
      padding: '0.125rem 0.625rem 0px 0.625rem',
      color: '{colors.tui.black255}',
      cursor: 'pointer',
      _active: {
        backgroundColor: 'rgb(168, 168, 168)',
        color: 'rgb(0, 0, 168)',
      },
    },
    content: {
      display: 'none',
    },
  },
  variants: {
    disabled: {
      true: {
        tab: {
          textDecoration: 'line-through',
          pointerEvents: 'none',
          backgroundColor: '{colors.tui.white168}',
        },
      },
    },
  },
  jsx: ['TuiTabs', 'Root', 'tab', 'content'],
});
const checkbox = defineSlotRecipe({
  className: 'tui-checkbox',
  slots: ['base', 'input', 'span'],
  base: {
    base: {
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      color: 'white',
      paddingLeft: '30px',
      userSelect: 'none',
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      top: '0px',
      left: '0px',
      pointerEvents: 'none',
      '&:checked ~ span:after': {
        content: '"[√]"',
        color: 'rgb(0, 255, 255)',
      },
      '&:not(checked) ~ span:after': {
        content: '"[ ]"',
        color: 'rgb(0, 255, 255)',
      },
      marginLeft: '-20px',
    },
    span: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      cursor: 'pointer',
      top: '0px',
      left: '0px',
    },
  },
  variants: {
    disabled: {
      true: {
        base: {
          color: '{colors.tui.white168}',
          cursor: 'not-allowed',
        },
        input: {
          cursor: 'not-allowed',
          color: '{colors.tui.white168}',
        },
        span: {
          cursor: 'not-allowed',
          color: '{colors.tui.white168}',
          _after: {
            color: '{colors.tui.white168}',
          },
        },
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
  jsx: ['TuiCheckbox', 'input'],
});

export const tuicss: Preset = {
  theme: {
    extend: {
      tokens: {
        colors: {
          tui: {
            none: { value: 'transparent !important' },
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
          body: { value: 'DOS, sans-serif' },
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
          redWhite: {
            value: { type: 'url', value: '/images/bg-red-white.png' },
          },
          redBlack: {
            value: { type: 'url', value: '/images/bg-red-black.png' },
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
        fontSizes: {
          sm: { value: '1.25rem' },
          md: { value: '1.35rem' },
          lg: { value: '1.5rem' },
          xl: { value: '2rem' },
        },
        shadows: {
          none: { value: 'none !important' },
          Shadow1: { value: '.625rem .625rem black !important' },
          Shadow2: { value: '.9375rem .9375rem black' },
          Shadow3: { value: '1.25rem 1.25rem black' },
          Shadow4: { value: '1.5625rem 1.5625rem black' },
          Shadow5: { value: '1.875rem 1.875rem black' },
          Shadow1left: { value: '-0.625rem .625rem black !important' },
          Shadowleft2: { value: '-0.9375rem .9375rem black !important' },
          Shadowleft3: { value: '-1.25rem 1.25rem black !important' },
          Shadowleft4: { value: '-1.5625rem 1.5625rem black !important' },
          Shadowleft5: { value: '-1.875rem 1.875rem black !important' },
        },
        borderWidths: {
          none: { value: '0 !important' },
          sm: { value: '.0625rem !important' },
          md: { value: '.125rem !important' },
          lg: { value: '.25rem !important' },
          xl: { value: '.5rem !important' },
        },
      },
      recipes: {
        button,
        windows,
        divider,
        navbar,
        screen,
        shadow,
        textArea,
        shortcut,
      },
      slotRecipes: {
        dropdown,
        fieldset,
        input,
        modal,
        panel,
        progressbar,
        radio,
        table,
        tabs,
        checkbox,
      },
    },
  },
};
