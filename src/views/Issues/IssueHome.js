import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";

import { ISSUE_STATUS_OPEN, ISSUE_STATUS_CLOSED, ISSUE_STATUS_ALL } from "../../constants/GitConstants"

import Container from '@mui/material/Container';

import HeroList from "./Heros";

const IssueHome = () => {
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issues.issues);
    
    const fetchIssues = () => {
      dispatch({ type: sagaActions.FETCH_ISSUES, issue_state: ISSUE_STATUS_OPEN })
    }
    
    useEffect(() => {
      fetchIssues()
    }, [])
    
  
    return (
      <Container maxWidth="m">
        {issues && issues.map(issue=>{
            return <p key={Math.random()}>{issue.title}</p>
        })}
        {issues.length == 0 && <p>Nothing to show!</p>}

        <HeroList/>

      </Container>
    )
}

export default IssueHome