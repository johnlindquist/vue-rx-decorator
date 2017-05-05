import Vue, { ComponentOptions } from 'vue'
import { createDecorator } from 'vue-class-component'

export interface RxComponentOptions extends ComponentOptions<Vue> {
  subscriptions: () => any
}

export const fromEvent = (selector, eventName, fn) => createDecorator((options: any, key) => {
  const { subscriptions = () => { } } = options

  console.log({ selector, eventName })

  options.subscriptions = function () {
    return {
      [key]: fn(this.$fromDOMEvent(selector, eventName)),
      ...subscriptions.bind(this)()
    }
  }
})