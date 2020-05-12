
// custom middleware

module.exports = function (req, res, next) {

    const start = +new Date() // current time in miilis
    const url = req.url
    const method = req.method
    const stream = process.stdout

    res.on('finish', () => {
        const end = +new Date() // current time in miilis
        const duration = end - start
        var message = method + ' to ' + url + '\ntook ' + duration + ' ms \n\n';
        stream.write(message)
    })

    next()

}