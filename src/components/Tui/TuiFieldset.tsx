import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, createMemo, splitProps } from 'solid-js';
import { styled } from '../../../styled-system/jsx';
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
        marginTop: 6,
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
  },
  defaultVariants: {
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
