import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, createMemo, splitProps } from 'solid-js';
import { fieldset } from '../../../styled-system/recipes';

export type FiedlSetVariants = RecipeVariantProps<typeof fieldset> & {
  legend?: string;
  children?: JSX.Element;
  full?: boolean;
};
const TuiFieldset: Component<FiedlSetVariants> = (props: FiedlSetVariants) => {
  const r = fieldset({ ...props });
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
    <fieldset class={r.fieldset}>
      <Show when={!local.noLegend} fallback={props.children}>
        <legend class={r.legend}>{local.legend}</legend>
        {props.children}
      </Show>
    </fieldset>
  );
};

export default TuiFieldset;
