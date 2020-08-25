<template>
  <div>
    <myHeader/>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from './Components/Header_Footer/Header';
import myFooter from './Components/Header_Footer/Footer';
export default {
   data(){
     return {

     }
   },
   components:{
     myHeader,
     myFooter
   }
}
</script>

<style >

</style>