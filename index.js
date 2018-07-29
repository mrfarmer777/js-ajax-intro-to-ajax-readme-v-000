function getRepositories(){
  //req is a new XMLHttpRequest object
  const req = new XMLHttpRequest();
  
  //Construct the request
  req.open("GET", 'https://api.github.com/users/octocat/repos');
  
  
  //Send the request
  req.send();
}


function getRepositories(){
  const req= new XMLHttpRequest()
  req.addEventListener("load",showRespositories);
  req.open
}