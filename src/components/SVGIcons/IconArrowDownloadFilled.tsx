import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowDownloadFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M5.25 20.5H18.7477C19.1619 20.5 19.4977 20.8358 19.4977 21.25C19.4977 21.6297 19.2155 21.9435 18.8494 21.9932L18.7477 22H5.25C4.83579 22 4.5 21.6642 4.5 21.25C4.5 20.8703 4.78215 20.5565 5.14823 20.5069L5.25 20.5H18.7477H5.25ZM11.8834 2.00233L12 1.99561C12.5128 1.99561 12.9355 2.38165 12.9933 2.87898L13 2.99561V15.5856L16.2941 12.2928C16.6546 11.9324 17.2218 11.9047 17.6141 12.2098L17.7083 12.293C18.0687 12.6535 18.0964 13.2207 17.7913 13.613L17.7081 13.7072L12.7105 18.7038C12.3502 19.064 11.7833 19.0919 11.391 18.7873L11.2968 18.7042L6.29338 13.7076C5.90259 13.3173 5.90215 12.6842 6.29241 12.2934C6.65265 11.9327 7.21986 11.9045 7.61236 12.2093L7.70662 12.2924L11 15.5806V2.99561C11 2.48277 11.386 2.0601 11.8834 2.00233L12 1.99561L11.8834 2.00233Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowDownloadFilled
