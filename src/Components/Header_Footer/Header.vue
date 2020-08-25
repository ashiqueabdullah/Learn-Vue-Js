<template>
    <div>
        <slot name="fast"></slot>
        
        <h1 v-for="a in names" :key="a">
            {{a}}
        </h1>
        <slot name="snd"></slot>
        <slot name='ld'>Loading...</slot>
    </div>
</template>

<script>
export default {
  data(){
      return {
          names:['Ashique','Abdullah','Sidra','Ashraf']
      }
  }
}
</script>

<style >

</style>