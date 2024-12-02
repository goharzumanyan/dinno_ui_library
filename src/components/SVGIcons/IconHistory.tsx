import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconHistory = ({
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
        d="M19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C10.0309 4.5 8.23907 5.25883 6.90093 6.5H8.25C8.66421 6.5 9 6.83579 9 7.25C9 7.66421 8.66421 8 8.25 8H5.25C4.83579 8 4.5 7.66421 4.5 7.25V4.25C4.5 3.83579 4.83579 3.5 5.25 3.5C5.66421 3.5 6 3.83579 6 4.25V5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 11.5317 3.03576 11.0718 3.10471 10.6228C3.161 10.2562 3.48623 10 3.85708 10C4.31609 10 4.64845 10.4382 4.58123 10.8923C4.52772 11.2538 4.5 11.6236 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V12.25C11 12.6642 11.3358 13 11.75 13H14.25C14.6642 13 15 12.6642 15 12.25C15 11.8358 14.6642 11.5 14.25 11.5H12.5V7.75Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconHistory
