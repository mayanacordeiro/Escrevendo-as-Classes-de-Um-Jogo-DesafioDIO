class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(type) {
        
    let attackType = ""
        
    if (type == "mago") {
        attackType = "magia"
    } else if (type == "guerreiro") {
        attackType = "espada"
    } else if (type == "monge") {
        attackType = "artes marciais"
    } else {
        attackType = "shuriken"
    }
       console.log(`O ${type} atacou usando ${attackType}`)
    }


}

let Hero1 = new Hero("Mystic", "20", "mago") 
Hero1.attack(Hero1.type)

let Hero2 = new Hero("Fin", "28", "guerreiro")
Hero2.attack(Hero2.type)
