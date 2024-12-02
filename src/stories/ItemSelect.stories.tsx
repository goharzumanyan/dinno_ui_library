import React, { useState } from 'react'
import { ItemSelectGroup as _ItemSelectGroup } from '../components/ItemSelect'
import { ItemSelect as _ItemSelect } from '../components/ItemSelect'
import imageFile1 from '../assets/images/ArCa.svg'
import imageFile2 from '../assets/images/Mastercard.svg'
import imageFile3 from '../assets/images/Visa.svg'
import IconCheckmark from '../components/SVGIcons/IconCheckmark'
import IconAmd from '../components/SVGIcons/IconAmd'
import { TItemSelectGroupProps, TItemSelectProps } from '../components/ItemSelect/types'
import { StoryFn } from '@storybook/react'
import IconQuestion from '../components/SVGIcons/IconQuestion'

export default {
  title: 'ItemSelect',
  component: _ItemSelectGroup
}

const ITEMS = [
  {
    value: 1,
    image: imageFile1,
    label: 'Arca',
    disabled: false,
    onClick: (e: any) => {
      console.log(e)
    },
    deSelectable: false
  },
  {
    value: 2,
    image: imageFile2,
    label: 'MasterCard',
    disabled: true,
    onClick: (e: any) => {
      console.log(e)
    },
    deSelectable: true
  },
  {
    value: 3,
    image: imageFile3,
    label: 'Visa',
    disabled: false,
    onClick: (e: any) => {
      console.log(e)
    },
    deSelectable: true
  }
]

const Template: StoryFn<TItemSelectProps> = (args) => {
  return (
    <div style={{ width: '50%' }}>
      <_ItemSelect {...args} />
    </div>
  )
}

export const ItemSelect = Template.bind({})

ItemSelect.args = {
  leftIconProps: <IconAmd size={'small'} />,
  icon: {
    Component: IconQuestion
  },
  // image: '',
  label: 'Item Select',
  disabled: false,
  deSelectable: true
  // value: null,
}

const ItemSelectGroupTemplate: StoryFn<TItemSelectGroupProps> = (args) => {
  const [selected, setSelected] = useState<number | string | null>(1)

  const handleChange = (value: number | string) => {
    if (value === selected) {
      setSelected(null)
    } else {
      setSelected(value)
    }
  }

  return (
    <div style={{ width: '50%' }}>
      <_ItemSelectGroup {...args} items={ITEMS} value={selected!} handleChange={handleChange} />
    </div>
  )
}

export const ItemSelectGroup = ItemSelectGroupTemplate.bind({})

ItemSelectGroup.args = {
  isHorizontal: false,
  iconGroup: {
    Component: IconCheckmark
  }
}
