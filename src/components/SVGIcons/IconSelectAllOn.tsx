import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconSelectAllOn = ({
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
    <g id="State=On, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M20.4962 5.62668C21.3721 5.93448 22 6.76891 22 7.75V17.75C22 20.0972 20.0972 22 17.75 22H7.75C6.76891 22 5.93448 21.3721 5.62668 20.4962L7.72396 20.4996L17.75 20.5C19.2688 20.5 20.5 19.2688 20.5 17.75V7.75L20.496 7.69902L20.4962 5.62668ZM17.2468 2C18.4895 2 19.4968 3.00736 19.4968 4.25V17.2468C19.4968 18.4895 18.4895 19.4968 17.2468 19.4968H4.25C3.00736 19.4968 2 18.4895 2 17.2468V4.25C2 3.00736 3.00736 2 4.25 2H17.2468ZM17.2468 3.5H4.25C3.83579 3.5 3.5 3.83579 3.5 4.25V17.2468C3.5 17.661 3.83579 17.9968 4.25 17.9968H17.2468C17.661 17.9968 17.9968 17.661 17.9968 17.2468V4.25C17.9968 3.83579 17.661 3.5 17.2468 3.5ZM9.58115 11.3582L13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967C14.7966 7.73594 14.8208 8.1526 14.6029 8.44621L14.5303 8.53033L10.0303 13.0303C9.73449 13.3262 9.26134 13.3189 8.9736 13.0344L8.9 12.95L7.4 10.95C7.15147 10.6186 7.21863 10.1485 7.55 9.9C7.85125 9.67407 8.26715 9.70903 8.527 9.96622L8.6 10.05L9.58115 11.3582L13.4697 7.46967L9.58115 11.3582Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconSelectAllOn