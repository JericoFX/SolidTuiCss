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

const Table: Component<Table> = (props: Table) => {
  const [local, others] = splitProps(props, ['hover', 'striped']);
  return (
    <>
      <table class={table({ hover: local.hover, striped: local.striped })}>
        {props.children}
      </table>
    </>
  );
};

const Tfoot: Component<{}> = (props) => {
  return <tfoot>{props.children} </tfoot>;
};

const Tbody: Component<{}> = (props) => {
  return <tbody>{props.children}</tbody>;
};

const Thread: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <thead>{props.children}</thead>;
};
const Tr: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <tr>{props.children}</tr>;
};
const Th: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <th>{props.children}</th>;
};

export {
    Table.Root: Table,
    Table.TFoot: Tfoot,
    Table.TBody: Tbody,
    Table.Thread: Thread,
    Table.Tr: Tr,
    Table.Th: Th
}
