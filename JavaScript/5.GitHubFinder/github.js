class GitHub{
    constructor(){
        this.client_id = '0a337229e7f905c4b360'
        this.client_secret = 'b27a0b3955d5f5e6e173ef6c8bb1dfd463074998'
        this.repo_count = 5
        this.repo_sort = 'created_at:desc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profileData = await profileResponse.json()
        const reposData = await repoResponse.json()


        return {"userProfile":profileData,"userRepos":reposData}

    }

}