new Vue({
    el: "#app",
    data:{
        title:"First Vue test",
        date:"08.18.20",
        arr:[1,2,3,4],
        obj:{
            tr:true
        },
        img:{
            src:"img/img.jpg",
            alt:"image",
            width:200,
            height:200
        }
    },
    methods: {
        funs(){
            return this.title
        }
    }
});