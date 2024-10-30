import Dialog from "@mui/material/Dialog";
import styled from "styled-components";


export const DownloadFileDialog = styled(Dialog)`
    .MuiDialog-paper {
        /* Estilos para o papel do diálogo */
        border-radius: 20px;
        box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.068);
    }
    .card {
    width: 300px;
    height: fit-content;
    border-radius: 40px;
    display: flex;
    width: 100vw;
    height: 100dvh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px;
    position: relative;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.068);
    }
    .card-content {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
    }
    .card-heading {
    font-size: 20px;
    font-weight: 700;
    }
    .card-description {
    font-weight: 100;
    color: rgb(102, 102, 102);
    }
    .card-button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    }
    .card-button {
    width: 50%;
    height: 35px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    }
    .primary {
    background-color: rgb(255, 114, 109);
    color: white;
    }
    .primary:hover {
    background-color: rgb(255, 73, 66);
    }
    .secondary {
    background-color: #ddd;
    }
    .secondary:hover {
    background-color: rgb(197, 197, 197);
    }
    .exit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    }
    .exit-button:hover svg {
    fill: black;
    }
    .exit-button svg {
    fill: rgb(175, 175, 175);
    }

`