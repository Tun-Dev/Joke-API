function getJoke(){
    fetch(' https://sv443.net/jokeapi/v2/joke/Any?type=single')
    .then(res => res.json())
    .then(data =>{
        let joke = data['joke'];
        let setup = data['setup'];
        let delivery = data['delivery'];

         output = `
                <p>${joke}</p>
            `;
        document.getElementById('displayJoke').innerHTML = output;
    })
};


setInterval(getJoke, 20000)