let limit = 100
let rand = Math.floor(Math.random() * limit)
document.querySelector("button").addEventListener("click",(e)=>{
  guess=parseInt(document.querySelector("input").value)
  if(rand == guess)
    document.querySelector("#response").innerHTML = "You win"
  else if (rand < guess)
    document.querySelector("#response").innerHTML = "Too big"
  else if(rand > guess)
    document.querySelector("#response").innerHTML = "Too small"

})
