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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
