import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconStatusFilled = ({
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
        d="M12 2.9999C13.2477 2.9999 14.4361 3.25379 15.5163 3.71272L14.3609 4.87905C13.6186 4.63306 12.8249 4.4999 12 4.4999C7.85786 4.4999 4.5 7.85777 4.5 11.9999C4.5 13.4248 4.89727 14.7892 5.63583 15.9703C5.93764 16.4529 6.29368 16.9001 6.69639 17.3029C7.09848 17.705 7.5449 18.0607 8.02668 18.3622C9.20844 19.102 10.5739 19.4999 12 19.4999C16.1421 19.4999 19.5 16.142 19.5 11.9999C19.5 11.1995 19.3746 10.4283 19.1424 9.70506L20.3069 8.5304C20.7534 9.59813 21 10.7702 21 11.9999C21 16.9705 16.9706 20.9999 12 20.9999C10.2904 20.9999 8.64945 20.5217 7.23081 19.6337C6.65294 19.272 6.1177 18.8456 5.63566 18.3635C5.1529 17.8807 4.72601 17.3445 4.36401 16.7656C3.4774 15.3477 3 13.7081 3 11.9999C3 7.02934 7.02944 2.9999 12 2.9999ZM21.1626 2.5729L21.3013 2.70116C22.2387 3.6385 22.2421 5.15719 21.3089 6.09872L14.554 12.9144C14.4397 13.0297 14.2991 13.1154 14.1443 13.1642L9.79631 14.5345C9.69096 14.5677 9.57864 14.5092 9.54544 14.4038C9.53311 14.3647 9.53311 14.3227 9.54544 14.2836L10.9171 9.93109C10.965 9.77917 11.0485 9.64087 11.1606 9.52773L17.9189 2.70872C18.8045 1.81517 20.2215 1.76839 21.1626 2.5729Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconStatusFilled
