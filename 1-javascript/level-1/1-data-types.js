
console.log("---------------------------")
console.log('-data-types-')
console.log("---------------------------")



//----------------------------------------------------------------------------------
/**
 *
 *  data types
 *
 *  1. simple/primitives  ==> values
 *
 *  a. undefined
 *  b. string
 *  c. number
 *  d. boolean
 *
 *  2. complex/reference  ==> objects
 * 
 *
 */

//----------------------------------------------------------------------------------
// 1. simple/primitives 
//----------------------------------------------------------------------------------

//-------------------------------------------------
// undefined
//-------------------------------------------------

var v;

//-------------------------------------------------
// string
//-------------------------------------------------

var name = "Nag"
var company = 'cts'

var dynamicString1 = "the trainer " + name + " teaching in " + company
var dynamicString2 = `the trainer ${name} teaching in ${company}` // string interpolation ( es6 )

var multiLineSteing1 = `
    <div>
        <h1>${name}</h1>
        <h4>${company}</h4>
    </div>
`

var resultString = `the sume of 1 and 2 is ${1 + 2}`


//-------------------------------------------------
// number
//-------------------------------------------------

var count = 12
var cost=12.12


//-------------------------------------------------
// boolean
//-------------------------------------------------

var isFinished=false
if(isFinished){console.log("yes")}
else {console.log("not yet")}

/**
 * 
 *  imp-note :
 * 
 *  falsy values :   false,"",0,undefied,null,NaN
 * 
 *  reference : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */