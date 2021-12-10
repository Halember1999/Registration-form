// const input =document.querySelector("form");
// let url="http://localhost:6661"
// input.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log("form submitted");
//     console.log(event.target.email.value);
//     fetch(url+"/login",{method:"POST",headers:{'Content-type':"application/json"},body:JSON.stringify({email:"xyz@gmail.com",password:"xyzjhj"})})
//     .then(response=>response.json())
//     .then(json=>console.log(json))
//     .catch(error=>console.log("error while fetching"))
// })