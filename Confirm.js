function confirmEnding(str, target) {

    var strSplit = str.split('');
    var targetSplit = target.split('');
    var newstr=''
    for (i=str.length-target.length; i<str.length; i+=1){
        // var newstr=str[i];
        newstr+=str[i]
        var newtarger=target[0]; // WTF?
        // if(newtarger == newstr) {
        //
        // }

        // for (m=0; m<target.length; m+=1){
        //
        //     if (str[i] == target[m]){
        //         target[m]=target[m+1];
        //         console.log(target[m+1]);
        //     }else {
        //         // return str;
        //     }
        // }

    }
    if(newstr == target){
        console.log('WIN')
    }else {
        console.log('POTRACHENO')
    }
    // for (i=str.length; i>str.length-target.length-1; i-=1){
    //     var targetnew=target.length;
    //     for (m=target.length; m>0-1; m-=1){
    //         if(str[i] == targetnew){
    //             targetnew=target[m-1]
    //         }
    //         console.log(target[m]);
    //     }
        //     if (str[i] == target[m]){
        //         target[m]=target[m+1];

        //     }else {
        //         // return str;
        //     }
        // }


    // }



    // var targetSplit = target.split('');
    // for (i=strSplit.length-target.length; i>)
    // if(strSplit[strSplit.length-1] == target){
    //     alert( "da!" );
    // }else {
    //     alert( "net!" );
    // }

    return str;
}

confirmEnding("He has to give me a new name", "name");