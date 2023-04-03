function curriedAdd(addition) {
    let total = addition
    if (!total) return 0
    
    return function add(addition){
        if(!addition) {
            console.log("returning",total)
            return total
        }
        total += addition
        console.log("total+add",total)
        return (addition)=>(add(addition))
    }

    
}

module.exports = { curriedAdd };
