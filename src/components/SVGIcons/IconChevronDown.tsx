import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDown = ({
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
      d="M4.32904 8.46967C4.62194 8.17678 5.09681 8.17678 5.38971 8.46967L12.1094 15.1893L18.829 8.46967C19.1219 8.17678 19.5968 8.17678 19.8897 8.46967C20.1826 8.76256 20.1826 9.23744 19.8897 9.53033L12.6397 16.7803C12.3468 17.0732 11.8719 17.0732 11.579 16.7803L4.32904 9.53033C4.03615 9.23744 4.03615 8.76256 4.32904 8.46967Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronDown
