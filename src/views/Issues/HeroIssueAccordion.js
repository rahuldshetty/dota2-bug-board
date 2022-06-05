import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CssBaseline from '@mui/material/CssBaseline';

import ReactMarkdown from 'react-markdown'

const AccordionCard = (issue, key) => {
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
                    <Typography variant="h6">{issue.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReactMarkdown>
                        {issue.body}
                    </ReactMarkdown>
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