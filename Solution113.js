// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

function strCount(obj){
    let temp = 0;
    JSON.stringify(obj,(key,value)=>{
        if (typeof value === 'string') {
            temp++
        }
        return value;
    })

    return temp
}