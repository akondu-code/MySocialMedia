// const submitInput = document.getElementById("submitInput")
// const tweetBtn = document.getElementById("send-tweet")
 
// submitInput?.addEventListener("click", () => {
//      const userName = document.getElementById("input-userName").value;
//     const displayName = document.getElementById("input-displayName").value;
//     localStorage.setItem("username", userName)
//     localStorage.setItem("displayname", displayName)
//     location.replace("home.html")
// })

// tweetBtn?.addEventListener("click", () => {
//     const tweetInput = document.getElementById("input-tweet").value
//     localStorage.setItem("tweetValue", tweetInput)
//     location.replace("home.html")
// })

// const getUser = localStorage.getItem("username")
// const getDisplay = localStorage.getItem("displayname")
// const tweetValue = localStorage.getItem("tweetValue")
// const greetingDiv = document.getElementById("greeting")
// const displayDiv = document.getElementById("display-name")
// const userDiv = document.getElementById("User-name")
// const tweetContainer = document.getElementById("tweet-container")

// if(tweetContainer) {
//     tweetContainer.innerHTML += `<div class="card col-12 mb-3">
//     <div class="card-body d-flex flex-column">
//     <div class="d-flex flex-row">
//     <div><img src="img/user-img.jpg" alt="" width="40" height="40" class="rounded-circle"></div>
//     <div class="fw-bold ps-2" id="display-name">
//         ${getDisplay}
//     </div>
//     <div class="ps-2" id="User-name">@${getUser}</div>
//     </div>
    
//     <div class="ms-5 fw-lighter" id="posted-tweet">
//         ${tweetValue}
//     </div>
//     </div>
//         </div>`
// }

// if(greetingDiv) {
//     greetingDiv.innerHTML = `Hey ${getDisplay} !`
// }
// if(displayDiv) {
//     displayDiv.innerHTML = getDisplay
// }
// if(userDiv) {
//     userDiv.innerHTML = `@ ${getUser}`
// }


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAyYUatZQ6Eba5cl7jmdX5LV3YSD0k_hYE",
//     authDomain: "trittter-25b28.firebaseapp.com",
//     projectId: "trittter-25b28",
//     storageBucket: "trittter-25b28.appspot.com",
//     messagingSenderId: "368945535851",
//     appId: "1:368945535851:web:361f5e89d4217bc7e70a2e",
//     measurementId: "G-TCN7CXPSMH"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  const nextPage = document.getElementById("next-btn")

 nextPage?.addEventListener("click", () => {
    const firstName = document.getElementById("F-name").value
    const surName = document.getElementById("S-name").value
   const email = document.getElementById("emailAdd").value
    const password = document.getElementById("Cfm-p-word").value
    const selectBirthMonth = document.getElementById('month')
    const birthMonth = selectBirthMonth.options[select.selectedIndex].text
 const selectBirthDay = document.getElementById("Day")
 const birthDay = selectBirthDay.options[select.selectedIndex].text

     if (document.getElementById("P-word").value === document.getElementById("Cfm-p-word").value) {
    location.replace("signup2.html")
     }
 else { 
     alert ("Passwords do not match!")
 }
})

const signUp = document.getElementById("signup-btn")
signUp?.addEventListener("click", () => {
    
})

