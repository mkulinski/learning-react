function no_dupes(arr) {
    var outArr = [];
    for (var i = 0;i < arr.length;i++){
        if (outArr.indexOf(arr[i]) === -1) {
            outArr.push(arr[i]);
        }
    }
    return outArr;
}

console.log(no_dupes([1,2,3,4,4]));


//function checkUsersValid(goodUsers) {
//    return function allUsersValid(submittedUsers) {
//        return submittedUsers.every(function(everyUser) {
//            return goodUsers.some(function(someUser) {
//                return someUser.id === everyUser.id
//            })
//        })
//    }
//}
//
//var goodUsers = [
//    { id: 1 },
//    { id: 2 },
//    { id: 3 }
//];
//
//var testAllValid = checkUsersValid(goodUsers);
//console.log("This should be true " + testAllValid([ { id: 2 },{ id: 3 }]));
//console.log("This should be false " + testAllValid([ { id: 3 },{ id: 7 }]));
//
//module.exports = checkUsersValid;