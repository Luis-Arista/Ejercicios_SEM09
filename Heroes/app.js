const {heroes} = require('./heroes')

console.log(heroes)

const obtenerHeroe = (id) => {
    heroes.find( (heroe) => {
        if (heroe.id === id){
            console.log(heroe)
        }
    })
}

obtenerHeroe (4)