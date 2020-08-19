const app1 =new Vue({
    el:'#app1',
    data:{
        user:{
            name:'Ashique Abdullah',
            age:24,
            occupation:'Software Engineer'
        }
    },
    methods:{
        update(){
            app2.user.name="Sidra Ashraf" 
        }
    }
});


const app2=new Vue({
    el:'#app2',
    data:{
        user:{
            name:'Ashique Abdullah',
            age:24,
            occupation:'Software Engineer'
        }
    }
});