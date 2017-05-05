import Vue, { ComponentOptions } from 'vue';
export interface RxComponentOptions extends ComponentOptions<Vue> {
    subscriptions: () => any;
}
export declare const fromEvent: (selector: any, eventName: any, fn: any) => (target: Vue, key: string) => void;
