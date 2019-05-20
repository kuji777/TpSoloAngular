export class Pokemon {
    
    constructor(
        public name: string,
        public speed: number,
        public hp: number = 5,
        public attackPower: number = 1
    ){}

    getName():string{
        return this.name;
    }
    
    getSpeed():number{
        return this.speed;
    }

    getHp():number{
        return this.hp;
    }

    getAttackPower():number{
        return this.attackPower;
    }

    isFasterThan(enemyPoke: Pokemon):boolean{
        return this.speed > enemyPoke.getSpeed();
    }
    
    getHurtBy(enemyPoke: Pokemon):number{
        this.hp -= enemyPoke.getAttackPower();
        return this.hp;
    }

    attack(enemyPoke: Pokemon):number{
        enemyPoke.hp -= this.attackPower;
        return enemyPoke.hp;
    }

    startsFightWith(enemyPoke: Pokemon):boolean{
        let attacker;
        let defendant;
        
        if(this.isFasterThan(enemyPoke)){
            attacker = this;
            defendant = enemyPoke;
        }else{
            attacker = enemyPoke;
            defendant = this;
        }

        while(defendant.getHp() <= 0){
            console.log(defendant.getName() +" attacks "+ attacker.getName());
            attacker.attack(defendant);
            console.log("status: "+defendant.getName() +" has "+defendant.getHp()+ "hp and "+ attacker.getName()+" has "+attacker.getHp()+"hp");
            let switchPos = attacker;
            attacker = defendant;
            defendant = switchPos;
        }

        return attacker;
    }
}