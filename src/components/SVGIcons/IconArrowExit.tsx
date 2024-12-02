import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowExit = ({
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
      d="M15.0001 20.4001C15.3315 20.4001 15.6001 20.1315 15.6001 19.8001C15.6001 19.4687 15.3315 19.2001 15.0001 19.2001H7.2001C5.87461 19.2001 4.8001 18.1256 4.8001 16.8001V7.2001C4.8001 5.87461 5.87461 4.8001 7.2001 4.8001H15.0001C15.3315 4.8001 15.6001 4.53147 15.6001 4.2001C15.6001 3.86873 15.3315 3.6001 15.0001 3.6001H7.2001C5.21187 3.6001 3.6001 5.21187 3.6001 7.2001V16.8001C3.6001 18.7883 5.21187 20.4001 7.2001 20.4001H15.0001ZM16.3758 7.37583C16.6101 7.14152 16.99 7.14152 17.2244 7.37583L21.4244 11.5758C21.6587 11.8101 21.6587 12.19 21.4244 12.4244L17.2244 16.6244C16.99 16.8587 16.6101 16.8587 16.3758 16.6244C16.1415 16.39 16.1415 16.0101 16.3758 15.7758L19.5516 12.6001H9.0001C8.66873 12.6001 8.4001 12.3315 8.4001 12.0001C8.4001 11.6687 8.66873 11.4001 9.0001 11.4001H19.5516L16.3758 8.22436C16.1415 7.99005 16.1415 7.61015 16.3758 7.37583Z"
      fill="#222222"
    />
  </svg>
)

export default IconArrowExit
