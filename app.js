Vue.createApp({
    data() {
      return {
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
    created: function() {
        console.log("app created")
    }
  }).mount("#app");