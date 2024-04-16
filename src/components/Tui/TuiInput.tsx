import {
  css,
  cva,
  sva,
  type RecipeVariantProps,
} from '../../../styled-system/css';
import { Switch, Match, Component, For } from 'solid-js';
const checkbos = sva({
  className: 'tui-checkbox',
  slots: ['label', 'input', 'span'],
  base: {
    label: {
      display: 'block',
      position: 'relative',
      cursor: 'pointer',
      color: 'white',
      paddingLeft: '30px',
      userSelect: 'none',
      _disabled: {
        color: 'rgb(168, 168, 168)',
      },
    },
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      top: '0px',
      left: '0px',
      pointerEvents: 'none',
      '&:checked ~ span::after': {
        content: '"[√]"',
        color: 'rgb(0, 255, 255)',
      },
      '&:not(checked) ~ span::after': { content: '"[]"' },
    },
    span: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      cursor: 'pointer',
      top: '0px',
      left: '0px',
    },
  },
  defaultVariants: {
    backgroundColor: 'green-168',
    textColor: 'black-168',
  },
});
const tinput = cva({
  base: {
    backgroundColor: 'rgb(0, 0, 0)',
    color: 'white',
    outline: '0',
    border: 'none',
    borderRadius: '0px',
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

const tradio = cva({
  base: {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    color: 'white',
    paddingLeft: '30px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    '& input': {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      top: '0px',
      left: '0px',
      pointerEvents: 'none',
    },
    '& span': {
      position: 'absolute',
      width: '10px',
      height: '10px',
      cursor: 'pointer',
      top: '0px',
      left: '0px',
    },
    '& input:checked ~ span:after': {
      content: '"(•)"',
      color: 'rgb(0, 255, 255) !important',
    },
    '& input:not(checked) ~ span:after': { content: '"()"' },
  },
  variants: {
    disabled: {
      true: {
        color: 'rgb(168, 168, 168)',
      },
    },
  },
});

export const TuiInput = style('input', tinput);

const TuiInput: Component<{}> = (props) => {
  const [selected, setSelected] = createSignal('');
  const [checked, setChecked] = createSignal(false);
  const [local, other] = splitProps(props, [
    'disabled',
    'type',
    'onChanged',
    'placeholder',
    'selectValues',
    'label',
  ]);
  const onChangeded = (e) => {
    setSelected(e.target.value);
    local.onChanged(e.target.value);
  };
  const onCheked = (e) => {
    local.onChanged(e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
  };
  return (
    <Switch
      fallback={
        <input
          disabled={local.disabled}
          onChange={local.onChanged}
          class={tinput({ disabled: local.disabled })}
          placeholder={local.placeholder ? local.placeholder : ''}
          type='text'
        />
      }
    >
      <Match when={local.type === 'number'}>
        <input
          disabled={local.disabled}
          onChange={local.onChanged}
          class={tinput({ disabled: local.disabled })}
          placeholder={local.placeholder ? local.placeholder : ''}
          min={0}
          type='number'
        />
      </Match>
      <Match when={local.type === 'color'}>
        <input
          disabled={local.disabled}
          onChange={local.onChanged}
          class={tinput({ disabled: local.disabled })}
          placeholder={local.placeholder ? local.placeholder : ''}
          type='color'
        />
      </Match>
      <Match when={local.type === 'select'}>
        <select
          value={selected()}
          disabled={local.disabled}
          onChange={onChangeded}
          class={tinput({ disabled: local.disabled })}
          placeholder={local.placeholder ? local.placeholder : ''}
        >
          <For each={local.selectValues}>
            {(value, index) => {
              <option key={index} value={value}>
                {value}
              </option>;
            }}
          </For>
        </select>
      </Match>
      <Match when={local.type === 'date'}>
        <input
          disabled={local.disabled}
          onChange={local.onChanged}
          class={tinput({ disabled: local.disabled })}
          placeholder={local.placeholder ? local.placeholder : ''}
          type='date'
        />
      </Match>
      <Match when={local.type === 'checkbox'}>
        <label class={checkbox.label}>
          {local.label}
          <input
            onChange={onCheked}
            checked={checked()}
            class={checkbox.input}
            type='checkbox'
          />
          <span class={checkbox.span}></span>
        </label>
      </Match>
      <Match when={local.type === 'radio'}>
        <label checked={checked()} class={tradio({ disabled: local.disabled })}>
          {local.label}
          <input onChange={onCheked} type='radio' name='group' />
          <span></span>
        </label>
      </Match>
    </Switch>
  );
};

export default TuiInput;
