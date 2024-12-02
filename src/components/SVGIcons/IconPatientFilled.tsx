import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPatientFilled = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M17.75 2C18.9926 2 20 3.00736 20 4.25V19.7546C20 20.9972 18.9926 22.0046 17.75 22.0046H6.25C5.00736 22.0046 4 20.9972 4 19.7546V4.25C4 3.05914 4.92516 2.08436 6.09595 2.00519L6.25 2H17.75ZM18.5 16H5.5V19.7546C5.5 20.1688 5.83579 20.5046 6.25 20.5046H17.75C18.1642 20.5046 18.5 20.1688 18.5 19.7546V16ZM7.75129 17.5H16.25C16.6642 17.5 17 17.8358 17 18.25C17 18.6297 16.7178 18.9435 16.3518 18.9932L16.25 19H7.75129C7.33707 19 7.00129 18.6642 7.00129 18.25C7.00129 17.8703 7.28344 17.5565 7.64952 17.5068L7.75129 17.5H16.25H7.75129ZM17.75 3.5H6.25L6.14823 3.50685C5.78215 3.55651 5.5 3.8703 5.5 4.25V14.5H8V12.2455C8 11.5983 8.49187 11.066 9.12219 11.002L9.25 10.9955H14.75C15.3972 10.9955 15.9295 11.4874 15.9935 12.1177L16 12.2455V14.5H18.5V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5ZM12 4.99552C13.3807 4.99552 14.5 6.11481 14.5 7.49552C14.5 8.87624 13.3807 9.99552 12 9.99552C10.6193 9.99552 9.5 8.87624 9.5 7.49552C9.5 6.11481 10.6193 4.99552 12 4.99552Z"
      fill="#222222"
    />
  </svg>
)

export default IconPatientFilled