import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAttach = ({
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
        d="M11.7712 3.74358C14.1127 1.4 17.9117 1.4 20.2548 3.74314C22.5379 6.02621 22.5964 9.69142 20.4304 12.0454L20.2423 12.2427L11.4422 21.0409L11.4057 21.0712C9.94443 22.3879 7.69043 22.3432 6.28306 20.9358C4.96404 19.6168 4.84193 17.5541 5.91671 16.0974C5.94005 16.0521 5.9683 16.0083 6.00152 15.9672L6.05507 15.9075L6.14198 15.8198L6.28306 15.6719L6.28598 15.6748L13.7217 8.22047C13.9876 7.95385 14.4043 7.92909 14.6982 8.14656L14.7824 8.21906C15.049 8.48497 15.0738 8.9016 14.8563 9.19551L14.7838 9.27972L7.18917 16.8928C6.47153 17.7684 6.52141 19.0627 7.33881 19.8801C8.16787 20.7091 9.48752 20.7486 10.3633 19.9985L19.196 11.1681C20.9515 9.41041 20.9515 6.56116 19.1941 4.8038C17.4917 3.10136 14.7646 3.04816 12.9981 4.6442L12.8302 4.8038L12.8176 4.81812L3.28131 14.3544C2.98841 14.6473 2.51354 14.6473 2.22065 14.3544C1.95438 14.0882 1.93017 13.6715 2.14803 13.3779L2.22065 13.2938L11.7695 3.74314L11.7712 3.74358Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconAttach
