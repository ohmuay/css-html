document.getElementById('but1').addEventListener('click',getText)
document.getElementById('but2').addEventListener('click',getJson)
document.getElementById('but3').addEventListener('click',getExternal)

function getText(){

    fetch('text.txt').then(response => response.text()).then(promise=>document.getElementById('text').innerHTML=promise)

}

function getJson(){

    fetch('data.json')
    .then(response=> response.json())
    .then(data=>{
        let output = ''
        data.forEach(elem=> output += `<li>${elem.title}</li>`)
        document.getElementById('text').innerHTML = output
        })
        
}

function getExternal(){

    fetch('https://api.github.com/users')
    .then(response=>response.json())
    .then(data=>{
        let output =''
        data.forEach(elem=> output += `<li>${elem.login}</li>`)
        document.getElementById('text').innerHTML = output
    })

}