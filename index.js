function showRepositories(event,data){
  var repos=JSON.parse(this.responseText);
  console.log(repos);
  let repoList=`<ul>${repos.map(r=>'<li>'+r.name+'</li>').join('')}</ul>`
  
  document.getElementById("repositories").innerHTML=repoList;
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



