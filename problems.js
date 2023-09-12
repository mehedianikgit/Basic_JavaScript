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


// Problem3

function picnicBudget(person) {
    if (person<= 100) {
        var bellowHandredCost = person*5000;

        return bellowHandredCost;
    } 
    if (person>100 && person<=200) {
        var firstHandred = 100*5000
        var exixtPersonCost = (person-100)*4000
        var upHandredToCost = firstHandred+exixtPersonCost;

        return upHandredToCost;
    }
    if (person>200) {
        var firstHandred = 100*5000
        var secondHandredCost = 100*4000
        var thardHandredOrUpCost = (person-200)*3000
        var allCost = firstHandred+secondHandredCost+thardHandredOrUpCost ;

        return allCost;
    }
}

console.log(picnicBudget(250))


// problem4

function oddFreind(friendsName) {

    for (let i = 0; i <= friendsName.length; i++) {
        var element = friendsName[i];
        var nameLenth = element.length
        if (nameLenth%2 == 1) {
            console.log(element)
        }
    }
}

var friendsName = ['rakib', 'anik', 'tanvir', 'sajib', 'ratan','akkas']

console.log(oddFreind(friendsName))