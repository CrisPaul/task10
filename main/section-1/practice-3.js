'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var collectionB = objectB.value;
    var result = collectionA.filter(function (elem,index,arr) {
        return  collectionB.indexOf(elem) >= 0;
    })
    return result;
}
