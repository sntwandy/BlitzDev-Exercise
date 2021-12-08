/**
 * @returns {JSX.Element}
 */

import { FC } from 'react'

/* Components */
import Label from '../../../components/Label'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Login: FC = (): JSX.Element => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
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
            placeholder="Email address"
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
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <Label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </Label>
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
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  )
}

export default Login
