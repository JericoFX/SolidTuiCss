import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';

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
        border: '6px white dotted',
      },
    },
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
import { Component, JSX, Show, createMemo, splitProps } from 'solid-js';
export type ButtonVariants = RecipeVariantProps<typeof fieldset> & {
  legend?: string;
  children?: JSX.Element;
  full?: boolean;
} & RecipeVariantProps<typeof legend>;
const TuiFieldset: Component<ButtonVariants> = (props: ButtonVariants) => {
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
      </Show>
    </fieldset>
  );
};

export default TuiFieldset;
