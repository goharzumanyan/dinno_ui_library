import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronUpDownFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M19.259 8.3871C19.5641 8.77939 19.5363 9.34662 19.1759 9.70711C18.7853 10.0976 18.1522 10.0976 17.7616 9.70711L12.4688 4.41421L7.17586 9.70711L7.08165 9.79029C6.68936 10.0953 6.12213 10.0676 5.76164 9.70711C5.37112 9.31658 5.37112 8.68342 5.76164 8.29289L11.7616 2.29289L11.8559 2.2097C12.2481 1.90468 12.8154 1.93241 13.1759 2.29289L19.1759 8.29289L19.259 8.3871ZM5.67846 15.6129C5.37343 15.2206 5.40116 14.6534 5.76164 14.2929C6.15217 13.9024 6.78533 13.9024 7.17586 14.2929L12.4688 19.5858L17.7616 14.2929L17.8558 14.2097C18.2481 13.9047 18.8154 13.9324 19.1759 14.2929C19.5664 14.6834 19.5664 15.3166 19.1759 15.7071L13.1759 21.7071L13.0816 21.7903C12.6894 22.0953 12.1221 22.0676 11.7616 21.7071L5.76164 15.7071L5.67846 15.6129Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconChevronUpDownFilled
