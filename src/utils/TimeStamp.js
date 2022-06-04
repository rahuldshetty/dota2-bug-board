export const getCurrentTimeStampString = () =>{
    const timestamp = new Date();
    return timestamp.toString()
}

export const getCurrentTimeStampStringAddDays = (days) =>{
    var timestamp = new Date();
    timestamp.setDate(timestamp.getDate() + days);
    return timestamp.toString()
}

export const getCurrentTimeStamp = () =>{
    const timestamp = new Date();
    return timestamp
}