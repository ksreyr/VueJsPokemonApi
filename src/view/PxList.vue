<template>

    <div>
        <carousel v-if="isReady"  autoplay=true>
            <slide  v-for="(p,i) in pokemons" :key="i">
                <div class="flex-col border-solid border-3 bg-orange-200 p-6 items-center">
                    <div class="text-gray-600 shadow text-4xl"> Name: {{p.name}}</div>
                    <img height="100" width="200" class="p-5 "  :src="`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`"/>
                </div>        
            </slide>
        </carousel>     
    </div>
 
</template>

<script>
import {Carousel,Slide} from 'vue-carousel';

import api from '@/api'
export default {
    name: 'PxList',
    components:{
        Carousel,
        Slide
    },
    data(){
        return{
           isReady:false,
           pokemons:[],
        }
    },
    created(){
        this.isReady=false,
        api.getPokemons().then(res => this.pokemons =res).finally(()=> this.isReady=true)
    }
}
</script>

<style>

</style>