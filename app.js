Vue.createApp({
    data() {
      return {
        preloader:true,
        conversation_bar_width: 200,
        messages: [
          {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": "testing user message."
        },
        ],
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