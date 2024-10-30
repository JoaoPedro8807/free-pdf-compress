import React, { Fragment, useEffect, useState, useRef } from "react";
import { Progress, Box } from "@radix-ui/themes";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [teste, setTeste] = useState(10);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                // Simulando a lógica de progresso
                setProgress(prev => {
                    const newProgress = Math.min(prev + 10, 100); // Atualiza o progresso
                    return newProgress;
                });
                setTeste(prev => prev + 10); 
                console.log('teste atual: ', teste, 'progress atual: ', progress);
            } catch (error) {
                console.error('Erro ao buscar progresso:', error);
            }
        };

        intervalRef.current = setInterval(() => {
            fetchProgress();
        }, 1000); // Faz a requisição a cada 1 segundo

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (progress >= 100 && intervalRef.current) {
            clearInterval(intervalRef.current); // Para o intervalo quando o progresso atinge 100%
        }
    }, [progress]);

    return (
        <Fragment>
            <Box>   
                <Progress value={progress} variant="soft" />
            </Box>
        </Fragment>
    );
};

export default ProgressBar;
