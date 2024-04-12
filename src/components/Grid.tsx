import { Component } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

const Row: Component<{}> = (props) => {
  return <div class='row'>{props.children}</div>;
};

const col = cva('col', {
  variants: {
    size: {
      xl: 'l12',
      lg: 'l6',
      md: 'l3',
      sm: 'l1',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});
export type Columns = VariantProps<typeof col> &
  JSX.HTMLAttributes<HTMLAttributes>;
const Col: Component<Columns> = (props: Columns) => {
  const [local, others] = splitProps(props, ['size']);
  return <div class={col({ size: local.size })}>{props.children}</div>;
};
