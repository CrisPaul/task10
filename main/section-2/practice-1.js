'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    collection.map(function (elem) {
        for(var i=0; i<result.length; i++){
            if(elem === result[i].key){
                result[i].count += 1;
                return ;
            }
        }
        result[result.length] = {
            key:elem,
            count:1
        }
    })
    return result;
}
