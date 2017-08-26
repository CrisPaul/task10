'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
        var resCollection= [];
        var arrB = objectB.value;
        for(var obj in collectionA){
            if(arrB.indexOf(collectionA[obj].key) >= 0){

                resCollection.push({
                    key:collectionA[obj].key,
                    count:collectionA[obj].count-Math.floor(collectionA[obj].count/3)
                })

            }else{
                resCollection.push({
                    key:collectionA[obj].key,
                    count:collectionA[obj].count
                })
            }
        }
        return resCollection;
    }