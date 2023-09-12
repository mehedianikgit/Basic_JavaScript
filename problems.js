// Problem1
function anaToVori(ana){
    var vori = ana/16;
    return vori;
}

console.log(anaToVori(64))

// Problem2

function pandaCost(singara, samusa, jilapi){
    if (typeof singara =='number' && typeof samusa == 'number'&& typeof jilapi =='number') {
       var totalSingara = singara*7;
       var totalSamusa = samusa*10;
       var totaljilapi = jilapi*15;
       var totalCost = totalSamusa+totalSingara+totaljilapi;
       return totalCost; 
    }
    else {
        console.log("invalid input")
    }

}

console.log(pandaCost(1, 2, 2))