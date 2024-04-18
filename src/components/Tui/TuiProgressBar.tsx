import { Component, JSX, splitProps } from 'solid-js';
import { sva, cva, type RecipeVariantProps } from '../../../styled-system/css';
const progressBase = cva({
  base: {
    display: 'block',
    position: 'relative',
    height: '20px',
    width: '200px',
    backgroundColor: 'rgb(0, 168, 168)',
    overflow: 'hidden',
  },
  variants: {
    backgroundColor: {
      GreenWhite: {
        backgroundImage: 'url("./images/bg-green-white.png")',
        backgroundRepeat: 'repeat',
      },
      GreenBlack: {
        backgroundImage: 'url("./images/bg-green-black.png")',
        backgroundRepeat: 'repeat',
      },
      CyanWhite: {
        backgroundImage: 'url("./images/bg-cyan-white.png")',
        backgroundRepeat: 'repeat',
      },
      CyanBlack: {
        backgroundImage: 'url("./images/bg-cyan-black.png")',
        backgroundRepeat: 'repeat',
      },
      RedWhite: {
        backgroundImage: 'url("./images/bg-red-white.png")',
        backgroundRepeat: 'repeat',
      },
      RedBlack: {
        backgroundImage: 'url("./images/bg-red-black.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleWhite: {
        backgroundImage: 'url("./images/bg-purple-white.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleBlack: {
        backgroundImage: 'url("./images/bg-purple-black.png")',
        backgroundRepeat: 'repeat',
      },
      YellowWhite: {
        backgroundImage: 'url("./images/bg-yellow-black.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeWhite: {
        backgroundImage: 'url("./images/bg-orange-white.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeBlack: {
        backgroundImage: 'url("./images/bg-orange-black.png")',
        backgroundRepeat: 'repeat',
      },
    },
  },
});
const label = cva({
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    zIndex: 1,
  },
});
const progress = cva({
  base: {
    position: 'absolute',
    left: '0px',
    backgroundColor: 'rgb(0, 255, 255)',
    height: '100%',
    display: 'inline-block',
  },
  variants: {
    foregroundColor: {
      GreenWhite: {
        backgroundImage: 'url("./images/bg-green-white.png")',
        backgroundRepeat: 'repeat',
      },
      GreenBlack: {
        backgroundImage: 'url("./images/bg-green-black.png")',
        backgroundRepeat: 'repeat',
      },
      CyanWhite: {
        backgroundImage: 'url("./images/bg-cyan-white.png")',
        backgroundRepeat: 'repeat',
      },
      CyanBlack: {
        backgroundImage: 'url("./images/bg-cyan-black.png")',
        backgroundRepeat: 'repeat',
      },
      RedWhite: {
        backgroundImage: 'url("./images/bg-red-white.png")',
        backgroundRepeat: 'repeat',
      },
      RedBlack: {
        backgroundImage: 'url("./images/bg-red-black.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleWhite: {
        backgroundImage: 'url("./images/bg-purple-white.png")',
        backgroundRepeat: 'repeat',
      },
      PurpleBlack: {
        backgroundImage: 'url("./images/bg-purple-black.png")',
        backgroundRepeat: 'repeat',
      },
      YellowWhite: {
        backgroundImage: 'url("./images/bg-yellow-black.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeWhite: {
        backgroundImage: 'url("./images/bg-orange-white.png")',
        backgroundRepeat: 'repeat',
      },
      OrangeBlack: {
        backgroundImage: 'url("./images/bg-orange-black.png")',
        backgroundRepeat: 'repeat',
      },
    },
    intermediate: {
      true: {
        position: 'absolute',
        left: 0,
        backgroundColor: 'rgb(0, 255, 255)',
        height: 20,
        width: 20,
        display: 'inline-block',
        animation: 'indeterminate 1s backwards',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
      },
    },
  },
});

export type ProgressBar = RecipeVariantProps<typeof progressBase> &
  RecipeVariantProps<typeof progress> &
  RecipeVariantProps<typeof label> & {
    width: number;
  };

const TuiProgressBar: Component<ProgressBar> = (props) => {
  const [local, others] = splitProps(props, [
    'backgroundColor',
    'foregroundColor',
    'width',
    'intermediate',
  ]);

  return (
    <div class={progressBase({ backgroundColor: local.backgroundColor })}>
      <span class={label()}>{local.width}%</span>
      <span
        class={progress({
          foregroundColor: local.foregroundColor,
          intermediate: local.intermediate,
        })}
        style={{ width: `${local.width}%` }}
      ></span>
    </div>
  );
};

export default TuiProgressBar;
