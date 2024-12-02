import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPhone = ({
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
    <g id="Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M15.7441 2C16.9868 2 17.9941 3.00736 17.9941 4.25V19.75C17.9941 20.9926 16.9868 22 15.7441 22H8.24414C7.0015 22 5.99414 20.9926 5.99414 19.75V4.25C5.99414 3.00736 7.0015 2 8.24414 2H15.7441ZM15.7441 3.5H8.24414C7.82993 3.5 7.49414 3.83579 7.49414 4.25V19.75C7.49414 20.1642 7.82993 20.5 8.24414 20.5H15.7441C16.1584 20.5 16.4941 20.1642 16.4941 19.75V4.25C16.4941 3.83579 16.1584 3.5 15.7441 3.5ZM13.243 17.5C13.6572 17.4994 13.9935 17.8347 13.9941 18.2489C13.9948 18.6631 13.6595 18.9994 13.2453 19L10.7453 19.0038C10.3311 19.0044 9.99476 18.6691 9.99414 18.2549C9.99352 17.8407 10.3288 17.5044 10.743 17.5038L13.243 17.5Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconPhone
