
// Map
//--------------------------------------
let obj = {
    'Nag N': "BMW",
    Riya: "Benz-toy-car"
}
//--------------------------------------
let owner1 = { name: 'Nag' }
let owner2 = { name: 'Nag' }

let map1 = new Map()
map1.set(owner1, "BMW")
map1.set(owner2, "Benz-toy-car")

console.log(map1.get(owner1))
//--------------------------------------