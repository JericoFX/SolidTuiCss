import { Component } from 'solid-js';
import { sva } from '../../../styled-system/css';

const TuiCheckbox: Component<{}> = (props) => {
  const checkbox = checkbos(props);
  return (
    <label class={checkbox.label}>
      Default
      <input class={checkbox.input} type='checkbox' />
      <span class={checkbox.span}></span>
    </label>
  );
};

export default TuiCheckbox;
