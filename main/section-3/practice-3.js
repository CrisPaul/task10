'use strict';
function countSameElements(collection) {
    var objArr = [];
    collection.map(function (elem){
        for(var i = 0; i < objArr.length; i++){
            if(elem == objArr[i].key){
                objArr[i].count += 1;
                return;
            }
        }
        objArr[objArr.length]= {
            key:elem,
            count:1
        }
    })

    return objArr;
}
module.exports =
    function createUpdatedCollection(collectionA, objectB) {
        var objArrA = countSameElements(collectionA);
        var collection= [];
        var arrB = objectB.value;
        for(var obj in objArrA){
            if(arrB.indexOf(objArrA[obj].key) >= 0){

                collection.push({
                    key:objArrA[obj].key,
                    count:objArrA[obj].count-Math.floor(objArrA[obj].count/3)
                })

            }else{
                collection.push({
                    key:objArrA[obj].key,
                    count:objArrA[obj].count
                })
            }
        }
        return collection;

    }