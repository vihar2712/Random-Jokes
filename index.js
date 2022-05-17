const jokeEl = document.getElementById('joke');

const jokeBtn = document.querySelector('.btn');

jokeBtn.addEventListener('click',generateJokes);
generateJokes();

// using async/await
async function generateJokes(){
    const config = {
        headers:{
            Accept: 'application/json',
        },
    };
    const response = await fetch('https://icanhazdadjoke.com',config);

    const data = await response.json();
    jokeEl.innerHTML = data.joke;

}

// using fetch api
// function generateJokes(){
//     const config = {
//         headers:{
//             Accept: 'application/json',
//         },
//     };
//     fetch('https://icanhazdadjoke.com',config)
//     .then((response) => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke;
//     })
// }