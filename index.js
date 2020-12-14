function getJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random", {
    mode: "cors"
  }).then((response)=>{
    console.log(response);
    if (!response.ok) {
      throw new error("fetch failed");
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    var greet = document.getElementById("greet");
    greet.innerHTML = data.setup
  })


}
