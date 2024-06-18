Vue.createApp({
    data() {
      return {
        preloader:true,
        conversation_bar_width: 200,
        conversations: [],
        currentConversation: 0,
        message_input: "",
        messages: [

        ],
      };
    },
    methods: {
      submitMessage: async function ()  {
        let message = this.message_input;
        this.messages.push({
          role: 'user',
          content: message
        });
        this.message_input = "";
        let conversation = this.conversations[this.currentConversation];
        let data = await this.getResponse(message, conversation);
        this.messages.push(data);
        console.log(data);
      },

      getResponse: async function (message, conversation) {
        args = {
          method: 'POST',
          body: JSON.stringify({
            message: message,
            conversation: conversation,
        })
        }
        let response = await fetch("https://ai-project-code-school-a451e8b65bef.herokuapp.com/", args);
        let data = await response.json();
        return data;
      },

      newConversation: async function () {
        this.conversations.push("");
        this.currentConversation = (this.conversations[this.conversations.length-1]);
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