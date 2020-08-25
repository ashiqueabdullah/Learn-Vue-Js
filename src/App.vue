<template>
  <div>
    <myHeader :students='studentsname'/>
    <myFooter/>
  </div>
</template>

<script>
import myFooter from './Components/Header_Footer/Footer';
import myHeader from './Components/Header_Footer/Header'
export default {
   data(){
     return {
        studentsname:['Ashique','Abdullah','Sidra']
     }
   },
   components:{
     myFooter,
     myHeader
   }
}
</script>

<style>
div{
  color:green;
}
  
</style>