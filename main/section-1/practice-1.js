'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var resCollection = collectionA.filter(function(elem,index,arr){
        return collectionB.indexOf(elem) >= 0;
    })
    return resCollection;
}
