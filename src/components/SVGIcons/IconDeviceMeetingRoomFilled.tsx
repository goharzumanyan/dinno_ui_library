import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDeviceMeetingRoomFilled = ({
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
      d="M4.0925 5.34571C4.42383 3.96976 5.65506 3 7.07066 3H16.9293C18.3449 3 19.5762 3.96976 19.9075 5.34571L21.8997 13.6191C22.4374 15.8521 20.7448 18 18.4475 18H5.55251C3.2552 18 1.56258 15.8521 2.10028 13.6191L4.0925 5.34571ZM6.74871 19C6.3344 19 5.99853 19.3358 5.99853 19.75C5.99853 20.1642 6.3344 20.5 6.74871 20.5H17.2513C17.6656 20.5 18.0014 20.1642 18.0014 19.75C18.0014 19.3358 17.6656 19 17.2513 19H6.74871Z"
      fill="#222222"
    />
  </svg>
)

export default IconDeviceMeetingRoomFilled