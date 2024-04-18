import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, createMemo, splitProps } from 'solid-js';
const fieldset = cva({
  base: {
    border: '6px white double',
    padding: '12px',
    backgroundColor: 'inherit',
    marginBottom: '6px',
  },
  variants: {
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
        backgroundImage: 'url("./images/bg-green-white.png")',
        backgroundRepeat: 'repeat',
      },
      GreenBlack: {
        backgroundImage: 'url("./images/bg-green-black.png")',
        backgroundRepeat: 'repeat',
      },
      CyanWhite: {
        backgroundImage: 'url("./images/bg-cyan-white.png")',
        backgroundRepeat: 'repeat',
      },
      CyanBlack: {
        backgroundImage: 'url("./images/bg-cyan-black.png")',
        backgroundRepeat: 'repeat',
      },
      RedWhite: {
        backgroundImage: 'url("./images/bg-red-white.png")',
        backgroundRepeat: 'repeat',
      },
      RedBlack: {
        backgroundImage: 'url("./images/bg-red-black.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleWhite: {
        backgroundImage: 'url("./images/bg-purple-white.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleBlack: {
        backgroundImage: 'url("./images/bg-purple-black.png")',
        backgroundRepeat: 'repeat',
      },
      YellowWhite: {
        backgroundImage: 'url("./images/bg-yellow-black.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeWhite: {
        backgroundImage: 'url("./images/bg-orange-white.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeBlack: {
        backgroundImage: 'url("./images/bg-orange-black.png")',
        backgroundRepeat: 'repeat',
      },
    },
  },
  defaultVariants: {
    backgroundColor: 'RedBlack',
    noLegend: true,
  },
});

const legend = cva({
  base: {
    color: 'rgb(255, 255, 0)',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  variants: {
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
});

export type FiedlSetVariants = RecipeVariantProps<typeof fieldset> & {
  legend?: string;
  children?: JSX.Element;
  full?: boolean;
} & RecipeVariantProps<typeof legend>;
const TuiFieldset: Component<FiedlSetVariants> = (props: FiedlSetVariants) => {
  const [local, others] = splitProps(props, [
    'legend',
    'noLegend',
    'full',
    'textLeft',
    'textRight',
    'dotted',
  ]);
  const data = createMemo(() => {
    return local.full ? { w: '100%', h: '100%' } : {};
  });

  return (
    <fieldset
      class={
        fieldset({ noLegend: local.noLegend, dotted: local.dotted }) +
        ' ' +
        css(data())
      }
    >
      <Show when={!local.noLegend} fallback={props.children}>
        <legend
          class={legend({
            textLeft: local.textLeft,
            textRight: local.textRight,
          })}
        >
          {local.legend}
        </legend>
        {props.children}
      </Show>
    </fieldset>
  );
};

export default TuiFieldset;
