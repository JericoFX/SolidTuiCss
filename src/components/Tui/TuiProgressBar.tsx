import { Component, JSX, splitProps } from 'solid-js';
import { sva, cva, type RecipeVariantProps } from '../../../styled-system/css';
import { progressbar } from '../../../styled-system/recipes';

export type ProgressBar = RecipeVariantProps<typeof progressbar> &
  RecipeVariantProps<typeof progressbar> & {
    width: number;
  };

const TuiProgressBar: Component<ProgressBar> = (props) => {
  const [local, others] = splitProps(props, [
    'backgroundColor',
    'foregroundColor',
    'width',
    'intermediate',
  ]);
  const r = progressbar({
    backgroundColor: local.backgroundColor,
    foregroundColor: local.foregroundColor,
    intermediate: local.intermediate,
  });
  console.log(props);
  return (
    <div class={r.bases}>
      <span class={r.label}>{local.width}%</span>
      <span class={r.progress} style={{ width: `${local.width}%` }}></span>
    </div>
  );
};

export default TuiProgressBar;
