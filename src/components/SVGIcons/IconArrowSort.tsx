import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowSort = ({
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
      d="M17.2509 4L17.1491 4.00685C16.783 4.05651 16.5009 4.3703 16.5009 4.75L16.5 17.442L13.2801 14.2244L13.196 14.1518C12.9023 13.9341 12.4856 13.9585 12.2194 14.2248C11.9267 14.5179 11.9269 14.9927 12.2199 15.2855L16.7237 19.7855L16.8078 19.8581C17.1015 20.0758 17.5182 20.0514 17.7843 19.7851L22.2806 15.2851L22.3531 15.2009C22.5709 14.9072 22.5465 14.4905 22.2801 14.2244L22.196 14.1518C21.9023 13.9341 21.4856 13.9585 21.2194 14.2248L18 17.446L18.0009 4.75L17.994 4.64823C17.9444 4.28215 17.6306 4 17.2509 4ZM6.21441 4.21969L1.71965 8.71474L1.64704 8.79886C1.42919 9.09248 1.45341 9.50914 1.71969 9.7754L1.80381 9.84802C2.09743 10.0659 2.51409 10.0416 2.78035 9.77537L5.997 6.55711L5.99766 19.2549L6.00451 19.3567C6.05417 19.7228 6.36797 20.0049 6.74766 20.0049L6.84943 19.9981C7.21551 19.9484 7.49766 19.6346 7.49766 19.2549L7.497 6.55911L10.7199 9.77596L10.8041 9.84849C11.0979 10.066 11.5145 10.0414 11.7805 9.77481C12.0731 9.4816 12.0726 9.00672 11.7794 8.71415L7.27451 4.21909L7.19038 4.14661C6.89676 3.9292 6.48047 3.95361 6.21441 4.21969Z"
      fill="#222222"
    />
  </svg>
)

export default IconArrowSort