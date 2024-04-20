import { input, type InputVariant } from '../../../styled-system/recipes';
import { Component, JSX, Show, splitProps } from 'solid-js';
import TuiShadow from './TuiShadow';
// const timput = cva({
//   base: {
//     backgroundColor: 'rgb(0, 0, 0)',
//     color: 'white',
//     outline: 0,
//     border: 'none',
//     borderRadius: 0,
//     _focus: {
//       backgroundColor: 'rgb(255, 255, 0) !important',
//       color: 'black !important',
//     },
//   },
//   variants: {
//     disabled: {
//       true: {
//         backgroundColor: 'rgb(168, 168, 168)',
//         color: 'black',
//       },
//     },
//   },
// });

// const tlabel = cva({
//   base: {
//     color: 'white',
//     w: '100px',
//     display: 'inline-block',
//     marginRight: '10px',
//   },
//   variants: {
//     disabled: {
//       true: {
//         color: 'black',
//       },
//     },
//     size: {
//       sm: {
//         w: '70px',
//         marginRight: '5px',
//       },
//     },
//     color: {
//       variant: {
//         red: 'red',
//         green: 'green',
//         blue: 'blue',
//         yellow: 'yellow',
//         purple: 'purple',
//         cyan: 'cyan',
//         white: 'white',
//         orange: 'orange',
//         black: 'black',
//         gray: 'gray',
//         pink: 'pink',
//         brown: 'brown',
//         gold: 'gold',
//       },
//     },
//   },
// });
// export type InputVariants = RecipeVariantProps<typeof timput> & {
//   hasLabel?: boolean;
//   text?: string;
//   disabled?: boolean;
//   onClick?: () => void;
// } & JSX.IntrinsicElements['input'] &
//   JSX.IntrinsicElements['label'] &
//   RecipeVariantProps<typeof tlabel>;
// //export const TuiInput = styled('input', timput);

type TuiInputProps = JSX.IntrinsicElements['input'] & {
  size?: InputVariant['size'];
  disabled?: InputVariant['disabled'];
  textColor?: InputVariant['textColor'];
  label?: string;
};

const TuiInput: Component<TuiInputProps> = (props: TuiInputProps) => {
  const recipe = input({
    size: props.size,
    disabled: props.disabled,
    textColor: props.textColor,
  });

  return (
    <>
      <label class={recipe.label}>{props.label}</label>
      <input {...props} class={recipe.input}></input>
    </>
  );
};

export default TuiInput;
