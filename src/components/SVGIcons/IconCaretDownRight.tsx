import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretDownRight = ({
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
      d="M16.5937 7.81065L7.9044 16.5H16.3437C16.4818 16.5 16.5937 16.3881 16.5937 16.25V7.81065ZM15.9599 6.32321C16.7473 5.53575 18.0937 6.09347 18.0937 7.2071V16.25C18.0937 17.2165 17.3102 18 16.3437 18H7.30085C6.18721 18 5.62951 16.6536 6.41696 15.8661L15.9599 6.32321Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretDownRight
