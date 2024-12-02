import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconCallFilled = ({
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
        d="M8.44362 2.43899L9.52022 2.09498C10.529 1.77263 11.6069 2.29358 12.0389 3.31232L12.8986 5.33967C13.2733 6.22312 13.0654 7.26203 12.3847 7.90815L10.4903 9.70616C10.6072 10.7816 10.9687 11.8406 11.5749 12.8832C12.181 13.9257 12.938 14.7905 13.8459 15.4776L16.1211 14.7189C16.9835 14.4313 17.9227 14.7618 18.4517 15.539L19.6841 17.3495C20.299 18.2529 20.1884 19.4993 19.4254 20.2653L18.6077 21.0862C17.7937 21.9033 16.6312 22.1997 15.5558 21.8643C13.0169 21.0723 10.6826 18.7211 8.55286 14.8107C6.41999 10.8945 5.66724 7.57189 6.29461 4.84289C6.55861 3.69457 7.37612 2.78009 8.44362 2.43899Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconCallFilled
