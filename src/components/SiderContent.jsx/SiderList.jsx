import * as React from 'react';
import SingleCard from './SingleCard';
import unique from "unique"
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const BasicAccordion = ({ trainInfo, showPath, setDrawPath }) => {
    
    return (
        <div>
            {trainInfo.map((t) => 
                <SingleCard wagon={t} 
                showPath={showPath} 
                key={unique()} 
                setDrawPath={setDrawPath}
                /> 
            )}




        </div>
    );
}