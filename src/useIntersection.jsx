import {useEffect, useState, useRef} from "react";

function useIntersection(opciones ={}){
    const elementoRef = useRef();
    const [intersectado, setIntersectado]= useState(false);

    useEffect(() => {
        const elemento = elementoRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIntersectado(entry.isIntersecting);
            });
        },opciones);

        if(elemento){
            observer.observe(elemento)
        }

        return ()=>{
            if(elemento){
                observer.unobserve(elemento);
            }
        };
    },[opciones]);

    return[elementoRef, intersectado]

}

export default useIntersection;