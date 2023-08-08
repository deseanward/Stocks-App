import { useState, useEffect, createContext, useReducer } from 'react'

export const StockContext = createContext({


})

export const StockProvider = ({ children }) => {


    const values = {}

    return (
        <StockContext.Provider value={values}>{children}</StockContext.Provider>
    )

}