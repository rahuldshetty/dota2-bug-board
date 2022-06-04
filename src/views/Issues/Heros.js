import {useEffect} from "react"

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";

import HeroCard from "./HeroCard";
import {SortByName} from "./Sort"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const HeroList = () => {
    const dispatch = useDispatch();
    const heros = useSelector(state => state.heros.heros);

    const sortedHeros = SortByName([...heros])

    const fetchHeros = () => {
        dispatch({ type: sagaActions.FETCH_HEROS })
    }

    useEffect(() => {
        fetchHeros()
    }, [])

    const GridSetup = () => {
        return <Grid container 
            spacing={2} 
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {
                sortedHeros.map(hero => 
                    <Grid item xs={2} key={hero.id}>
                        <HeroCard hero={hero} />
                    </Grid>
                )
            }
        </Grid>
    }

    return <Box sx={{ width: '100%' }}>
        {heros && heros.length == 0 && <p>No Heros Found</p>}
        {heros && heros.length != 0 && GridSetup()}
    </Box>

}

export default HeroList