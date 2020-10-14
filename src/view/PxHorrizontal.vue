<template>
  <div class="p-4 flow-root">
    <div 
    v-for="(o , i) in  _array"  :key="o.name"
    class=" inline-block border-solid border-2 p-2 shadow m-1 rounded-lg">
        <div class="flex-col">
            <img class="p-5 h-24" :src="`https://pokeres.bastionbot.org/images/pokemon/${i+(start+1)}.png`"/>
            <h1 class="text-center text-gray-500"> {{o.name}}</h1> 
        </div> 
    </div>
    <button @click="preview" class=" border-solid bg-green-200 block border-2">preview</button>
    <button @click="next" class=" border-solid bg-green-200 bg-opacity-25 block border-2">next</button>
  </div>  
 
</template>

<script>
import api from '@/api'
export default {
    name: 'PxHorizontal',
    data(){
        return{
            pokemons:[],
            start:0,
            end:4
        }
    },
    created(){
        api.getPokemons().then(res=> this.pokemons = res)
    },
    computed:{
        _array(){
            var array = this.pokemons.slice(this.start, this.end)  
            return array; 
        }
    },
    methods:{
        next(){
            this.start += 1;
            this.end += 1
        },
         preview(){
            this.start -= 1;
            this.end -= 1
        }
    }

}
</script>

<style>

</style>