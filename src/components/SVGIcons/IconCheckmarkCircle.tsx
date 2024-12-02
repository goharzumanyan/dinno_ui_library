import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCheckmarkCircle = ({
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
      d="M12.9375 2C18.4603 2 22.9375 6.47715 22.9375 12C22.9375 17.5228 18.4603 22 12.9375 22C7.41465 22 2.9375 17.5228 2.9375 12C2.9375 6.47715 7.41465 2 12.9375 2ZM12.9375 3.5C8.24308 3.5 4.4375 7.30558 4.4375 12C4.4375 16.6944 8.24308 20.5 12.9375 20.5C17.6319 20.5 21.4375 16.6944 21.4375 12C21.4375 7.30558 17.6319 3.5 12.9375 3.5ZM11.6875 13.4393L16.1572 8.96967C16.4501 8.67678 16.9249 8.67678 17.2178 8.96967C17.4841 9.23594 17.5083 9.6526 17.2904 9.94621L17.2178 10.0303L12.2178 15.0303C11.9516 15.2966 11.5349 15.3208 11.2413 15.1029L11.1572 15.0303L8.65717 12.5303C8.36428 12.2374 8.36428 11.7626 8.65717 11.4697C8.92344 11.2034 9.3401 11.1792 9.63371 11.3971L9.71783 11.4697L11.6875 13.4393L16.1572 8.96967L11.6875 13.4393Z"
      fill="#222222"
    />
  </svg>
)

export default IconCheckmarkCircle
