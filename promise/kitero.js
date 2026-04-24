
/**
 * 
 * @param {number} num 
 * @returns {Promise<number>}
 */
const buyApple1 = (num) => {
    
    if(num < 5){
        return Promise.resolve(num)
    }
    else{
        return Promise.reject(num)
    }

}

console.log(`Indul a program`)
const res1 = buyApple1(3)
console.log(res1)
res1.then((value) => {
    console.log(`Vásárolt alma ${value}`)
})
console.log("Program vége")

/**
 * 
 * @param {number} num 
 * @returns {Promise<number>}
 */
const buyApple2 = (num) =>{
    return new Promise((resolve,reject) => (
        setTimeout(() => {
            if(num < 5){
                resolve(num)
            }
            else{
                reject(num)
            }
        }, 3000)
    ))
}

console.log("buyapple2 indul")
const res2 = buyApple2(2)
console.log(res2)
res2.then( (value) => {
    console.log(`Vásárolt alma2 ${value}`)
})
console.log("Program 2 vége")

const res3 = buyApple2(5)
res3.then((value) => {
    console.log(`Vásárolt alma2 ${value}`)
}).catch((calue) => {
    console.log(`nincs alma2 ${calue}`)
}).finally(() => {
    console.log("vége a vásárlásnak")
})