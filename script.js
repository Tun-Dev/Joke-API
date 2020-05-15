function getJoke(){
    fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single')
    .then(res => res.json())
    .then(data =>{
        let joke = data['joke'];

         output = `
                <p>${joke}</p>
            `;
        document.getElementById('displayJoke').innerHTML = output;
        var e = document.getElementById('btn1');
        e.style.display = 'none';
    })
};
setInterval(getJoke, 20000)