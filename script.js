const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();



async function generateJoke(){

    const config = {
        header: {
            Accept : "application/json"
        },
    }

    const res = await fetch("https://api.chucknorris.io/jokes/random", config);

    const data =  await res.json();

    jokeEl.innerHTML = (data.value);
  
}





// function generateJoke(){

//     const config = {
//         header: {
//             Accept : "application/json"
//         },
//     }

//     fetch("https://api.chucknorris.io/jokes/random", config)
//     .then((res) => res.json())
//     .then((data) =>{jokeEl.innerHTML = data.value}) ;
// }
