import React, { createContext, useState } from 'react';

const DataContext = React.createContext({});

const DataProvider = props => {

    const [data, setData] = useState([]);

    const dataContext = {
        heroesContext: data,
        feedHeroes: arrayFromAPI => {
            setData([]);
        }
    };

    return (
        <DataContext.Provider value={dataContext}>
            {props.children}
        </DataContext.Provider>
    );
};


export { DataContext, DataProvider };