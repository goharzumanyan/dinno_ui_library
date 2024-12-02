import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNavigation = ({
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
    <g id="Theme=Line">
      <path
        id="Shape"
        d="M2.75086 17.9968H21.2509C21.6651 17.9968 22.0009 18.3325 22.0009 18.7468C22.0009 19.1265 21.7187 19.4403 21.3526 19.4899L21.2509 19.4968H2.75086C2.33665 19.4968 2.00086 19.161 2.00086 18.7468C2.00086 18.3671 2.28301 18.0533 2.64909 18.0036L2.75086 17.9968H21.2509H2.75086ZM2.75086 11.4998H21.2509C21.6651 11.4998 22.0009 11.8356 22.0009 12.2498C22.0009 12.6295 21.7187 12.9433 21.3526 12.9929L21.2509 12.9998H2.75086C2.33665 12.9998 2.00086 12.664 2.00086 12.2498C2.00086 11.8701 2.28301 11.5563 2.64909 11.5066L2.75086 11.4998H21.2509H2.75086ZM2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.1297 21.7178 6.44349 21.3518 6.49315L21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.3703 2.28215 5.05651 2.64823 5.00685L2.75 5H21.25H2.75Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconNavigation
