import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const AboutProject = () => {
    return <div style={{
        paddingTop: 5,
        paddingLeft: 5
    }}>
        <Typography variant="h3" gutterBottom component="div" >
            <Link href="https://github.com/rahuldshetty/dota2-bug-board" target="_blank" >
                dota2-bug-board
            </Link>
        </Typography>

        <Typography variant="body1" gutterBottom>
            Issue Tracker for DOTA 2 different heroes based on Jeff Hill's Bug Tracker Repository: 
            <Link href="https://github.com/jeffhill/Dota2" target="_blank" >https://github.com/jeffhill/Dota2</Link>.
            <br/>
            I built this project as a hobby and to learn web development using React JS framework. Open to take any feedback/suggestion to improve this project.
            <br/><br/>
            Some details about the project:
            <ul>
                <li>Open Source - You can find the complete source code for this project: 
                <Link href="https://github.com/rahuldshetty/dota2-bug-board" target="_blank" > https://github.com/rahuldshetty/dota2-bug-board</Link>.
                </li>
                <li>Github API & OpenDota API to fetch Github issues & hero information.</li>
                <li>Issue grouping is implemented using keyword search.<i>(Data will not be 100% accurate as it uses a simple search. I will try to explore other options like Fuzzy Matching/Context based Searching in the future.)</i> </li>
                <li>Issue data is cached on the browser.<i>(Expiry: 1 day)</i></li>
            </ul>
        </Typography>
    </div>
}

export default AboutProject