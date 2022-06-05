import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from "react-redux";
import { setSelectedHero } from "../../store/HeroReducer"

import CardHeader from '@mui/material/CardHeader';

import AccordionList from "./HeroIssueAccordion";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: "95%",
    height: "95%"
  };

const HeroModal = () => {
    const dispatch = useDispatch();

    const removeSelectedCardHero = () => {
        dispatch(setSelectedHero(null))
    }

    const selectedHero = useSelector(state => state.heros.selectedHero);
    const open = (selectedHero == null ? false:true)

    return (selectedHero && <Modal
        open={open}
        onClose={removeSelectedCardHero}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <CardHeader
                avatar={
                    <i className={"d2mh " + selectedHero.name}></i>
                }
                title={<Typography id="modal-modal-title" variant="h6" component="h2">
                    {selectedHero.localized_name}
                </Typography>}
            />
            <AccordionList issues={selectedHero.issues}/>
        </Box>
    </Modal>)
}

export default HeroModal