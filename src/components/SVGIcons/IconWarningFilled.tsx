import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconWarningFilled = ({
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
      d="M10.0297 3.65893C10.8859 2.1111 13.1111 2.11108 13.9673 3.65888L21.7131 17.6603C22.5427 19.16 21.4581 20.9995 19.7443 20.9995H4.25323C2.53945 20.9995 1.45483 19.16 2.28438 17.6604L10.0297 3.65893ZM12.9973 17.0009C12.9973 16.4494 12.5502 16.0022 11.9987 16.0022C11.4471 16.0022 11 16.4494 11 17.0009C11 17.5524 11.4471 17.9996 11.9987 17.9996C12.5502 17.9996 12.9973 17.5524 12.9973 17.0009ZM12.7381 9.14764C12.6882 8.7816 12.3742 8.4997 11.9945 8.5C11.5802 8.50033 11.2447 8.83639 11.2451 9.2506L11.2487 13.7522L11.2556 13.854C11.3055 14.22 11.6196 14.5019 11.9993 14.5016C12.4135 14.5013 12.749 14.1652 12.7487 13.751L12.7451 9.2494L12.7381 9.14764Z"
      fill="#222222"
    />
  </svg>
)

export default IconWarningFilled
