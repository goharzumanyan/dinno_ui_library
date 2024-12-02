import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSelectAllOffFilled = ({
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
    <g id="State=Off, Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M20.4962 5.62668C21.3721 5.93448 22 6.76891 22 7.75V17.75C22 20.0972 20.0972 22 17.75 22H7.75C6.76891 22 5.93448 21.3721 5.62668 20.4962L7.72396 20.4996L17.75 20.5C19.2688 20.5 20.5 19.2688 20.5 17.75V7.75L20.496 7.69902L20.4962 5.62668ZM17.2468 2C18.4895 2 19.4968 3.00736 19.4968 4.25V17.2468C19.4968 18.4895 18.4895 19.4968 17.2468 19.4968H4.25C3.00736 19.4968 2 18.4895 2 17.2468V4.25C2 3.00736 3.00736 2 4.25 2H17.2468Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSelectAllOffFilled
