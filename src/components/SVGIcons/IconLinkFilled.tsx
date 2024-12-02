import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconLinkFilled = ({
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
        d="M9 7C9.55228 7 10 7.44772 10 8C10 8.51284 9.61396 8.93551 9.11662 8.99327L9 9H7C5.34315 9 4 10.3431 4 12C4 13.5977 5.24892 14.9037 6.82373 14.9949L7 15H9C9.55228 15 10 15.4477 10 16C10 16.5128 9.61396 16.9355 9.11662 16.9933L9 17H7C4.23858 17 2 14.7614 2 12C2 9.31125 4.12231 7.11818 6.78311 7.00462L7 7H9ZM17 7C19.7614 7 22 9.23858 22 12C22 14.6888 19.8777 16.8818 17.2169 16.9954L17 17H15C14.4477 17 14 16.5523 14 16C14 15.4872 14.386 15.0645 14.8834 15.0067L15 15H17C18.6569 15 20 13.6569 20 12C20 10.4023 18.7511 9.09634 17.1763 9.00509L17 9H15C14.4477 9 14 8.55228 14 8C14 7.48716 14.386 7.06449 14.8834 7.00673L15 7H17ZM7 11H17C17.5523 11 18 11.4477 18 12C18 12.5128 17.614 12.9355 17.1166 12.9933L17 13H7C6.44772 13 6 12.5523 6 12C6 11.4872 6.38604 11.0645 6.88338 11.0067L7 11H17H7Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconLinkFilled
