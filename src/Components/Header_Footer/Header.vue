<template>
    <div>
        Header Working<br>
        <p>Fast Name:{{fastname}}</p>
        <p>Last Name:{{lasatName}}</p>
        <p>Age:{{age}}</p>
        <button @click="update" >Chnage Name</button>
    </div>
</template>

<script >
    export default{
        props:{
            fastname: String,
            lasatName: String,
            age: Number 
        },
        methods:{
            update(){
                this.$emit('updatefname','Sidra')
            }
        }
    }
</script>

<style >
   
</style>