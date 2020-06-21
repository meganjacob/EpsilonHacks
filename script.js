function takeResponse(){
  var text = document.getElementById('password').value;
  outputResponse("YOU: " + text);
  searchResponse("CHATBOT: " + text);
}
function outputResponse(text) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
function outputLink(text) {
  var node = document.createElement("a");
  var textnode = document.createTextNode(text);
  node.href = text;
  node.title = text;
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
function searchResponse(text){
  var process = text.toLowerCase();
  if(process == ""){
    outputResponse("CHATBOT: " + "Please type something into the question box.");
  }else if(process.indexOf("you") >= 0 && (process.indexOf("who") >= 0 || process.indexOf("what") >= 0)){
    outputResponse("CHATBOT: " + "I am a chatbot built by the creaters of the Cyberhub. I was created in order to help people learn about cyber security so that they can use it in their own lives.");
  }else if(process.indexOf("resource") >= 0){
    outputResponse("CHATBOT: " + "To access more resourcs please reference the resources tab of this page.");
  } else if(process.indexOf("what") >= 0 && process.indexOf("cyber")>= 0){
    outputResponse("CHATBOT: " + "Cyber Security is a vast field that is only growing in importance. There are so many areas of it to explore. Curious about what specific area is right for you? Checkout this link:");
    outputLink("https://www.csoonline.com/article/3482001/what-is-cybersecurity-definition-frameworks-jobs-and-salaries.html"); 
  }else if(process.indexOf("history") >= 0 && process.indexOf("cyber")>= 0){
    outputResponse("CHATBOT: " + "Cyber Security has a very long and fascinating history which began with a man named Bob Thomas who noticed the trail that computer programs create as they travel accross a network. He began to investigate and inspired others to also get involved. From there cyber security has been evolving continuously into the complex field we see today. Checkout @cybersecurity_magazine or the following link for more information."); 
    outputLink("https://www.energysociety.org/the-history-of-cyber-security.html");
  }else if(process.indexOf("school") >= 0){
    outputResponse("CHATBOT: " + "Hmm so you want to integrate cybersecurity learning more into your school? If you want to learn how to start an official class, type \"Class\". Start a club? Type \"Club\"");
  }else if(process.indexOf("club") >= 0){
    outputResponse("CHATBOT: " + "If it is difficult to start a class at your school, a club is a great alternative! While your club can be structured anyway you like, there are some initiatives and competitions that already exist for you to use as a guideline. We suggest researching these organizations: GirlsGo Cyber Start, Pico CTF, and Cyberpatriot. Good luck!");
  }else if(process.indexOf("hello") >= 0 || process.indexOf("hey")>= 0 || process.indexOf("hi")>= 0){
    outputResponse("CHATBOT: " + "Hello, welcome to the Cyberhub!");
  }else if(process.indexOf("thank") >= 0 || process.indexOf("thx")>= 0){
    outputResponse("CHATBOT: " + "No problem, happy to help!");
  }else outputResponse("CHATBOT: " + "I could not understand your question. Make sure you don't have any typos and are asking relevant questions. Please ask a different question. Some example questions are \"what is cybersecurity?\", \"what is the purpose of this website?\"");
}
