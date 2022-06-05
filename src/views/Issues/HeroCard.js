import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import BugReportIcon from '@mui/icons-material/BugReport';
import HealingIcon from '@mui/icons-material/Healing';

import { useDispatch } from "react-redux";
import { setSelectedHero } from "../../store/HeroReducer"

const HeroCard = ({hero, issues}) => {
    const dispatch = useDispatch();

    const setCardHero = () => {
        dispatch(setSelectedHero(
            {
                ...hero,
                issues: issues
            }
        ))
    }

    const bugsOpen = issues.filter((issue)=>issue.state == "open").length
    const bugsClosed = issues.filter((issue)=>issue.state == "closed").length

    return (
        <Card sx={{ minWidth: 175 }}>
            <CardActionArea onClick={setCardHero}>
                <CardHeader
                    avatar={
                        <i className={"d2mh " + hero.name}></i>
                    }
                    title={hero.localized_name}
                />
                <CardContent>
                    <Stack direction="row" spacing={1}>
                        <Chip color="error" icon={<BugReportIcon color="warning"/>} label={"Bugs " +  bugsOpen}  />
                        <Chip color="success" icon={<HealingIcon color="warning"/>} label={"Healed " +  bugsClosed}  />  
                    </Stack>             
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default HeroCard