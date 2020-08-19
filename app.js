new Vue({
    el:"#app",
    data:{
       a:0,
       b:0,
       salary:10
    },
    methods:{
        as(){
            return this.a + this.salary;
        },
        bs(){
            return this.b + this.salary;
        }

    }
    
    
});