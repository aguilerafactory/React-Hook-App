import { useEffect, useState } from "react"

const localCache = {};


export const useFecht = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading:true,
        hasError: false,
        error:null,
    });

    useEffect(() =>{
        getFech();
    }, [url]);

    const setLoadingState = () =>{
        setState({
            data: null,
            isLoading:true,
            hasError: false,
            error:null,
        });
    }

    const getFech = async() =>{
        
        if(localCache[url]){
            console.log('Usando Cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();
        const response = await fetch(url);
        if(!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                },
            });
            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });
       
        localCache[url] = data;
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error    
    }
}
