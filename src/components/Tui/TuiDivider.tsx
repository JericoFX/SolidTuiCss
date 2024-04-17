import { cva } from '../../../styled-system/css/cva';
import { RecipeVariantProps } from '../../../styled-system/types';
import { Component, JSX, splitProps, Show } from 'solid-js';

const tdivider = cva({
  base: {
    borderBottom: '2px solid rgb(255, 255, 255)',
    display: 'block',
  },
  variants: {
    black: {
      true: {
        borderBottom: '2px solid rgb(0, 0, 0)',
        display: 'block',
      },
    },
  },
});

export type DividerRecipe = RecipeVariantProps<typeof tdivider> &
  JSX.IntrinsicElements['div'] &
  JSX.IntrinsicElements['hr'] & {
    hasSpace?: boolean;
    black?: boolean;
  };

const TuiDivider: Component<DividerRecipe> = (props) => {
  const [local, other] = splitProps(props, ['hasSpace', 'black']);
  return (
    <Show
      when={local.hasSpace}
      fallback={<div class={tdivider({ black: local.black })}></div>}
    >
      <hr class={tdivider({ black: local.black })}></hr>
    </Show>
  );
};

export default TuiDivider;
