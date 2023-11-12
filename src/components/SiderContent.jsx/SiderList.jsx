import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDownOutlined } from '@ant-design/icons';
import SingleCard from './SingleCard';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const BasicAccordion = ({ trainInfo, showPath }) => {
    
    return (
        <div>
            {trainInfo.map((t) => 
                <SingleCard wagon={t} showPath={showPath}/> 
            )}




        </div>
    );
}