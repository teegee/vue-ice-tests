<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" :prx="proxy"/>
  <div>Communicator: {{!!communicator}}</div>
  <div>prx: {{proxy}}</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

//import {Ice} from 'ice'
import '/node_modules/ice/lib/Ice.js'

export default {
  components: {HelloWorld},
  setup() {
    const communicator = Ice.initialize()

    var proxy

    try
    {
      proxy = communicator.stringToProxy("hello:ws -h localhost -p 10002 -t 1000")
    }

    catch (ex)
    {
      console.log ('App exception: ', ex.toString())
    }

    console.log ('Communicator: ', communicator)
    console.log ('Proxy: ', proxy)

    return {communicator, proxy}
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
