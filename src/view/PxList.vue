<template>
<div class="" v-if="isReady" >
<px-carrousel></px-carrousel>
</div>
</template>

<script>

import PxCarrousel from '@/components/PxCarrousel'

import api from '@/api'
export default {
    name: 'PxList',
    components:{
        PxCarrousel
    },
    data(){
        return{
           isReady:false,
           pokemons:[],
           limit: 4,
           paginate: 0,
           start: 0,
           end: 4
        }
    },
    created(){
        this.isReady=false,
        api.getPokemons().then(res => this.pokemons =res).finally(()=> this.isReady=true)
    },
     computed:{
        partPokemons(){
             var partList = this.pokemons.array.slice(this.start, this.end)
             return partList
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>