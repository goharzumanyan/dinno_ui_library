import type { ReactElement } from 'react'
import React from 'react'
import { Chips } from '../../Chips'
import type { TChipsProps } from '../../Chips/types'

interface TCardChips {
  chips: TChipsProps[]
  disabled?: boolean
}
export const CardChips = (props: TCardChips): ReactElement => {
  const { chips, disabled } = props
  return (
    <div>
      {chips.map((chip) => (
        <Chips
          {...chip}
          key={chip.id}
          disabled={disabled}
          className={'mt-8 mr-8'}
          onClick={chip.onClick}
          withAction={chip.withAction}
        />
      ))}
    </div>
  )
}
