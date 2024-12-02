import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowEnterFilled = ({
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
      d="M9.30019 21C8.80314 21 8.4002 20.5971 8.4002 20.1C8.4002 19.6029 8.80314 19.2 9.30019 19.2H16.8002C18.1257 19.2 19.2002 18.1255 19.2002 16.8V7.2C19.2002 5.87452 18.1257 4.8 16.8002 4.8H9.30019C8.80314 4.8 8.4002 4.39706 8.4002 3.9C8.4002 3.40294 8.80314 3 9.30019 3H16.8002C19.1198 3 21.0002 4.8804 21.0002 7.2V16.8C21.0002 19.1196 19.1198 21 16.8002 21H9.30019ZM9.28974 7.43868C9.65498 7.10154 10.2244 7.12431 10.5615 7.48955L14.1615 11.3896C14.4798 11.7343 14.4798 12.2657 14.1615 12.6105L10.5615 16.5105C10.2244 16.8757 9.65498 16.8985 9.28974 16.5613C8.9245 16.2242 8.90173 15.6548 9.23887 15.2896L11.4446 12.9H2.1002C1.60314 12.9 1.2002 12.4971 1.2002 12C1.2002 11.5029 1.60314 11.1 2.1002 11.1H11.4446L9.23887 8.71046C8.90173 8.34522 8.9245 7.77583 9.28974 7.43868Z"
      fill="#222222"
    />
  </svg>
)

export default IconArrowEnterFilled
