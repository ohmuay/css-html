// Init Weather
const weather = new Weather('Bangkok');
// Init UI
const ui = new UI();

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click',(e)=>
{
    const location = document.getElementById('city').value
    weather.changeLocation(location)
    //Get Weather Again
    getWeather()
    $('#locModal').modal('hide')
})

// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather)

function getWeather(){
    weather.getWeather()
    .then(results=>{
        ui.paint(results);
        })
    .catch(err=>{console.log(err)})
}