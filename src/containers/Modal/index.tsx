/**
 * @returns {JSX.Element}
 */

import { FC, useContext } from 'react'
import { Context } from '../../Context'

/* Components */
import Button from '../../components/Button'

interface IProps {
  title: string
}

const Login: FC<IProps> = ({ title }): JSX.Element => {
  /* Global Context */
  const { setIsModalOpen, isModalOpen, user, password } = useContext(Context)

  return (
    <div
      className={`${
        !isModalOpen && 'hidden'
      } fixed z-10 inset-0 overflow-y-auto`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className={`${
            isModalOpen
              ? 'ease-out opacity-100'
              : 'ease-in duration-200 opacity-0'
          } duration-300 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
          aria-hidden="true"
        />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className={`${
            isModalOpen
              ? 'ease-in duration-200 opacity-100 translate-y-0 sm:scale-100'
              : 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          } inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    I got your email: {user}
                  </p>
                  <p className="text-sm text-gray-500">
                    And your password: {password}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              type="button"
              onClick={(): void => setIsModalOpen(!isModalOpen)}
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
