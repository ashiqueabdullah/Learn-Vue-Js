new Vue({
    el:"#app",
    data:{
       formData:{
        firstName:'',
        lastName:''
       }
    },
    methods:{
        clickss(){
            console.log(this.formData)
        }
    }
    
    
});