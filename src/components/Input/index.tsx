/**
 * @returns {JSX.Element}
 */

import { FC } from 'react'

/* Type Props */
interface IProps {
  id: string
  name: string
  type: 'text' | 'email' | 'password' | 'checkbox' | 'radio' | 'hidden'
  autoComplete?: string
  required?: boolean
  placeholder?: string
  className?: string
  value?: string
  setData?: (data: string) => void
}

/* Default Props */
const defaultProps = {
  autoComplete: 'off',
  placeholder: '',
  required: false,
  value: '',
  className:
    'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
  setData: () => {},
}

const Input: FC<IProps> = ({
  id,
  name,
  type,
  autoComplete,
  required,
  placeholder,
  className,
  value,
  setData,
}): JSX.Element => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(event) => setData && setData(event.target.value)}
    />
  )
}

Input.defaultProps = defaultProps

export default Input
