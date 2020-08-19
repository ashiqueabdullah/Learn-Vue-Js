new Vue({
    el:"#app",
    data:{
       a:0,
       b:0,
       salary:10
    },
    computed:{
        as(){
            console.log("A +");
            return this.a + this.salary;
        },
        bs(){
            console.log("B +");
            return this.b + this.salary;
        }

    }
    
    
});