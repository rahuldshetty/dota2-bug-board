export const getCurrentTimeStampString = () =>{
    const timestamp = Date.now();
    return timestamp.toString()
}

export const getCurrentTimeStampStringAddDays = (days) =>{
    var timestamp = Date.now();
    timestamp.setDate(timestamp.getDate() + days);
    return timestamp.toString()
}

export const getCurrentTimeStamp = () =>{
    const timestamp = Date.now();
    return timestamp
}