import { Component, JSX, splitProps, Show } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types';
import type { VariantProps } from 'class-variance-authority';
const progress = cva('tui-progress-bar', {
  variants: {
    background: Background | LightBackground | DarkBackground | undefined,
    type: {
      none: undefined,
      intermediate: 'tui-indeterminate',
    },
  },
  defaultVariants: {
    background: undefined,
    type: none,
  },
});
export type Progress = VariantProps<typeof progress> &
  JSX.HTMLAttributes<HTMLAttributes>;

const Progress: Component<Progress> = (props: Progress) => {
  const [local, others] = splitProps(props, [
    'value',
    'background',
    'label',
    'type',
  ]);
  return (
    <>
      <div class={progress({ background: local.background })}>
        <Show
          when={local.label}
          fallback={
            <span
              class={progress({ type: local.type })}
              style={{ width: local.value }}
            ></span>
          }
        >
          <span class='tui-progress-label'>{local.label}</span>
          <span
            class={progress({ type: local.type })}
            style={{ width: local.value }}
          ></span>
        </Show>
      </div>
    </>
  );
};

export default Progress;
