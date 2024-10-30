import styled from "styled-components";
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { Slider } from '@mui/material';
import { StyledDialog } from "../StyledDialog";
import Button from "../Button";
import { IFileList, useFileContext } from "./FileProvider";
import { FileNameStyled } from "./FileName.style";

export const UnorderdList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 20px;
    padding: 10px;

    & li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 10px 0;
        background-color: #7979795c;
        border-radius: 20px;
        
      
    }
`;

interface ListItemProps{
  index: number
  file: IFileList
  children?: React.ReactNode

}


export function UnordedListItem( { children, index, file } : ListItemProps ) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { fileList, editFileQuality, removeFile  } = useFileContext()

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleQualityItem = (event: Event, value: number | number[]): void => {
      const qualityValue = Number(value)
      editFileQuality(index, qualityValue)
      console.log('ARQUIVOS EDITADOS:')
      console.log('FINAL EDITADO E POSTADO: ', fileList)
    return

  }

  const deleteFileFromList = async () => {
    removeFile(index)
    handleClose()
  }

  return (
    <li>
      <FolderIcon color='inherit' />
      <FileNameStyled>
        {file.name}
      </FileNameStyled>        
      

      
      <Slider 
        style={{ width: '50%' }}
        color="info"
        defaultValue={50} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        onChange={handleQualityItem} 
      />
      <Button
        onClick={handleOpen}
      >
        <DeleteIcon color='action' fontSize="large" />
      </Button>

      <StyledDialog open={isDialogOpen} onClose={handleClose}>
        <div className="card">
            <div className="card-content">
            <p className="card-heading">Deletar arquivo ?</p>
            <p className="card-description">
                {`Tem certeza que deseja excluir ${file.name} ?`}
            </p>
            </div>
            <div className="card-button-wrapper">
            <button className="card-button secondary" onClick={handleClose}>Cancelar</button>
            <button className="card-button primary" onClick={deleteFileFromList} >Deletar</button>
            </div>
            <button className="exit-button" onClick={handleClose}>
            <svg height="20px" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            </button>
        </div>
      </StyledDialog>

      {children}
    </li>

  );
}

export default UnordedListItem;
