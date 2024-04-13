import { Component, JSX, splitProps, Show } from 'solid-js';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';

const table = cva('tui-table', {
  variants: {
    hover: {
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
    striped: {
      none: undefined,
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
  defaultVariants: {
    striped: 'blue',
    hover: 'blue',
  },
});

export type Table = VariantProps<typeof table> &
  JSX.HTMLAttributes<HTMLTableElement>;

export const Root: Component<Table> = (props: Table) => {
  const [local, others] = splitProps(props, ['hover', 'striped']);
  console.log(table({ hover: local.hover, striped: local.striped }));
  return (
    <>
      <table class={table({ hover: local.hover, striped: local.striped })}>
        {props.children}
      </table>
    </>
  );
};

export const Tfoot: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  return <tfoot>{props.children} </tfoot>;
};

export const Tbody: Component<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
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
export const Th: Component<{
  children: JSX.Element;
  onClick?: () => void;
}> = (props: { children: JSX.Element; onClick?: () => void }) => {
  const [local, others] = splitProps(props, ['onClick']);
  return <th onClick={local.onClick}>{props.children}</th>;
};
