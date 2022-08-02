const lego = {
    id: 1,
    name: "lego",
    maker: "The Lego Group",
    price: 15,
    weight: 1.2

}

const gameBoy = {
    id: 1,
    name: "gameBoy",
    maker: "GB Studio",
    price: 22,
    weight: 5.2
}

const tomagotchi = {
    id: 1,
    name: "tomagotchi",
    maker: "Digimon",
    price: 22,
    weight: 5.2
}
const toys = [
    tomagotchi, gameBoy, lego
]

console.log(toys)

for (const toy of toys) {
    console.log(toy.maker)
} 
for (const toy of toys) {
    console.log(`price is ${toy.price * 1.05}`)
}

// function increaseInPrice () {
//     toy.price = * 1.05
// }
