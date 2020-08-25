<template>
    <div>
        Header Working<br>
        <ul>
            <li v-for ="a in students" :key="a">
                {{a}}
            </li>
        </ul>
        <br>
    </div>
</template>

<script >
    export default{
        props:{
            students:{
                type:Array,
                requered:true
            }
        }
    }
</script>

<style >
   
</style>