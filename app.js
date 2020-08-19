new Vue({
    el:"#app",
    data:{
        as:{
            name:"Ashique Abdullah",
            Age:24,
            Occupation:"Software Engineer"
        },
        si:{
            name:"Sidra Ashraf",
            Age:23,
            Occupation:"Software Engineer" 
        } 
    },
    methods:{
        husband(){
            return this.name,this.Age,this.Occupation
        },
        wife(){
            return this.name,this.Age,this.Occupation
        },
        condition(pr){
            return pr==="Husband" ? true : false;
        }
    }
});