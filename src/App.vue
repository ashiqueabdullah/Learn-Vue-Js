<template>
    <myheader>
      <h1 slot="fast">First</h1>
      <h1 slot="snd">Second</h1>
      <h1 :slot="load">Chnage hosie</h1>
    </myheader>
</template>

<script>
import myheader from './Components/Header_Footer/Header'
export default {
  data(){
    return{
      load:''
    }
  },
  components:{
    myheader
  },
  created(){
    setTimeout(()=>{
      this.load='ld'
    },2000)
  }
}
</script>

<style >

</style>