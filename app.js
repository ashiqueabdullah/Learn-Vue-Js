new Vue({
    el:"#app",
    data:{
       name:'Ashique Abdullah'
    },
    methods:{
        update(){
            setTimeout(()=>{
                this.name="Sidra Ashraf"
            },2000)
        }
    }
    
});