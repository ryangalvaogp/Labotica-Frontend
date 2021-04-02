import { createContext, useEffect, useState } from 'react'
import Crypto from 'crypto'
import api from '../config/api'
import { SettingsContextData, SettingsContextProviderProps } from '../config/Types/TypesSettings'

export const SettingsContext = createContext({} as SettingsContextData )
export function SettingsContextProvider({ children }: SettingsContextProviderProps ) {
  

  return (
    <SettingsContext.Provider value={
      {
       
      }
    }>
      {children}
    </SettingsContext.Provider>
  )
}