const submitInput = document.getElementById("submitInput")
const tweetBtn = document.getElementById("send-tweet")
 
submitInput?.addEventListener("click", () => {
     const userName = document.getElementById("input-userName").value;
    const displayName = document.getElementById("input-displayName").value;
    localStorage.setItem("username", userName)
    localStorage.setItem("displayname", displayName)
    location.replace("home.html")
})

tweetBtn?.addEventListener("click", () => {
    const tweetInput = document.getElementById("input-tweet").value
    localStorage.setItem("tweetValue", tweetInput)
    location.replace("home.html")
})

const getUser = localStorage.getItem("username")
const getDisplay = localStorage.getItem("displayname")
const tweetValue = localStorage.getItem("tweetValue")

const greetingDiv = document.getElementById("greeting")
const displayDiv = document.getElementById("display-name")
const userDiv = document.getElementById("User-name")
const tweetContainer = document.getElementById("tweet-container")

if(tweetContainer) {
    tweetContainer.innerHTML += `<div class="card col-12 mb-3">
    <div class="card-body d-flex flex-column">
    <div class="d-flex flex-row">
    <div><img src="img/user-img.jpg" alt="" width="40" height="40" class="rounded-circle"></div>
    <div class="fw-bold ps-2" id="display-name">
        ${getDisplay}
    </div>
    <div class="ps-2" id="User-name">@${getUser}</div>
    </div>
    
    <div class="ms-5 fw-lighter" id="posted-tweet">
        ${tweetValue}
    </div>
    </div>
        </div>`
}

if(greetingDiv) {
    greetingDiv.innerHTML = `Hey ${getDisplay} !`
}
if(displayDiv) {
    displayDiv.innerHTML = getDisplay
}
if(userDiv) {
    userDiv.innerHTML = `@ ${getUser}`
}