import { Component } from 'solid-js';
import { css, cva, type RecipeVariantProps } from '../../../styled-system/css';
const progress = sva({
  className: 'tui-progress',
  slots: ['progress', 'label', 'intermediate'],
  base: {
    progress: {
      display: 'block',
      position: 'relative',
      height: '20px',
      width: '200px',
      backgroundColor: 'rgb(0, 168, 168)',
      overflow: 'hidden',
    },
    label: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      zIndex: 1,
    },
    intermediate: {
      position: 'absolute',
      left: '0px',
      backgroundColor: 'rgb(0, 255, 255)',
      height: '20px',
      width: '20px',
      display: 'inline-block',
      animation: 'indeterminate 1s backwards',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
    },
    variants: {
        background: {
          
      }
  }
});

const TuiProgressBar: Component<{}> = (props) => {
  return (
    <div class='tui-progress-bar'>
      <span class='tui-progress-label'>50%</span>
      <span class='tui-progress' style='width: 50%'></span>
    </div>
  );
};

export default TuiProgressBar;
