Vue.createApp({
    data() {
      return {
        preloader:true,
        conversation_bar_width: 200,
        conversations: ["test","test 2","test","test 2","test","test 2","test","test 2"],
        message_input: "",
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
      submit_message: function () {
        console.log(this.message_input);
      },
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