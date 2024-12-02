import type { ReactElement } from 'react'
import React from 'react'
import type { TextPropTypes } from './types'
import classNames from 'classnames'
import { noop } from '../../utils/helpers'

export const Text = (props: TextPropTypes): ReactElement => {
  const {
    children,
    className = '',
    type = 'primary',
    size = 'standard',
    weight = 'regular',
    lineHeight = 'medium',
    as: As = 'p',
    dataId = '',
    onClick = noop,
    id = '',
    title
  } = props
  return (
    <As
      id={id}
      title={title}
      data-id={dataId}
      onClick={onClick}
      className={classNames(
        'body',
        size && `body-${size}`,
        type && `color-${type}`,
        weight,
        lineHeight && `lh-${lineHeight}`,
        className
      )}
    >
      {children}
    </As>
  )
}
