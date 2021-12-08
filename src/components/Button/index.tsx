/**
 * @returns {JSX.Element}
 */

import { FC } from 'react'

/* Type Props */
interface IProps {
  type: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
}

/* Default Props */
const defaultProps = {
  className:
    'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
}

const Button: FC<IProps> = ({ type, className, children }): JSX.Element => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className}>
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps

export default Button
