function showRepositories(event,data){
  console.log(this.responseText);
  let repoList="<ul>";
  
  for (var i=0;i<this.responseText.length; i++){
    repoList+="<li>"+this.responseText[i]["name"]+"</li>";
  }
  repoList+="</ul>";
}

function getRepositories(){
  //req is a new XMLHttpRequest object
  const req = new XMLHttpRequest();
  
  //Listen for a response
  //listen for a load event, showRespositories is the callback
  req.addEventListener("load",showRepositories);
  
  //Construct the request
  req.open("GET", 'https://api.github.com/users/octocat/repos');
  
  
  //Send the request
  req.send();
}



