import { useEffect, useState } from "react";


const localCache = {

}


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });


    useEffect(() => {

        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });

    }


    const getFetch = async () => {
        setLoadingState();
    
        const res = await fetch(url);
        if (!res.ok) {
            setstate({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText,
                },
            });
            return;
        }
    
        const data = await res.json();
    
        // Actualiza solo después de la respuesta completa
        setstate((prevState) => ({
            ...prevState,
            data,
            isLoading: false,
            hasError: false,
        }));
    };


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}
