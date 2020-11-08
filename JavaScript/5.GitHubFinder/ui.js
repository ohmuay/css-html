class UI{
    constructor(){
        this.profile = document.getElementById('profile')
    }
    
    showProfile(user){
        
        this.profile.innerHTML = 
        `
        <div class="container card card-body" mb-3>
            <div class="row">
                <div class="col-md-3">
                
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-1">View Profile</a>
                </div>
                <div class="col-md-9">

                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-dark">Followers: ${user.followers}</span>
                    <span class="badge badge-danger">Following: ${user.following}</span>
                    <br>
                    <ul class="list-group mt-3">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog/Site: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>

            </div>
        </div>
        `

    }

    clearProfile(){
        this.profile.innerHTML = ''
    }

    showAlert(message,className){
        this.clearAlert();

        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        
        //Get parent Element
        const container = document.querySelector(".searchContainer")
        //Get element before
        const search = document.querySelector(".search")
        //Insert elem
        container.insertBefore(div,search)
        //Timeout after 3 sec
        setTimeout(()=>{
            this.clearAlert()
        },3000)
        
    }

    clearAlert(){
        
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove()
        }
        else{
            console.log("no current Alert to remove");
        }

    }

    showRepos(repos){
        let output = ''
        repos.forEach(function(repo){
        output +=    
        `
        <div class='container card card-body mt-2'>
            <div class='row'>
                <div class='col-md-6'>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class='col-md-6'>
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `

        })
        document.getElementById('repoheading').innerHTML=`<div class='container lead my-3'><h2>Lastest repos</h2></div>`
        document.getElementById('repo').innerHTML=output

    }

    clearRepo(){
        document.getElementById('repo').innerHTML = ''
        document.getElementById('repoheading').innerHTML =''
    }

}

