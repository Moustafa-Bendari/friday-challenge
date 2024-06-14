Vue.createApp({
    data() {
      return {
        preloader:true,
        conversation_bar_width: 200,
        conversations: ["test","test 2","test","test 2","test","test 2","test","test 2"],
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
        },1000);
    }
    ,
    created: function() {
        console.log("app created")
    }
  }).mount("#app");