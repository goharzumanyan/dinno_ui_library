import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowExportLeftToRight = ({
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
    <g id="Direction=LTR, Size=24, Theme=Regular">
      <path
        id="Shape"
        d="M2.7525 4.5C3.1322 4.5 3.44594 4.78227 3.49554 5.14836L3.50237 5.25014L3.5 18.2542C3.49992 18.6684 3.16408 19.0041 2.74986 19.0041C2.37017 19.0041 2.05642 18.7218 2.00683 18.3557L2 18.2539L2.00237 5.24986C2.00244 4.83565 2.33829 4.5 2.7525 4.5ZM15.6471 6.30373L15.7197 6.21961C15.986 5.95338 16.4027 5.92921 16.6963 6.1471L16.7804 6.21972L21.777 11.2174C22.0431 11.4835 22.0674 11.8999 21.8498 12.1935L21.7773 12.2776L16.7807 17.2811C16.488 17.5742 16.0131 17.5745 15.72 17.2818C15.4536 17.0157 15.4291 16.5991 15.6467 16.3053L15.7193 16.2211L19.43 12.504L5.75295 12.5049C5.37326 12.5049 5.05946 12.2228 5.0098 11.8567L5.00295 11.7549C5.00295 11.3752 5.28511 11.0615 5.65118 11.0118L5.75295 11.0049L19.443 11.004L15.7196 7.28028C15.4534 7.01398 15.4292 6.59732 15.6471 6.30373L15.7197 6.21961L15.6471 6.30373Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowExportLeftToRight
