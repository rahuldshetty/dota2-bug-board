import CircularProgress from '@mui/material/CircularProgress';
import {CenterDiv} from '../utils/CssStyleHelper';

const LoadingScreen = () => {
    return <div style={CenterDiv}>
        <CircularProgress color="success" disableShrink />
    </div>
}

export default LoadingScreen