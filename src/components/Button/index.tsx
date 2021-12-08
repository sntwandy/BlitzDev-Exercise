/**
 * @returns {JSX.Element}
 */

import { FC } from 'react'

/* Type Props */
interface IProps {
  type: 'button' | 'submit' | 'reset'
  className?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

/* Default Props */
const defaultProps = {
  className:
    'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  disabled: false,
}

const Button: FC<IProps> = ({
  type,
  className,
  children,
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps

export default Button
