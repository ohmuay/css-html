document.getElementById('button').addEventListener('click',getJokes)

function getJokes(e){

    const number = document.querySelector('input[type="number"]').value
    console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true)

    xhr.onload = function(){

        if(this.status === 200){

            let output = ''
            const jokes = JSON.parse(this.responseText)
            if(jokes.type === 'success'){
                jokes.value.forEach(function(joke){

                    output+= `<li>ID : ${joke.id}</li><li>Joke : ${joke.joke}</li>`

                })

            }else{
                output+= `<li>Oops something went wrong!</li>`
            }
            document.querySelector('.md-6').innerHTML = output
        }


    }


    xhr.send();

    e.preventDefault();
}