import type { TSVGIconType } from '../SVGIcons/types'

export interface LinkPropTypes {
  children?: string | JSX.Element
  className?: string
  url?: string
  dataId?: string
  target?: string
  beforeLink?: string | JSX.Element
  afterLink?: string | JSX.Element
  onclick?: () => void
  iconProps?: {
    size?: TIconSize
    type?: TSVGIconType
    alignment?: string
    Component?: TSVGIconComponent
  }
}
