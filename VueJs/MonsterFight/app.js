function randomBetween(min,max){
    return Math.floor(Math.random()*max-min)+min
}

Vue.createApp({
    data(){
        return {
            playerHealth:100,
            monsterHealth:100,
            winner:null,
            roundCount:0,
            battleLog:[]
        }
    },
    computed:{
        playerHealthStyle(){
            if(this.playerHealth <= 0)
            return {width:'0%'}
            else
            return {width:this.playerHealth+'%'}
        },
        monsterHealthStyle(){
            if(this.monsterHealth <= 0)
            return {width:'0%'}
            else
            return {width:this.monsterHealth+'%'}
        }
    },
    methods:{
        saveLog(name,type,value){
            this.battleLog.unshift({
                name:name,
                type:type,
                value,value
            })
        },
        restart(){
            this.playerHealth =100,
            this.monsterHealth =100,
            this.winner = null,
            this.roundCount = 0,
            this.battleLog = []
        },
        attackMonster(){
            const attackValue = randomBetween(5,15)
            this.monsterHealth-= attackValue
            this.attackPlayer()
            if(this.monsterHealth<=0 && this.playerHealth<=0)
            {
                this.winner = 'draw'
            }
            else if(this.monsterHealth <= 0){
                this.winner = 'player'
            }else if(this.playerHealth <= 0)
            {
                this.winner = 'monster'
            }
            this.saveLog('player','attack',attackValue)
            this.roundCount++
        },
        attackPlayer(){
            const attackValue = randomBetween(6,18)
            this.playerHealth-= attackValue
            this.saveLog('monster','attack',attackValue)
        },
        specialAttack(){
            const attackValue = randomBetween(6,25)
            this.monsterHealth-= attackValue
            this.attackPlayer()
            if(this.monsterHealth<=0 && this.playerHealth<=0)
            {
                this.winner = 'draw'
            }
            else if(this.monsterHealth <= 0){
                this.winner = 'player'
            }else if(this.playerHealth <= 0)
            {
                this.winner = 'monster'
            }
            this.saveLog('player','special-attack',attackValue)
            this.roundCount++
        },
        healPlayer(){
            const healValue = randomBetween(15,25)
            if(this.playerHealth + healValue >= 100){
                return playerHealth = 100
            }
            this.playerHealth += healValue
            this.saveLog('player','heal',healValue)
            this.attackPlayer()
            this.roundCount++
        },
        surrender(){
            this.winner = 'monster'
        }
    }
}).mount('#game')