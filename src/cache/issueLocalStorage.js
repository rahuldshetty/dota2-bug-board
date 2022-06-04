import {
    TIMESTAMP_KEY,
    ISSUE_KEY
} from "../constants/LocalStorageConstants"

import {
    getCurrentTimeStampString,
    getCurrentTimeStamp,
    getCurrentTimeStampStringAddDays
} from "../utils/TimeStamp"


export const readIssueFromLocalStorage = () => {
    const issueTimeStampString = localStorage.getItem(TIMESTAMP_KEY) || getCurrentTimeStampString()
    
    const issueTimeStamp = new Date(issueTimeStampString)
    const currentTimeStamp = getCurrentTimeStamp()
    
    if(currentTimeStamp>=issueTimeStamp){
        return null
    }
    else{
        console.log("READING FROM CACHE")
        const issues = JSON.parse(localStorage.getItem(ISSUE_KEY))
        return issues
    }
}

export const setLocalStorageCache = (issues) => {
    const issueTimeStampString = getCurrentTimeStampStringAddDays(1)
    const jsonString = JSON.stringify(issues)
    localStorage.setItem(ISSUE_KEY, jsonString);
    localStorage.setItem(TIMESTAMP_KEY, issueTimeStampString);
}