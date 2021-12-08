/**
 *
 * @returns {JSX.Element}
 */

import ContextApp from './Context'

import Login from './pages/Login'

const App = (): JSX.Element => {
  return (
    <ContextApp>
      <Login />
    </ContextApp>
  )
}

export default App
