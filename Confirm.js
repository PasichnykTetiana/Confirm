function confirmEnding(str, target) {


    var newstr=''
    for (i=str.length-target.length; i<str.length; i+=1){
        newstr+=str[i]
        // var newtarger=target[0];
    }

    // if(newstr == target){
    //     console.log(newstr === target);
    //
    //
    // }else {
    //     console.log(newstr == target); //тут ок
    // }
    // console.log(newstr == target);
    return newstr == target;
}

// confirmEnding("He has to give me a new name", "name");
console.log(confirmEnding("He has to give me a new name", "name"))