<template>
  <header class="shadow">
   <nav class="bg-gray-400 p-6 flex">
      <div>
       <router-link :to="{name:'Home'}" class="hover:underline text-lg text-gray-700">
       Pokemon Home</router-link>
      </div>
      <div 
      v-for="l in links" :key="l.to.params.id"
      class="bg-gray-400 text-gray-700 text-sm pt-1 pl-3 flex" >
      <router-link :to="{name:l.to.name, params:l.to.params}">
          {{l.title}}</router-link>
      </div>
      <router-link class="bg-gray-400 text-gray-700 text-sm pt-1 pl-3 flex" 
       :to="{name:'List'}">List</router-link>
       <button class="bg-gray-400 text-gray-700 text-sm pt-1 pl-3 flex"  
       @click="goTo">HorizontalView</button>
   </nav>
  </header>
</template>

<script>
export default {
  name:'PxHeader',
  props:{
    links:{
      type: Array,
      default: () => [],

    }
  },
  methods:{
    goTo(){
      this.$router.push({name:'Horizontal'})
    }
  },
}
</script>

<style>

</style>