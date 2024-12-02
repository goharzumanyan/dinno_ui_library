import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconUndoFilled = ({
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
        d="M6.90735 6.68009L9.64108 3.9514C12.2423 1.35018 16.4597 1.35018 19.0609 3.9514C21.6621 6.55262 21.6621 10.77 19.0609 13.3713L10.7225 21.7082C10.3319 22.0987 9.69877 22.0985 9.30825 21.708C8.91772 21.3175 8.91789 20.6842 9.30848 20.2938L17.6467 11.957C19.4669 10.1369 19.4669 7.18579 17.6467 5.36562C15.8834 3.60233 13.0588 3.54722 11.2286 5.2009L11.0546 5.36627L7.414 8.99949L12 9.00002C12.5128 9.00002 12.9355 9.38606 12.9933 9.8834L13 10C13 10.5129 12.614 10.9355 12.1166 10.9933L12 11L4.94043 10.9983L4.84501 10.9881L4.73315 10.964L4.60163 10.9175L4.51971 10.8773L4.41781 10.8132C4.37406 10.7819 4.33212 10.7464 4.29267 10.7069L4.20096 10.6015L4.12658 10.4875L4.08093 10.3948L4.0425 10.2891L4.027 10.2318L4.01127 10.1502L4.00394 10.089L4 10V3.00284C4 2.45055 4.44772 2.00284 5 2.00284C5.51284 2.00284 5.93551 2.38888 5.99327 2.88622L6 3.00284V7.58649L9.64108 3.9514L6.90735 6.68009Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconUndoFilled
