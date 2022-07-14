import { onCleanup } from 'solid-js';

export const clickOut = (el, acc) => {
  const onClick = e => !el.contains(e.target) && acc()?.();

  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
};
