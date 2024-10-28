import { createContext, createSignal, useContext } from 'solid-js';

export const Tab = createContext();

export function TabsProvider(props) {
  const [tab, setTab] = createSignal('');
  return <Tab.Provider  value={{ tab, setTab }}>{props.children}</Tab.Provider>;
}

export function useTabContext() {
  return useContext(Tab);
}