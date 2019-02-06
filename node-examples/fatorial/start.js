console.log(module.id);
const fatorial = (num) => {
    if(num === 0){
        return 1;
    }
    return num * fatorial(num -1 )
}
// Jeitos de Se exportar
/*  module.exports = {
    fatorial:fatorial
    delta:delta    
} */
// exports.fatorial = fatorial
module.exports = fatorial