

try {
    throw new Error('oops')
}catch(e){
    console.log(e.message)
}