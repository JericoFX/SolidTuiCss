import { radio, type RadioVariant } from '../../../styled-system/recipes';
// import { RecipeVariantProps, cva } from '../../../styled-system/css';
// // import './TuiRadio.css';
// const radio = cva({
//   base: {
//     display: 'block',
//     position: 'relative',
//     cursor: 'pointer',
//     color: 'white',
//     paddingLeft: '35px',
//     userSelect: 'none',
//   },
//   variants: {
//     disabled: {
//       true: {
//         color: 'rgb(168, 168, 168)',
//       },
//     },
//   },
// });
// const input = cva({
//   base: {
//     position: 'absolute',
//     opacity: 0,
//     cursor: 'pointer',
//     top: 0,
//     left: 0,
//     pointerEvents: 'none',
//     '&:checked ~ span::after': {
//       content: '"(•)"',
//       color: 'rgb(0, 255, 255) !important',
//     },
//     '&:not(checked) ~ span:after': {
//       padding: 'right 3px',
//       content: '"( )"',
//     },
//   },
// });
// const span = cva({
//   base: {
//     position: 'absolute',
//     width: 10,
//     height: 10,
//     cursor: 'pointer',
//     top: 0,
//     left: 0,
//   },
// });

import { Component, JSX } from 'solid-js';
type RadioButton = RadioVariant &
  JSX.IntrinsicElements['label'] &
  JSX.IntrinsicElements['input'] & {
    label: string;
    disabled?: boolean;
  };
const TuiRadio: Component<RadioButton> = (props: RadioButton) => {
  const r = radio({ disabled: props.disabled });
  return (
    <label class={r.radio}>
      {props.label}
      <input {...props} class={r.input} type='radio' name='group' />
      <span class={r.span}></span>
    </label>
  );
};

export default TuiRadio;
