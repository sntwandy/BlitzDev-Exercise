/**
 * @returns {JSX.Element}
 */

import { FC, useContext } from 'react'
import { Context } from '../../../Context'

/* Components */
import Label from '../../../components/Label'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Login: FC = (): JSX.Element => {
  /* Global Context */
  const { setIsModalOpen, isModalOpen, setUser, user, password, setPassword } =
    useContext(Context)

  return (
    <form className="mt-8 space-y-6">
      <Input id="remember" type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <Label htmlFor="email-address">Email address</Label>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={user}
            placeholder="Email address"
            setData={setUser}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            value={password}
            setData={setPassword}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            value={user}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <Label htmlFor="remember-me">Remember me</Label>
        </div>

        <div className="text-sm">
          <a
            href="https://google.com"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <Button
          disabled={!(user !== '' && password !== '')}
          type="button"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Login
        </Button>
      </div>
    </form>
  )
}

export default Login
