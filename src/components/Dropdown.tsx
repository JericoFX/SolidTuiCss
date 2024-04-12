import { Component, JSX } from 'solid-js';

const DropdownButton: Component<{
  buttonlabel: string;
  children: JSX.Element;
}> = (props: { buttonlabel: string; children: JSX.Element }) => {
  const [local, other] = splitProps(props, ['buttonLabel']);
  return (
    <li class='tui-dropdown'>
      <button class='tui-button'>{local.buttonlabel}</button>
      <div class='tui-dropdown-content'>
        <ul>{props.children}</ul>
      </div>
    </li>
  );
};

const DropdownElement: Component<{ label: string; link?: string }> = (props: {
  label: string;
  link?: string;
}) => {
  const [local, others] = splitProps(props, ['label', 'link', 'onClick']);
  return (
    <li>
      <a onClick={local.onClick} href={local.link || undefined}>
        {local.label}
      </a>
    </li>
  );
};

export { DropDownButton, DowpdownElement };
