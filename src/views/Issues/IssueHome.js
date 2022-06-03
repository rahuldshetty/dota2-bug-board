import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";

import { ISSUE_STATUS_OPEN, ISSUE_STATUS_CLOSED, ISSUE_STATUS_ALL } from "../../constants/GitConstants"

import HeroList from "./Heros";

const IssueHome = () => {
    const dispatch = useDispatch();
    const issues = [{
      "title": "PA  Crit NOt WORKIKNG PHantom Assassin"
    }] 

    // UNCOMMENT
    // const issues = useSelector(state => state.issues.issues);
    
    const fetchIssues = () => {
      dispatch({ type: sagaActions.FETCH_ISSUES, issue_state: ISSUE_STATUS_OPEN })
    }
    
    // UNCOMMENT
    // useEffect(() => {
    //   fetchIssues()
    // }, [dispatch])
    
  
    return (
      <div>
        {issues && issues.map(issue=>{
            return <p>{issue.title}</p>
        })}
        {issues.length == 0 && <p>Nothing to show!</p>}

        <HeroList/>

      </div>
    )
}

export default IssueHome