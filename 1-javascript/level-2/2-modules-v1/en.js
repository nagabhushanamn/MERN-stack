

/**
 * 
 *  author : Mani
 * 
 */

var global = global || {};

(function () {

    var message = "hello" // private

    function greet() {    // public
        console.log(message)
    }
    global.en = greet

})()