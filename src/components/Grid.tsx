import { Component } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

export const Row: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
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
    offset: {
      sm: {
        1: 'offset-s1',
        2: 'offset-s2',
        3: 'offset-s3',
        4: 'offset-s4',
        5: 'offset-s5',
        6: 'offset-s6',
        7: 'offset-s7',
        8: 'offset-s8',
        9: 'offset-s9',
        10: 'offset-s10',
        11: 'offset-s11',
        12: 'offset-s12',
      },
      md: {
        1: 'offset-m1',
        2: 'offset-m2',
        3: 'offset-m3',
        4: 'offset-m4',
        5: 'offset-m5',
        6: 'offset-m6',
        7: 'offset-m7',
        8: 'offset-m8',
        9: 'offset-m9',
        10: 'offset-m10',
        11: 'offset-m11',
        12: 'offset-m12',
      },
      lg: {
        1: 'offset-l1',
        2: 'offset-l2',
        3: 'offset-l3',
        4: 'offset-l4',
        5: 'offset-l5',
        6: 'offset-l6',
        7: 'offset-l7',
        8: 'offset-l8',
        9: 'offset-l9',
        10: 'offset-l10',
        11: 'offset-l11',
        12: 'offset-l12',
      },
    },
  },
  defaultVariants: {
    size: 'xl',
    offset: { sm: 0 },
  },
});
export type Columns = VariantProps<typeof col> &
  JSX.HTMLAttributes<HTMLAttributes>;

export const Col: Component<Columns> = (props: Columns) => {
  const [local, others] = splitProps(props, ['size', 'offset']);
  return (
    <div class={col({ size: local.size, offset: local.offset })}>
      {props.children}
    </div>
  );
};
