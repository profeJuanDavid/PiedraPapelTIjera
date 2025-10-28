//variables
//no pueden empezar con numero ni caracteres especiales $ # -
//notacion es el tipo de forma en la que escribo variables funciones etc
//camelCase, snake_case, PascalCase
//alert("vamos a jugar a piedra papel o tijera")
function elegir(){
    const op = ["💎","📄","✂️"]
    let random = Math.floor(Math.random() * (3 -1 + 1) + 1)
    switch (random) {
        case 1:
            alert("el pc escogio " + op[0])
            return op[0]
            break;
        case 2:
            alert(`El pc eligio ${op[1]}`)
            return op[1]
            break;
        case 3:
            alert(`El pc eligio ${op[2]}`)
            return op[2]
            break;
    } 
    
}
let jugador = prompt("¿Cuál escojes? 💎📄✂️")
let pc = elegir()
//condiciones
if(jugador === "💎" || jugador === "📄" || jugador === "✂️"){
    if(
        jugador === "💎" && pc === "✂️"
        || jugador === "📄" && pc === "💎"
        || jugador === "✂️" && pc == "📄"
    ){
        alert("Gane hpta!!!🍾")
    }else if(jugador == pc){
        alert("Empate!! 🤝")
    }else{
        alert("Perdiste perro!!")
    }


}else{     
    alert("opcion invalida 👨‍🦽") 
}

