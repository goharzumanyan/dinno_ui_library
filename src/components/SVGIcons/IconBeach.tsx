import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconBeach = ({
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
      d="M9.35048 5.32144C11.2144 2.09296 15.3427 0.986807 18.5712 2.85077C21.7996 4.71473 22.9058 8.84296 21.0418 12.0714L20.7918 12.5045C20.5847 12.8632 20.126 12.9861 19.7673 12.779L15.2086 10.147L12.8357 14.2995C14.7406 14.525 16.4252 15.5093 17.6787 16.9141C17.1534 16.9994 16.6869 17.2909 16.3793 17.7161C15.2141 16.5078 13.6661 15.7503 12 15.7503C10.3339 15.7503 8.78594 16.5078 7.62074 17.7161C7.31271 17.2903 6.84569 16.9992 6.32132 16.914C7.56154 15.5241 9.22374 14.5459 11.1038 14.3069L13.9095 9.39697L9.375 6.77897C9.01628 6.57186 8.89337 6.11317 9.10048 5.75445L9.35048 5.32144ZM10.7796 5.85786L12.7456 6.99293C13.2797 6.17401 13.8198 5.49998 14.4891 4.89141C15.0146 4.41354 15.6067 3.98805 16.3152 3.56564C14.22 3.10815 11.9869 3.97619 10.7796 5.85786ZM16.5896 9.21228C17.1442 8.21522 17.4101 7.42287 17.5058 6.65729C17.5834 6.03611 17.5534 5.40152 17.4418 4.64661C16.6236 5.10695 16.0124 5.53366 15.4982 6.00122C14.9653 6.48581 14.5165 7.03232 14.0468 7.74416L16.5896 9.21228ZM17.8888 9.96236L19.8627 11.102C20.9059 9.08223 20.5111 6.66785 19.0063 5.08258C19.063 5.68104 19.0673 6.25857 18.9942 6.84334C18.868 7.85306 18.518 8.83567 17.8888 9.96236ZM6.71405 18.6587C6.61104 18.3382 6.30703 18.1256 5.97059 18.1388C5.63415 18.152 5.34774 18.3878 5.27018 18.7154C5.05935 19.606 4.66338 20.0789 4.22869 20.3495C3.76977 20.6351 3.1784 20.7502 2.5 20.7502C2.08579 20.7502 1.75 21.086 1.75 21.5002C1.75 21.9145 2.08579 22.2502 2.5 22.2502C3.3216 22.2502 4.23023 22.1154 5.02131 21.623C5.4339 21.3662 5.79237 21.026 6.08332 20.5943C7.63479 22.4601 10.4928 22.4507 12 20.5653C13.5336 22.4838 16.4661 22.4599 17.9973 20.4942C18.8448 21.6033 20.1675 22.2502 21.5 22.2502C21.9142 22.2502 22.25 21.9145 22.25 21.5002C22.25 21.086 21.9142 20.7502 21.5 20.7502C20.3169 20.7502 19.1155 19.9531 18.7163 18.666C18.6194 18.3535 18.331 18.1399 18.0038 18.1382C17.6766 18.1365 17.3861 18.3472 17.286 18.6587C16.502 21.0984 13.4764 21.0578 12.7115 18.7631C12.6094 18.4568 12.3228 18.2502 12 18.2502C11.6772 18.2502 11.3906 18.4568 11.2885 18.7631C10.5236 21.0578 7.49798 21.0984 6.71405 18.6587Z"
      fill="#222222"
    />
  </svg>
)

export default IconBeach
