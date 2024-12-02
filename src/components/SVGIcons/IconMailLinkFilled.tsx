import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconMailLinkFilled = ({
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
        d="M23 6.75C23 4.67893 21.3211 3 19.25 3L19.1482 3.00685C18.7822 3.05651 18.5 3.3703 18.5 3.75C18.5 4.16421 18.8358 4.5 19.25 4.5L19.404 4.50519C20.5748 4.58435 21.5 5.55914 21.5 6.75C21.5 7.99264 20.4926 9 19.25 9L19.2466 9.0046L19.1448 9.01191C18.779 9.06326 18.4983 9.37834 18.5 9.75803C18.5019 10.1722 18.8392 10.5065 19.2534 10.5046V10.5L19.4523 10.4948C21.4276 10.3913 23 8.75426 23 6.75ZM16.5 3.75C16.5 3.33579 16.1642 3 15.75 3L15.5508 3.0052C13.5724 3.10873 12 4.74574 12 6.75C12 8.82107 13.6789 10.5 15.75 10.5L15.8518 10.4932C16.2178 10.4435 16.5 10.1297 16.5 9.75C16.5 9.33579 16.1642 9 15.75 9L15.596 8.99481C14.4252 8.91565 13.5 7.94086 13.5 6.75C13.5 5.50736 14.5074 4.5 15.75 4.5L15.8518 4.49315C16.2178 4.44349 16.5 4.1297 16.5 3.75ZM20 6.75C20 6.33579 19.6642 6 19.25 6H15.75L15.6482 6.00685C15.2822 6.05651 15 6.3703 15 6.75C15 7.16421 15.3358 7.5 15.75 7.5H19.25L19.3518 7.49315C19.7178 7.44349 20 7.1297 20 6.75ZM19.25 11.5H16.4796L12.348 13.6644C12.13 13.7785 11.87 13.7785 11.652 13.6644L2 8.608V16.75L2.00514 16.9344C2.10075 18.6435 3.51697 20 5.25 20H18.75L18.9344 19.9949C20.6435 19.8992 22 18.483 22 16.75V10.6234C21.2239 11.1754 20.2749 11.5 19.25 11.5ZM5.25 4H11.8766C11.3246 4.77607 11 5.72513 11 6.75C11 8.73004 12.2115 10.4271 13.9337 11.1404L12 12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconMailLinkFilled