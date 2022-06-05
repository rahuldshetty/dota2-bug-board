import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import ReactMarkdown from 'react-markdown'

import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const AccordionCard = (issue, key) => {
    const state_label = issue.state == "open" ? "Open":"Healed"
    const state_color = issue.state == "open" ? "error" : "success";

    return (
        <ListItem key={key}  sx={{
            paddingTop: 0,

        }}>
            <Accordion sx={{width:"100%"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Stack direction="row" spacing={1}>
                        <Chip color={state_color} label={state_label} /> 
                        <Typography style={{
                            marginTop: 2
                        }}>{issue.title}</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Box  sx={{
                        p: 2,
                        margin: 0,
                        paddingTop: 0
                    }} >
                        <ReactMarkdown children={issue.body}/>
                    </Box>

                    <Divider variant="middle" />
                    
                    <Stack direction="row" alignItems="center" sx={{
                        paddingTop: 2,
                        paddingLeft: 2
                    }} gap={2} >
                        <Link rel="noopener noreferrer" target="_blank" href={issue.html_url} color="inherit">
                            <Stack direction="row" alignItems="center" gap={1}>
                                <GitHubIcon fontSize='large'/>    
                                Link To Issue
                            </Stack>
                        </Link>

                        <Stack direction="row" alignItems="center" gap={1}>
                            <ThumbUpIcon fontSize='large' color="success"/>    
                            {issue.reactions['+1'] + issue.reactions['heart'] + issue.reactions['hooray']}
                        </Stack>

                        <Stack direction="row" alignItems="center" gap={1}>
                            <ThumbDownIcon fontSize='large' color="error"/>    
                            {issue.reactions['-1']}
                        </Stack>

                    </Stack>

                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}

const AccordionList = ({issues}) => {
    return issues && issues.length > 0 && 
    <Box sx={{ pb: 5, overflow: 'auto', maxHeight: '90%' }} >
        <CssBaseline />
        <List>
            {issues.map(issue=>AccordionCard(issue, issue.id))}
        </List>
    </Box>
} 

export default AccordionList