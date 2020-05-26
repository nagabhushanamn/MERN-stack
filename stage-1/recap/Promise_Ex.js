

//-------------------------------------------
// WHO
//-------------------------------------------

function getVaccineForCorona(){
    const promise=new Promise((resolve, reject)=>{
        setTimeout(() => {
            let result="COVID-19 Vaccine"
            resolve(result)
        },6000)
    })
    return promise
}



//-------------------------------------------
// people
//-------------------------------------------

// function live(){
    
//     let promise=getVaccineForCorona()
//     promise
//     .then(function(result){
//         console.log("thanks who for "+result)
//     })
//     .catch(function(err){
//         console.log("stay home & stay safe even for some period ")
//     })
//     console.log("keep learning...")

// }


async function live(){
    
    let vaccine=await getVaccineForCorona()
    console.log("stay home & stay safe even for some period ")
   
}

live()