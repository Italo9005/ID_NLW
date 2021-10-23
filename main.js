const LinksSocialMedia = {
  github: "Italo9005",
  youtube: "/channel/UCbGY7I4CKFVMUEKZVtRw9uA",
  facebook: "italo.lopes.9822",
  instagram: "osara_il",
  twitter: "osarail"
}  

function changeSocialMediaLinks(){
 for(let li of socialLinks.children){
   const social =li.getAttribute('class')
   li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
 }
 
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url)
  .then(response =>  response.json())
  .then(data=> {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login

  })


}
getGitHubProfileInfos()

