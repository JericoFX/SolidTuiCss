import { Component, JSX, splitProps, Show } from 'solid-js';
import { cva } from 'class-variance-authority';
import { DarkBackground, LightBackground, Background } from '../types';
import type { VariantProps } from 'class-variance-authority';
type HoverColor = {
  Blue;
};
const table = cva('tui-table', {
  variants: {
    hover: {
      color: {
        none: undefined,
        blue: 'hovered-blue',
        green: 'hovered-green',
        cyan: 'hovered-cyan',
        red: 'hovered-red',
        purple: 'hovered-purple',
        yellow: 'hovered-yellow',
        white: 'hovered-white',
        orange: 'hovered-orange',
      },
    },
    striped: {
      color: {
        blue: 'striped-blue',
        green: 'striped-green',
        cyan: 'striped-cyan',
        red: 'striped-red',
        purple: 'striped-purple',
        yellow: 'striped-yellow',
        white: 'striped-white',
        orange: 'striped-orange',
      },
    },
  },
  defaultVariants: {
    striped:'{striped.color.none}'
    hover: '{hover.color.blue}',
  },
});

export type Table = VariantProps<typeof table> &
  JSX.HTMLAttributes<HTMLAttributes>;

export const Table: Component<Table> = (props: Table) => {
  const [local, others] = splitProps(props, ['hover', 'striped']);
  return (
    <>
      <table class={table({ hover: local.hover, striped: local.striped })}>
        {props.children}
      </table>
    </>
  );
};

export const Tfoot: Component<{}> = (props) => {
  return <tfoot>{props.children} </tfoot>;
};

export const Tbody: Component<{}> = (props) => {
  return <tbody>{props.children}</tbody>;
};

export const Thread: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <thead>{props.children}</thead>;
};
export const Tr: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <tr>{props.children}</tr>;
};
export const Th: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
     const [local, others] = splitProps(props, ['onClick']);
  return <th onClick={local.onClick}>{props.children}</th>;
};

