<template>
  <h1>{{ msg }}</h1>

  <button @click="hello">Say hello: {{ count }}</button>
</template>

<script>
import { ref, toRefs } from 'vue'

import {Demo} from '../slice/Hello.js'

export default {
  props: {
    msg: String,
    prx: Object
  },

  setup (props) {
    const {msg, prx} = toRefs (props)
    const count = ref(0)

    async function hello() {
      try
      {
        const o = await Demo.HelloPrx.checkedCast (prx.value)
        o.sayHello (count.value)
      }

      catch (ex)
      {
        count.value = -1
        console.log ('Hello exception: ', ex.toString())
      }

      count.value++
    }

    return {count, msg, hello}
  }
}
</script>

<style scoped>
</style>
