import {useEffect} from "react"

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";

import FetchIssuesRelatedtoHero from "./HeroIssueFilter"

import HeroCard from "./HeroCard";
import {SortByName, SortByIssueCount, FilterBySearchText} from "./Sort"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LoadingScreen from "../../components/LoadingScreen"
import HeroModal from "./HeroIssueModal"

const HeroList = ({issues, searchText, sortType}) => {
    const dispatch = useDispatch();
    const heros = useSelector(state => state.heros.heros);

    let sortedHeros = []

    if (sortType==="name"){
        sortedHeros = SortByName([...heros])
    } else {
        sortedHeros = SortByIssueCount([...heros], issues)
    }

    const filteredHeros = FilterBySearchText(sortedHeros, searchText)

    const fetchHeros = () => {
        dispatch({ type: sagaActions.FETCH_HEROS })
    }

    useEffect(() => {
        fetchHeros()
    }, [])

    const GridCard = (hero) => {
        const heroIssues = FetchIssuesRelatedtoHero(issues, hero)
        return <HeroCard hero={hero} issues={heroIssues}/>
    }

    const GridSetup = () => {
        return <Grid container 
            spacing={2} 
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {
                filteredHeros.map(hero => 
                    <Grid item xs={2} key={hero.id}>
                        {GridCard(hero)}
                    </Grid>
                )
            }
        </Grid>
    }

    return <Box sx={{ width: '100%' }}>
        <HeroModal/>
        {heros && heros.length === 0 && issues && issues.length === 0 && <LoadingScreen />}
        {heros && heros.length !== 0 && issues && issues.length !== 0 && GridSetup()}
    </Box>

}

export default HeroList