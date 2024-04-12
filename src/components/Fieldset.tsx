import { Component, JSX, splitProps } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types';
import type { VariantProps } from 'class-variance-authority';
const fieldset = cva('tui-fieldset', {
  variants: {
    fieldset:{
        true:"tui-fieldset",
    }
    border: {
      none: undefined,
      double: 'tui-border-double',
      solid: 'tui-border-solid',
      dotted: 'tui-border-dotted',
      dashed: 'tui-border-dashed',
    },
    size:{
        full:["full-width","full-height"]
    }
  },
  defaultVariants: {
    fieldset:true,
    border: none,
    size:full
  },
});
export type Fieldset = VariantProps<typeof fieldset> &
  JSX.HTMLAttributes<HTMLAttributes>;

const Fieldset: Component<Fieldset> = (props: Fieldset) => {
  const [local, others] = splitProps(props, ['border',"legend","size"]);
  return <>
    <div class={fieldset({fieldset:true, border: local.border,size:local.size })}>
        <Show
        when={local.legend}
        fallback={props.children}
        >
        <legend>{local.legend}</legend>
            {props.children}
        </Show>
    </div>
  </>
};

export default Fieldset;
