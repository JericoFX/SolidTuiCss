
import { TabsProvider, useTabContext } from "./TuiTabsContext"
import { tabs } from "../../../styled-system/recipes"
import { Component, JSX, createUniqueId } from "solid-js";

export const TabsRoot: Component<{ children: JSX.Element }> = (props) => {
    const r = tabs({colors:props.colors})
    return (
        <TabsProvider>
            {' '}
            <div class={r.Root}>
                <ul>
                    {props.children}
                </ul>

            </div>
        </TabsProvider>
    );
};

export const TabsTab: Component<{ children: JSX.Element }> = (props) => {
    const r = tabs()
    const { tab, setTab } = useTabContext()
    return (
        <li ><a onClick={() => setTab(props.id)} class={`${r.tab} ${tab() === props.id ? "active" : ''}`} id={props.id}>{props.children}</a></li>
    )
}

export const TabsContent: Component<{ children: JSX.Element }> = (props) => {
    const r = tabs()
    const { tab, setTab } = useTabContext()
    return (
        <div id={props.id} class={`${props.id !== tab() ? r.content : "active"}`}>
            {props.children}
        </div>
    )
}


// <div class="tui-tabs">
//     <ul>
//         <li><a class="tui-tab active" data-tab-content="tab-1-content">Tab 1</a></li>
//         <li><a class="tui-tab" data-tab-content="tab-2-content">Tab 2</a></li>
//         <li><a class="tui-tab disabled" data-tab-content="tab-3-content">Disabled</a></li>
//     </ul>
// </div>
// <div id="tab-1-content" class="tui-tab-content">
//     ...
// </div>
// <div id="tab-2-content" class="tui-tab-content">
//     ...
// </div>
// <div id="tab-3-content" class="tui-tab-content">
//     ...
// </div>