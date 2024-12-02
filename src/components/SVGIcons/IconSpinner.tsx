import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSpinner = ({
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
        d="M12.0004 3.5999C7.3612 3.5999 3.60039 7.36071 3.60039 11.9999C3.60039 12.3313 3.33176 12.5999 3.00039 12.5999C2.66902 12.5999 2.40039 12.3313 2.40039 11.9999C2.40039 6.69797 6.69846 2.3999 12.0004 2.3999C17.3023 2.3999 21.6004 6.69797 21.6004 11.9999C21.6004 17.3018 17.3023 21.5999 12.0004 21.5999C11.669 21.5999 11.4004 21.3313 11.4004 20.9999C11.4004 20.6685 11.669 20.3999 12.0004 20.3999C16.6396 20.3999 20.4004 16.6391 20.4004 11.9999C20.4004 7.36071 16.6396 3.5999 12.0004 3.5999Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSpinner
