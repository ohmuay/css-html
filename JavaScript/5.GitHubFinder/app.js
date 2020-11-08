// Init GitHub
const github = new GitHub();

const ui = new UI();

// Search input
const searchUser = document.getElementById('search-user')

// Search input event listener
searchUser.addEventListener('keyup',(e)=>{
    // Get input text
    const userText = e.target.value
    if(userText !== ''){
    // Make HTTP Call
    github.getUser(userText)
    .then(data=>{
        if(data.userProfile.message === 'Not Found'){
            //Show alert
            ui.showAlert("User not found","alert alert-danger")
            ui.clearProfile()
        }else{
            //Show profile
            ui.clearAlert()
            ui.showProfile(data.userProfile)
            if(data.userRepos.length){
            ui.showRepos(data.userRepos)
            }else{
                ui.clearRepo()
            }
        }

    })

    }else{
       //Clear profile
        ui.clearProfile()
        ui.clearAlert()
        ui.clearRepo()
    }

})
