import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCard = ({
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
      d="M2.93359 8.25C2.93359 6.45507 4.38867 5 6.18359 5H19.6836C21.4785 5 22.9336 6.45507 22.9336 8.25V15.75C22.9336 17.5449 21.4785 19 19.6836 19H6.18359C4.38867 19 2.93359 17.5449 2.93359 15.75V8.25ZM21.4336 9.5V8.25C21.4336 7.2835 20.6501 6.5 19.6836 6.5H6.18359C5.2171 6.5 4.43359 7.2835 4.43359 8.25V9.5H21.4336ZM4.43359 11V15.75C4.43359 16.7165 5.2171 17.5 6.18359 17.5H19.6836C20.6501 17.5 21.4336 16.7165 21.4336 15.75V11H4.43359Z"
      fill="#222222"
    />
  </svg>
)

export default IconCard
