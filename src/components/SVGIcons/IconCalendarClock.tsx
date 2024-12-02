import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCalendarClock = ({
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
      d="M21.8906 6.25C21.8906 4.45507 20.4356 3 18.6406 3H7.14062C5.3457 3 3.89062 4.45507 3.89062 6.25V17.75C3.89062 19.5449 5.3457 21 7.14062 21H12.9124C12.6159 20.5368 12.3765 20.0335 12.2041 19.5H7.14062C6.17413 19.5 5.39062 18.7165 5.39062 17.75V8.5H20.3906V11.3135C20.9241 11.4858 21.4274 11.7253 21.8906 12.0218V6.25ZM7.14062 4.5H18.6406C19.6071 4.5 20.3906 5.2835 20.3906 6.25V7H5.39062V6.25C5.39062 5.2835 6.17413 4.5 7.14062 4.5ZM23.8906 17.5C23.8906 14.4624 21.4282 12 18.3906 12C15.3531 12 12.8906 14.4624 12.8906 17.5C12.8906 20.5376 15.3531 23 18.3906 23C21.4282 23 23.8906 20.5376 23.8906 17.5ZM18.3906 17.5H20.3906C20.6668 17.5 20.8906 17.7239 20.8906 18C20.8906 18.2762 20.6668 18.5 20.3906 18.5H17.8906C17.6174 18.5 17.3954 18.2809 17.3907 18.0089L17.3906 17.9999V14.9999C17.3906 14.7238 17.6145 14.4999 17.8906 14.4999C18.1668 14.4999 18.3906 14.7238 18.3906 14.9999L18.3906 17.5Z"
      fill="#222222"
    />
  </svg>
)

export default IconCalendarClock
