import { Component, JSX } from 'solid-js';
import { table, type TableVariantProps } from '../../../styled-system/recipes';

type TableProps = TableVariantProps & {
  children: JSX.Element;
} & JSX.IntrinsicElements['table'] &
  JSX.IntrinsicElements['tbody'] &
  JSX.IntrinsicElements['thead'] &
  JSX.IntrinsicElements['tfoot'];

const TuiRoot: Component<TableProps> = (props: TableProps) => {
  const r = table({
    borderBottom: props.borderBottom,
    borderRight: props.borderRight,
    backgroundColor: props.backgroundColor,
  });
  return (
    <table class={r.table} {...props}>
      {props.children}
    </table>
  );
};

const TuiBody: Component<TableProps> = (props: TableProps) => {
  const r = table({ hover: props.hover, stripped: props.stripped });
  return (
    <tbody class={r.body} {...props}>
      {props.children}
    </tbody>
  );
};

const TuiThead: Component<TableProps> = (props: TableProps) => {
  const r = table();
  return (
    <thead class={r.thead} {...props}>
      {props.children}
    </thead>
  );
};

const TuiFoot: Component<TableProps> = (props: TableProps) => {
  const r = table();
  return (
    <tfoot class={r.foot} {...props}>
      {props.children}
    </tfoot>
  );
};

export { TuiRoot, TuiBody, TuiThead, TuiFoot };
