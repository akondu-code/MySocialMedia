//Declaring variables
const submitInput = document.getElementById("submitInput");
 
submitInput?.addEventListener("click", e => {
     const userName = document.getElementById("input-userName").value;
    const displayName = document.getElementById("input-displayName").value;
    localStorage.setItem("username", userName)
    localStorage.setItem("displayname", displayName)
    location.replace("home.html")
})

const getUser = localStorage.getItem("username")
const getDisplay = localStorage.getItem("displayname")
console.log(getUser)

document.getElementById("greeting").innerHTML=`Hey ${getDisplay} !`
document.getElementById("display-name").innerHTML= getDisplay
document.getElementById("User-name").innerHTML= `@ ${getUser}`
