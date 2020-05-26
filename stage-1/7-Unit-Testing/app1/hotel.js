

function getFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("biryani")
        }, 2000)
    })
}
module.exports = { getFood }