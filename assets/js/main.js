console.log("Hello Crackheads");

class Player {
    static coinPurse = 0;
    static coinsPerAttack = 1;
    static clickCount =0;
    

    static cracking(){
        document.getElementById("CanClicker").addEventListener("click",this.attack);
    }

    
    static attack(){
        Player.coinPurse += Player.coinsPerAttack;
        Player.clickCount ++;
        if(Player.clickCount < 25){
            const clickSound = document.getElementById("clickSound");

            clickSound.play();
            clickSound.volume = 0.2;
        } else{
            const clickSound = document.getElementById("clickSound2");

            clickSound.play();
            Player.clickCount = 0;
        }


        document.getElementById("displayMoney").textContent = Player.coinPurse;
        console.log(`You get ${Player.coinsPerAttack} coins every attack `);
        console.log(`You have ${Player.coinPurse} coin(s) `);
        console.log(`You have ${Player.clickCount} Click(s)`);
    }



}
Player.cracking();
