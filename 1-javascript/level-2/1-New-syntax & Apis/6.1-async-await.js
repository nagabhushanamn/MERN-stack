


const getDrink = () => {
    return Promise.resolve("coffee")
}

const getCookies = () => {
    return Promise.resolve("bisc..")
}


function refresh_v1() {
    getDrink()
        .then(drink => {
            getCookies()
                .then(cookies => {
                    console.log(`refreshing with ${drink} and ${cookies}`)
                })
        })
}
refresh_v1()


// Es6
function* refresh_v2() {
    let drink = yield "get drink"
    let cookies = yield "get cookies"
    console.log(`refreshing with ${drink} and ${cookies}`)
}


let it = refresh_v2()
it.next()
getDrink()
    .then(drink => {
        it.next(drink)
        getCookies()
            .then(cookies => {
                it.next(cookies)
            })
    })


// Es7
async function refresh_v3() {
    try {
        let drink = await getDrink()
        let cookies = await getCookies()
        console.log(`refreshing with ${drink} and ${cookies}`)
    } catch (e) {
        console.log("i hate my home")
    }
}
refresh_v3()