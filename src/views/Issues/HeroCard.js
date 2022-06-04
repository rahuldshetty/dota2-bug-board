import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const HeroCard = ({hero}) => {
    return (
        <Card sx={{ minWidth: 175, minHeight: 135 }}>
            <CardHeader
                avatar={
                    <i className={"d2mh " + hero.name}></i>
                }
                title={hero.localized_name}
            />
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default HeroCard