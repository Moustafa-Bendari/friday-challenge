Vue.createApp({
    data() {
      return {
        preloader:true,
      };
    },
    methods: {
        
    },
    mounted(){
        setTimeout(() => {
            this.preloader = false;
        },2000);
    }
    ,
    created: function() {
        console.log("app created")
    }
  }).mount("#app");