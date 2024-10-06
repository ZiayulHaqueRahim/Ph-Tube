 const isVerified = ""


// if(isVerified == true){
//     console.log('user is verified')
// }else{
//     console.log('user is not verified')
// }


console.log(`${isVerified === true ? "user is verified" : "user is not verified"}`)

const isVerifiedUser = true;
console.log(`${isVerifiedUser === true ? "User is Verified" : "User is not verified"}`)


//converting sec to hr & min:

function getTimeString(time){

    //get hour and rest seconds:
    const hour = parseInt(time / 3600);
    let remainingSeconds = parseInt(time % 3600)
    const minute = parseInt(remainingSeconds / 60)
    const second = parseInt(remainingSeconds % 60)
    return `${hour} hour ${minute} minute ${second} second ago`
}

console.log(getTimeString(7865))