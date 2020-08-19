new Vue({
    el:"#app",
    data:{
        x:0,
        y:0,
        name:'Ashique Abdullah'
    },
    methods:{
        update(event){
            this.x=event.clientX,
            this.y=event.clientY
        },
        clk(){
            this.name="Sidra Ashraf"
        }
    }
    
    
});