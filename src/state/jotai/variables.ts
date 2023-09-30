import { atom } from 'jotai'

export type StateVariables = {
	variable: string
	address: string
}

export const variablesAtom = atom<StateVariables[]>([])
