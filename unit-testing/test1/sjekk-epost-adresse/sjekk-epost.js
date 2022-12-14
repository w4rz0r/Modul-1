
function isThisAEmail(maybeAEmail){
    var indexOfAt = maybeAEmail.indexOf("@");
    var firstDotIndex = maybeAEmail.indexOf(".");
    console.log(indexOfAt, 'før substring');
    var findSecondDotIndex = maybeAEmail.substring(indexOfAt).indexOf(".");
    console.log(indexOfAt, 'etter substring');

    if(maybeAEmail.includes("@") && !maybeAEmail.includes(" ")){
        console.log(maybeAEmail);
        console.log(indexOfAt, 'posisjon @');
        console.log(firstDotIndex, 'posisjon første dot');
        console.log(findSecondDotIndex, 'posisjon andre dot');
        if(firstDotIndex < indexOfAt && indexOfAt > maybeAEmail.includes(".")){
            return true;
        } else return false;
    }
}


