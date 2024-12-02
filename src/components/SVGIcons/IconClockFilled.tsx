import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconClockFilled = ({
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
        d="M15.2969 13.5H11.2969C10.8829 13.5 10.5469 13.164 10.5469 12.75V6.75C10.5469 6.336 10.8829 6 11.2969 6C11.7109 6 12.0469 6.336 12.0469 6.75V12H15.2969C15.7109 12 16.0469 12.336 16.0469 12.75C16.0469 13.164 15.7109 13.5 15.2969 13.5ZM12.0469 2C6.52488 2 2.04688 6.478 2.04688 12C2.04688 17.522 6.52488 22 12.0469 22C17.5689 22 22.0469 17.522 22.0469 12C22.0469 6.478 17.5689 2 12.0469 2Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconClockFilled
