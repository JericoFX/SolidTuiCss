import { Component } from 'solid-js';

const Divider: Component<{ spaced: boolean }> = (props: {
  spaced: boolean;
}) => {
  return (
    <Show when={local.spaced} fallback={<div class='tui-divider'></div>}>
      <hr class='tui-divider'></hr>
    </Show>
  );
};

export default Divider;
