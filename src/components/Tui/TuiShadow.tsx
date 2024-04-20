import { Component, JSX, Show, splitProps } from 'solid-js';
import { shadow, type ShadowVariant } from '../../../styled-system/recipes';
// const shadow = cva({
//   base: {
//     boxShadow: 'none !important',
//   },
//   variants: {
//     shadow: {
//       none: {
//         true: {
//           boxShadow: 'none !important',
//         },
//       },
//       Shadow1: { boxShadow: '10px 10px black !important' },
//       Shadow2: { boxShadow: '15px 15px black' },
//       Shadow3: { boxShadow: '20px 20px black' },
//       Shadow4: { boxShadow: '25px 25px black' },
//       Shadow5: { boxShadow: '30px 30px black' },
//       Shadow1left: { boxShadow: '-10px 10px black !important' },
//       Shadowleft2: { boxShadow: '-15px 15px black !important' },
//       Shadowleft3: { boxShadow: '-20px 20px black !important' },
//       Shadowleft4: { boxShadow: '-25px 25px black !important' },
//       Shadowleft5: { boxShadow: '-30px 30px black !important' },
//     },
//   },
//   defaultVariants: {
//     shadow: 'none',
//   },
// });

// type Shadow = RecipeVariantProps<typeof shadow> & {
//   children?: JSX.Element;
// };

type Shadow = ShadowVariant & {
  children?: JSX.Element;
} & JSX.IntrinsicElements['div'];

const TuiShadow: Component<Shadow> = (props) => {
  const [local, _] = splitProps(props, ['shadow']);
  return <div class={shadow({ shadow: local.shadow })}>{props.children}</div>;
};

export default TuiShadow;
