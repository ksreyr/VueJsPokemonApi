<template>
<main>
  <px-header
  :links="links"/>


  <router-view  
  class="container flex"/>
  
</main>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: 'App',
  components: {
    PxHeader
  },
  data(){
    return{
     
      links:[
        {
          title: 'Bulbasaur',
          to:{name:'Pokemon', params:{pokemon:'bulbasaur', id:0}}
        },
        {
          title: 'Charmander',
          to:{name:'Pokemon', params:{pokemon:'charmander', id:3}}
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
