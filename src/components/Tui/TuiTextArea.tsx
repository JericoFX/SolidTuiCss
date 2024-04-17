import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, splitProps } from 'solid-js';
const ttextarea = cva({
  base: {
    backgroundColor: 'inherit',
    border: 'none',
    padding: '0px',
    color: 'rgb(255, 255, 0)',
    outline: 'none',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: 'rgb(168, 168, 168)',
        color: 'black',
      },
    },
  },
});

type Shadow = RecipeVariantProps<typeof ttextarea> & {
  children?: JSX.Element;
} & JSX.IntrinsicElements['textarea'];

const TuiTextArea: Component<{}> = (props) => {
  const [local, _] = splitProps(props, [
    'rows',
    'cols',
    'value',
    'placeholder',
    'disabled',
    'onChange',
  ]);
  return (
    <textarea
      onChange={local.onChange}
      rows={local.rows}
      cols={local.cols}
      placeholder={local.placeholder ?? ''}
      value={value}
      class={ttextarea({ disabled: local.disabled })}
    >
      {props.children}
    </textarea>
  );
};

export default TuiTextArea;
