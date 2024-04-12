import { Component } from 'solid-js';

const Modal = (props) => {
  const [local, other] = splitProps(props, ['open', 'legendText']);

  return (
    <>
      <Show when={local.open}>
        <div class='tui-overlap'></div>
        <div
          class='tui-modal centered'
          style={{ display: 'block' }}
          role='alertdialog'
        >
          <div class='tui-window red-168'>
            <fieldset class='tui-fieldset'>
              <legend class='yellow-255-text'>{local.legendText}</legend>

              <button
                class='tui-button tui-modal-close-button right'
                data-modal='modal'
              >
                close
              </button>
            </fieldset>
          </div>
        </div>
      </Show>
    </>
  );
};

export default Modal;
