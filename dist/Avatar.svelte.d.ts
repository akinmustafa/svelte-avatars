import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        name?: string | undefined;
        initials?: string | undefined;
        bgColor?: string | undefined;
        textColor?: string | undefined;
        size?: string | undefined;
        borderRadius?: string | undefined;
        square?: boolean | undefined;
        randomBgColor?: boolean | undefined;
        boxShadow?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponentTyped<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
