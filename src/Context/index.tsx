/**
 *
 */

import { createContext, FC, useState } from 'react'

interface IContext {
  user: string
  password: string
  setUser: (user: string) => void
  setPassword: (password: string) => void
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const initialState = {
  user: '',
  password: '',
  setUser: () => {},
  setPassword: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
}

export const Context = createContext<IContext>(initialState)

const ContextApp: FC = ({ children }): JSX.Element => {
  const [state, setState] = useState(initialState)

  return (
    <Context.Provider
      value={{
        user: state.user,
        password: state.password,
        isModalOpen: state.isModalOpen,
        setIsModalOpen: (isModalOpen: boolean) =>
          setState({ ...state, isModalOpen }),
        setUser: (user: string) => setState({ ...state, user }),
        setPassword: (password: string) => setState({ ...state, password }),
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextApp
