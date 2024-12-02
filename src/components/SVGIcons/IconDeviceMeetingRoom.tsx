import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconDeviceMeetingRoom = ({
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
      d="M7.06943 3C5.65417 3 4.42324 3.96976 4.09199 5.34571L2.10025 13.6191C1.56269 15.8521 3.2549 18 5.55164 18H18.4435C20.7403 18 22.4325 15.8521 21.8949 13.6191L19.9032 5.34571C19.5719 3.96976 18.341 3 16.9257 3H7.06943ZM5.55033 5.69679C5.71933 4.99478 6.34736 4.5 7.06943 4.5H16.9257C17.6478 4.5 18.2758 4.99478 18.4448 5.69679L20.4366 13.9702C20.747 15.2596 19.7698 16.5 18.4435 16.5H5.55164C4.22535 16.5 3.24816 15.2596 3.55859 13.9702L5.55033 5.69679ZM6.74756 19C6.33334 19 5.99756 19.3358 5.99756 19.75C5.99756 20.1642 6.33334 20.5 6.74756 20.5H17.2476C17.6618 20.5 17.9976 20.1642 17.9976 19.75C17.9976 19.3358 17.6618 19 17.2476 19H6.74756Z"
      fill="#222222"
    />
  </svg>
)

export default IconDeviceMeetingRoom
