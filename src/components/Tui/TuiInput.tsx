import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { Component, JSX, Show, splitProps } from 'solid-js';
const timput = cva({
  base: {
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
    outline: 0,
    border: 'none',
    borderRadius: 0,
    _focus: {
      backgroundColor: 'rgb(255, 255, 0) !important',
      color: 'black !important',
    },
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

const tlabel = cva({
  base: {
    color: 'white',
    w: '100px',
    display: 'inline-block',
    marginRight: '10px',
  },
  variants: {
    disabled: {
      true: {
        color: 'black',
      },
    },
    size: {
      sm: {
        w: '70px',
        marginRight: '5px',
      },
    },
    color: {
      variant: {
        red: 'red',
        green: 'green',
        blue: 'blue',
        yellow: 'yellow',
        purple: 'purple',
        cyan: 'cyan',
        white: 'white',
        orange: 'orange',
        black: 'black',
        gray: 'gray',
        pink: 'pink',
        brown: 'brown',
        gold: 'gold',
      },
    },
  },
});
export type InputVariants = RecipeVariantProps<typeof timput> & {
  hasLabel?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
} & JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['label'] &
  RecipeVariantProps<typeof tlabel>;
//export const TuiInput = styled('input', timput);

const TuiInput: Component<InputVariants> = (props) => {
  var numero1 = Math.floor(Math.random() * 100).toString(16);
  const [local, others] = splitProps(props, [
    'hasLabel',
    'disabled',
    'onClick',
    'text',
    'size',
    'color',
    'type',
  ]);
  return (
    <Show
      when={local.hasLabel}
      fallback={<input class={timput({ disabled: local.disabled })}></input>}
    >
      <div>
        <label
          class={tlabel({
            disabled: local.disabled,
            size: local.size,
            color: local.color,
          })}
          for={numero1}
        >
          {local.text}
        </label>
        <input
          type={local.type || 'text'}
          min={0}
          id={numero1}
          class={timput({ disabled: local.disabled })}
        ></input>
      </div>
    </Show>
  );
};

export default TuiInput;
