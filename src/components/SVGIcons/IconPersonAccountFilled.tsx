import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPersonAccountFilled = ({
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
      d="M13 14.0503V14.0002H4.25278C3.01076 14.0002 2.00391 15.007 2.00391 16.2491V17.169C2.00391 17.7411 2.18231 18.2989 2.51427 18.7648C4.05643 20.9292 6.5794 22.0013 10.0004 22.0013C10.3578 22.0013 10.7055 21.9896 11.0433 21.9662C11.0149 21.8152 11 21.6595 11 21.5002V16.5003C11 15.2908 11.8589 14.2819 13 14.0503ZM10.0004 2.00488C12.7618 2.00488 15.0004 4.24346 15.0004 7.00488C15.0004 9.76631 12.7618 12.0049 10.0004 12.0049C7.23894 12.0049 5.00036 9.76631 5.00036 7.00488C5.00036 4.24346 7.23894 2.00488 10.0004 2.00488ZM14 15.0003H13.5C12.6716 15.0003 12 15.6719 12 16.5003V21.5002C12 22.3287 12.6716 23.0002 13.5 23.0002H21.5C22.3284 23.0002 23 22.3287 23 21.5002V16.5003C23 15.6719 22.3284 15.0003 21.5 15.0003H21V13.7502C21 12.7837 20.2165 12.0002 19.25 12.0002H15.75C14.7835 12.0002 14 12.7837 14 13.7502V15.0003ZM15.5 13.7502C15.5 13.6122 15.6119 13.5002 15.75 13.5002H19.25C19.3881 13.5002 19.5 13.6122 19.5 13.7502V15.0003H15.5V13.7502Z"
      fill="#222222"
    />
  </svg>
)

export default IconPersonAccountFilled
