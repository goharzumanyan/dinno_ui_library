import type { TBadgeProps } from '../Badge/types'

export type TTabItem = {
  value: number | string
  label: string | JSX.Element
  dataId?: string
  disabled?: boolean
  badgeProps?: TBadgeProps
  iconProps?: {
    alignment?: string
    Component?: TSVGIconComponent
  }
  rightIconProps?: {
    name?: string
    alignment?: string
    action?: (value: string | number) => void
    Component?: TSVGIconComponent
  }
}
export interface TTabProps extends IFormCompProps {
  tabItems: TTabItem[]
  type?: 'primary' | 'secondary'
  size?: 'large' | 'medium' | 'small'
  className?: string
  disabled?: boolean
  selectedValue: number | string
  onSelect: (value: string | number) => void
}

export type TTabItemProps = {
  dataId?: string
  label?: string | JSX.Element
  size?: 'large' | 'medium' | 'small'
  className?: string
  iconProps?: {
    name?: string
    alignment?: string
    Component?: TSVGIconComponent
  }
  rightIconProps?: {
    name?: string
    alignment?: string
    action?: (value: string | number) => void
    Component?: TSVGIconComponent
  }
  badgeProps?: TBadgeProps
  val: string | number
  disabled?: boolean
  isSelected: boolean
  onClick: () => void
}
