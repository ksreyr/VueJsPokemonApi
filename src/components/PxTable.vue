<template>

  <table class="text-center table-auto shadow ">
      <thead class="p-10 border-solid bg-blue-200">
          <tr class="p-10 itmes-center text-center">
              <th class="pr-3 pl-3 ">Index</th>
              <th class="pr-3 pl-3 ">Name</th>
              <th class="pr-5 pl-5 ">Image</th>
              <th class="pr-3 pl-3 ">
                  <input class="pl-3"
                  id="filter"
                  placeholder="Search..."
                  type="text"
                  v-model="filter"/>
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="border-solid border-2" v-for="(p, i) in filterPokemons" v-bind:key="p.name">
              <td>{{i+1}}</td>
              <td><button class="hover:underline hover:text-blue-400" @click="goToPokemonPage(i,p.name)">{{p.name}}</button></td>
              <td class="content-center ">
                  <img class="p-5 h-24" :src="`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`"/>
              </td>
              <router-link 
              class=" flex hover:underline hover:bg-green-100  rounded-full p-6 mt-4 text-blue-500" 
              :to="{name:'Pokemon', params:{pokemon: p.name, id: i}}">
                 <span class="flex-1">
                     click to <br/> see Deails
                 </span> 
              </router-link>
                
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    name:'PxTable',
    data(){
        return{  
            url:"",
            filter: ""
        }   
    },

    props:{
        pokemons:{
            type: Array,
            default:() => []
        }
    },

    computed:{
        filterPokemons(){
            if(!this.filter){
                return this.pokemons
            }else{
                return this.pokemons.filter(
                    p => p.name.toLowerCase()
                    .includes(this.filter.toLowerCase())
                    )
            }
        }
    },
    methods:{
        goToPokemonPage(id, pokemon){
            this.$router
            .push({ name: 'Pokemon', params:{id:id, pokemon:pokemon}}
            )
        }
    }
}
</script>

<style>

</style>