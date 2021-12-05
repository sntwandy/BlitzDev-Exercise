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
  className: 'sr-only',
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
