import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHomeFilled = ({
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
        d="M10.5492 2.53318C11.3872 1.82618 12.6128 1.82618 13.4508 2.53318L20.2008 8.22772C20.7076 8.65523 21 9.28447 21 9.94747V19.7504C21 20.7169 20.2165 21.5004 19.25 21.5004H16.25C15.2835 21.5004 14.5 20.7169 14.5 19.7504V14.7504C14.5 14.3362 14.1642 14.0004 13.75 14.0004H10.25C9.83579 14.0004 9.5 14.3362 9.5 14.7504V19.7504C9.5 20.7169 8.7165 21.5004 7.75 21.5004H4.75C3.7835 21.5004 3 20.7169 3 19.7504V9.94747C3 9.28447 3.29241 8.65523 3.79916 8.22772L10.5492 2.53318Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconHomeFilled
