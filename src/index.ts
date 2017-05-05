import Vue, { ComponentOptions } from 'vue'
import { createDecorator } from 'vue-class-component'

export interface RxComponentOptions extends ComponentOptions<Vue> {
  subscriptions: () => Vue
}

export const fromEvent = (selector, eventName, fn) => createDecorator((options: RxComponentOptions, key) => {
  const { subscriptions = () => { } } = options

  options.subscriptions = function (this: any) {
    return {
      [key]: fn(this.$fromDOMEvent(selector, eventName)),
      ...subscriptions.bind(this)()
    }
  }
})