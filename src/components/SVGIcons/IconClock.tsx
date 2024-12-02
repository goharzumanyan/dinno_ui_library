import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconClock = ({
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
        d="M12.0469 2C17.5699 2 22.0469 6.478 22.0469 12C22.0469 17.522 17.5699 22 12.0469 22C6.52388 22 2.04688 17.522 2.04688 12C2.04688 6.478 6.52388 2 12.0469 2ZM12.0469 3.667C7.45188 3.667 3.71388 7.405 3.71388 12C3.71388 16.595 7.45188 20.333 12.0469 20.333C16.6419 20.333 20.3799 16.595 20.3799 12C20.3799 7.405 16.6419 3.667 12.0469 3.667ZM11.2969 6C11.6764 6 11.9903 6.28233 12.04 6.64827L12.0469 6.75V12H15.2969C15.7109 12 16.0469 12.336 16.0469 12.75C16.0469 13.1295 15.7645 13.4435 15.3986 13.4931L15.2969 13.5H11.2969C10.9174 13.5 10.6034 13.2177 10.5537 12.8517L10.5469 12.75V6.75C10.5469 6.336 10.8829 6 11.2969 6Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconClock
