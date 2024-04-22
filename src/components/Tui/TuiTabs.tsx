// import {
//   Component,
//   JSX,
//   createEffect,
//   createMemo,
//   createSignal,
// } from 'solid-js';
// import { tabs, type TabsVariant } from '../../../styled-system/recipes';
// const [id, setId] = createSignal(0);
//   const [activeTab, setActiveTab] = createSignal(0);
// type Tabs = TabsVariant & {
//   children?: JSX.Element;
//   disabled?: boolean;
//   active?: boolean;
// } & JSX.IntrinsicElements['div'] &
//   JSX.IntrinsicElements['a'];

// const Tabs: Component<Tabs> = (props) => {
//   const r = tabs({ ...props });
//   setId(id() + 1);
//   return (
//     <li>
//           <a class={`${}` } id={id()} class={r.tab} {...props}>
//         {props.children}
//       </a>
//     </li>
//   );
// };
// const Root: Component<Tabs> = (props) => {
//   const r = tabs({ ...props });
//   return (
//     <div class={r.Root}>
//       <ul>{props.children}</ul>
//     </div>
//   );
// };

// const Content: Component<Tabs> = (props) => {
//   const r = tabs({ ...props });
//   return <div  class={r.content}>{props.children}</div>;
// };

// export { Tabs, Root, Content };
