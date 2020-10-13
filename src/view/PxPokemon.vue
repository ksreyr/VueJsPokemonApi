<template>
<div class="flex items-baseline ">
   <div class="flex-1 flex  shadow-lg rounded-lg  border-solid border-2 border-blue-300">
       <div class="flex-col w-1/2 flex items-center">
            <img class="p-5 h-56" :src="`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`"/>
            <span class="text-3xl text-gray-500 ">{{pokemon.name}}</span>
       </div>
       <div class="flex-col w-full  items-center ">
           <h4 class="flex-1  border-solid border-b-4 p-4 text-center text-3xl text-gray-600"> 
               Details
            </h4>
            <div class="p-4">
                <h4 class="flex-1 text-gray-600 text-2xl">
                    Habilities:
                </h4>
                <ul>
                    <li  v-for="(o,i) in pokemon.abilities" :key="i">
                        <h4 class="text-gray-500">{{o.ability.name}}</h4> 
                    </li>          
                </ul>
            </div>
            <div class="p-4">
                <h4 class="flex-1 text-gray-600 text-xl">
                    Types:
                </h4>
                <ul>
                    <li  v-for="(o,i) in pokemon.types" :key="i">
                        <h4 class="text-gray-500">{{o.type.name}}</h4> 
                    </li>          
                </ul>
            </div>
       </div>
    </div>
</div>

</template>

<script>
import api from '@/api'

export default {

    name:'PxPokemon',
    
    data(){
        return{
            pokemon: [],
            index: 0
        }
    },

    created(){
        this.getPokemon()
    },
    
    methods:{
        getPokemon(){
            const pokemon = this.$route.params.pokemon
            this.index = this.$route.params.id
            api.getPokemon(pokemon)
            .then(pokemon => this.pokemon=pokemon)
           
        },
        
    },
    watch:{
        $route() {
             this.getPokemon()
        }
    }
}

</script>

<style>

</style>