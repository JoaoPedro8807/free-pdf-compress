import React, { useState } from 'react';
import { Collapse, Box } from '@mui/material';
import { OpenColapseBtn } from './openColapse';

interface ColapseCardProps {
    children?: React.ReactNode
    title: string
    btnTitle?: string
}

export const ColapseCard: React.FC<ColapseCardProps> = ( { children, title, btnTitle}: ColapseCardProps ) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (): void => {
    setOpen(!open);
  };

  return (
    <Box marginTop={'100px'} marginBottom={'100px'}>
        <h2> {title} </h2>
        <OpenColapseBtn onClick={handleToggle} btnTitle={btnTitle}/>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box mt={2}>
                    {children}
                </Box>
        </Collapse>
    </Box>
  );
};



