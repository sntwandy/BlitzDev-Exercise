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
  className: 'sr-only',
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
