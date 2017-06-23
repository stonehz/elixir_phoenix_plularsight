import socket from './socket'


(function() {

  let channel = socket.channel("chat", {});

  let message = $('#message')
  message.focus();
  message.on('keypress', event => {
    if (event.keyCode == 13) {
      console.log("test!");
      channel.push("update_server", {
        payload: message.val()
      });
      message.val("");
    }
  });

  channel.on("update_chat", data => {
    console.log("Update", data.message);
    $('.chat-box').append("<h2>" + data.message + "</h2>");
  });

  channel.join()
    .receive("ok", resp => {
      console.log("Joined chat", resp)
    })
    .receive("error", resp => {
      console.log("Cannot Join", resp)
    });
})();
