/**
 * @returns {JSX.Element}
 */

import { FC } from 'react'

/* Type Props */
interface IProps {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

/* Default Props */
const defaultProps = {
  className: 'ml-2 block text-sm text-gray-900',
}

const Label: FC<IProps> = ({ htmlFor, className, children }): JSX.Element => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}

Label.defaultProps = defaultProps

export default Label
