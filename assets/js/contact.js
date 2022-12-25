function sendMsg() {

	var name= document.getElementById("name-1").value;
	var message= document.getElementById("message-1").value;

      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1056242633988653126/3byGj7XXB_LLt3N7LhbbTt9S4yd-wDKSI_R1fCVco1HM7DdWYszvQ6xGlz7MX4mol-KQ");
      request.setRequestHeader('Content-type', 'application/json');
	if (name == "") name = "Empty Contact"
		if (message == "") message = "Empty Message"

      const params = {
        username: "Inbox",
        avatar_url: "",
        content: "``" + name + "`` ```" + message + "```"
      }
	 
	  
      request.send(JSON.stringify(params));
 alert("Your message has been sent!")
}
