import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCalendarLeftFilled = ({
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
      d="M3.35938 8.5V17.75C3.35938 19.5449 4.81445 21 6.60938 21H18.1094C19.9043 21 21.3594 19.5449 21.3594 17.75V8.5H3.35938ZM17.1094 15C17.7997 15 18.3594 15.5596 18.3594 16.25C18.3594 16.9404 17.7997 17.5 17.1094 17.5C16.419 17.5 15.8594 16.9404 15.8594 16.25C15.8594 15.5596 16.419 15 17.1094 15ZM12.3594 15C13.0497 15 13.6094 15.5596 13.6094 16.25C13.6094 16.9404 13.0497 17.5 12.3594 17.5C11.669 17.5 11.1094 16.9404 11.1094 16.25C11.1094 15.5596 11.669 15 12.3594 15ZM17.1094 10.5C17.7997 10.5 18.3594 11.0596 18.3594 11.75C18.3594 12.4404 17.7997 13 17.1094 13C16.419 13 15.8594 12.4404 15.8594 11.75C15.8594 11.0596 16.419 10.5 17.1094 10.5ZM12.3594 10.5C13.0497 10.5 13.6094 11.0596 13.6094 11.75C13.6094 12.4404 13.0497 13 12.3594 13C11.669 13 11.1094 12.4404 11.1094 11.75C11.1094 11.0596 11.669 10.5 12.3594 10.5ZM7.60938 10.5C8.29973 10.5 8.85938 11.0596 8.85938 11.75C8.85938 12.4404 8.29973 13 7.60938 13C6.91902 13 6.35938 12.4404 6.35938 11.75C6.35938 11.0596 6.91902 10.5 7.60938 10.5ZM6.60938 3C4.81445 3 3.35938 4.45507 3.35938 6.25V7H21.3594V6.25C21.3594 4.45507 19.9043 3 18.1094 3H6.60938Z"
      fill="#222222"
    />
  </svg>
)

export default IconCalendarLeftFilled
