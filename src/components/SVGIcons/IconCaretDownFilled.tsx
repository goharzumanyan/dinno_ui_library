import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretDownFilled = ({
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
      d="M6.19555 8C5.1216 8 4.54762 9.2649 5.25483 10.0731L10.7767 16.3838C11.4739 17.1806 12.7135 17.1806 13.4107 16.3838L18.9325 10.0731C19.6397 9.2649 19.0657 8 17.9918 8H6.19555Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretDownFilled
