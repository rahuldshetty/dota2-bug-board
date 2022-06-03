import {useEffect} from "react"

import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../../sagas/actions";


const HeroList = () => {
    const dispatch = useDispatch();
    const heros = useSelector(state => state.heros.heros);

    const fetchHeros = () => {
        dispatch({ type: sagaActions.FETCH_HEROS })
    }
    
    useEffect(() => {
        fetchHeros()
    }, [dispatch])

    return <div>
        {heros && heros.length == 0 && <p>No Heros Found</p>}
        {heros && heros.length != 0 && 
            heros.map(hero => {
                    return <div>
                        <h3>{hero.localized_name}</h3>
                    </div>
                }
        )}
    </div>

}

export default HeroList