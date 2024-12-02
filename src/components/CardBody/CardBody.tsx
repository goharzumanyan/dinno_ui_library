import React from 'react'
import { Text } from '../Text'
import { Image } from '../Image'
import { Button } from '../Button'
import type { TCardBodyProps } from './types'
import classNames from 'classnames'

export const CardBody = (props: TCardBodyProps): JSX.Element => {
  const { title, description, buttonProps, className, illustration } = props

  return (
    <div className={classNames('card-body', className)}>
      <div className={'card-body__image'}>
        <Image imagePath={illustration} />
      </div>
      <Text size={'large'} weight="bolder" className={'mt-32'}>
        {title}
      </Text>
      {description ? <Text className={'mt-12'}>{description}</Text> : null}
      {buttonProps ? (
        <div className="body__buttons mt-32">
          <Button className="full-width" {...(buttonProps.primary || {})} />
          <Button type="text" className="full-width mt-24" {...buttonProps.secondary} />
        </div>
      ) : null}
    </div>
  )
}
