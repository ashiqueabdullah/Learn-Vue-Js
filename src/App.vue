<template>
  <div>
    <myHeader 
      :fastname="fname"
      :lasatName="lname"
      :age="mage"
      @updatefname='fname=$event'
    />
    <myFooter/>
  </div>
</template>

<script>
import myFooter from './Components/Header_Footer/Footer';
import myHeader from './Components/Header_Footer/Header'
export default {
   data(){
     return {
        fname: "Ashique",
        lname:"Abdullah",
        mage:24
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