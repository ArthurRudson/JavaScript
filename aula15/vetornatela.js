let valores = [8, 1, 7, 4, 2, 9]
/* 
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//mais simplificado

for (let pos in valores) {
    console.log(valores[pos])
}
let pos = valores.indexOf(7)

console.log(pos)