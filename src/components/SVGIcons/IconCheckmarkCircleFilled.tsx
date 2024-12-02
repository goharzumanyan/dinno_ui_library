import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCheckmarkCircleFilled = ({
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
      d="M12.9375 2C18.4603 2 22.9375 6.47715 22.9375 12C22.9375 17.5228 18.4603 22 12.9375 22C7.41465 22 2.9375 17.5228 2.9375 12C2.9375 6.47715 7.41465 2 12.9375 2ZM16.1572 8.96967L11.6875 13.4393L9.71783 11.4697C9.42494 11.1768 8.95006 11.1768 8.65717 11.4697C8.36428 11.7626 8.36428 12.2374 8.65717 12.5303L11.1572 15.0303C11.4501 15.3232 11.9249 15.3232 12.2178 15.0303L17.2178 10.0303C17.5107 9.73744 17.5107 9.26256 17.2178 8.96967C16.9249 8.67678 16.4501 8.67678 16.1572 8.96967Z"
      fill="#222222"
    />
  </svg>
)

export default IconCheckmarkCircleFilled
