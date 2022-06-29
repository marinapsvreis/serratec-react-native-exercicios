import React, { createContext, useState } from "react";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({ children }: any) => {

    const [idCategoria, setIdCategoria] = useState(0);
    const [nomeCategoria, setNomeCategoria] = useState(0);

    const handleCategoria = (categoria: any) => {

        if (categoria === undefined) {
            setIdCategoria(0);
            setNomeCategoria(0);
            return false;
        } else {
            setIdCategoria(categoria.idCategoria)
            setNomeCategoria(categoria.nomeCategoria)
            return true;
        }
    }

    return (
        <CategoriaContext.Provider value={{
            idCategoria,
            nomeCategoria,
            handleCategoria
        }}>
            {children}
        </CategoriaContext.Provider>
    )
};

export default CategoriaProvider;