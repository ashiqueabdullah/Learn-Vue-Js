
new Vue({
    el:'#app1',
    data:{
        name:"Ashique"
    },
    methods:{
        updateName(){
            this.name="Ashique Abdullah"
        },
        kill(){
            this.$destroy()
        }
    },
    beforeCreate(){
        console.log("Before Create");
    },
    created(){
        console.log("Created");
    },
    beforeMount(){
        console.log("Before mount")
    },
    mounted(){
        console.log("Mounted")
    },
    beforeUpdate(){
        console.log('Before Update')
    },
    updated(){
        console.log("Updated")
    },
    beforeDestroy(){
        console.log('Before Destroy')
    },
    destroyed(){
        console.log('Destroyed')
    }
});