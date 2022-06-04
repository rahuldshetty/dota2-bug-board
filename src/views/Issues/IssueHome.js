import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";

import { ISSUE_STATUS_OPEN, ISSUE_STATUS_CLOSED, ISSUE_STATUS_ALL } from "../../constants/GitConstants"

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import HeroList from "./Heros";


import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const IssueHome = () => {
    const dispatch = useDispatch();
    const issues = useSelector(state => state.issues.issues);

    const [searchText, setSearchText] = useState("")
    const [sortType, setSortType] = useState('count');
    
    const fetchIssues = () => {
      dispatch({ type: sagaActions.FETCH_ISSUES, issue_state: ISSUE_STATUS_ALL })
    }
    
    useEffect(() => {
      fetchIssues()
    }, [])
    
    const onHandleTextChange = (event)=>{
      setSearchText(event.target.value)
    }

    const onHandleSortTypeChange = (event)=>{
      setSortType(event.target.value)
    }

    const generateSelectForm = () =>{
      return <div>
        <FormHelperText>Sort By</FormHelperText>
        <Select
          value={sortType}
          onChange={onHandleSortTypeChange}
        >
          <MenuItem value="count">Bugs</MenuItem>
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </div>
    }

  
    return (
      <Container maxWidth="m">
        <Box sx={{ 
          margin: 2,
          marginRight: '20%',
          display: "flex"
        }}
          >
          <TextField 
            size="small" 
            label="Search..." 
            variant="standard" 
            value={searchText}
            onChange={onHandleTextChange} 
            sx={{
              marginTop: 3,
              marginRight: 2
            }}
            />
            {generateSelectForm()}
        </Box>
        <HeroList issues={issues} searchText={searchText} sortType={sortType}/>
      </Container>
    )
}

export default IssueHome