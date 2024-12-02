import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCaretUp = ({
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
      d="M5.25483 14.9083C4.54762 15.7165 5.1216 16.9814 6.19555 16.9814H17.9918C19.0657 16.9814 19.6397 15.7165 18.9325 14.9083L13.4107 8.59765C12.7135 7.80083 11.4739 7.80083 10.7767 8.59765L5.25483 14.9083ZM6.74649 15.4814L11.9055 9.58541C12.0051 9.47158 12.1822 9.47158 12.2818 9.58541L17.4408 15.4814H6.74649Z"
      fill="#222222"
    />
  </svg>
)

export default IconCaretUp
