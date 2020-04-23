


function teach() {
    let trainer="Nag" // will move to heap 
    try {
        console.log(trainer+" teching javascript...")
        //throw new Error('hate-js')
        setTimeout(() => {
            console.log(trainer+ " teching react.js")
            //throw new Error('hate-reactjs')
            console.log("teching react.js ends")
        }, 5000);
        console.log("teching javascript end")
    } catch (e) {
        console.log("i caught " + e.message)
    }
}

teach()