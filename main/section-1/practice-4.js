'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionB = objectB.value;
    collectionA = collectionA.map(function (elem) {return elem.key})
    var result = collectionA.filter(function (element,index,arr){
        return collectionB.indexOf(element) >= 0;
    })
    return result;
}
