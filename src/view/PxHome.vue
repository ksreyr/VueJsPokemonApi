<template>
  <div class="flex-col items-center">
      <bar-loader 
      class="custom-class mt-5" 
      :color="'#bada55'" 
      :loading="loading" 
      :size="450" 
      :sizeUnit="px">
      </bar-loader>
      <div v-if="!loading"  class="flex-col items-center text-gray-800 object-contain h-48 w-ful">
          <h1 class="text-gray-600 text-3xl uppercase pt-3">Pokemon List</h1>
          <px-table  :pokemons="pokemons" class="p-6 m-2 border-solid shadow border-2 border-gray-300"/>
      </div>
  </div>
</template>

<script>
import PxTable from '@/components/PxTable'
import api from '@/api'
export default {
    name:'PxHome',
    components: { PxTable },

    data(){
      return{
        loading:false, 
        color:"",
        pokemons:[]
      }
    },
    created(){
      this.loading=true,
      api.getPokemons().then(res =>(this.pokemons = res)).finally(() => this.loading=false)
    }
}
</script>

<style>

</style>