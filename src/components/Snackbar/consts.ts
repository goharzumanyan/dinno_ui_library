import type { TSVGIconType } from '../SVGIcons/types'

export const TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information'
}

export const ICONS_MAPPING: { [key: string]: string } = {
  warning: 'warningFilled',
  success: 'checkmarkCircleFilled',
  error: 'errorCircleFilled',
  information: 'infoFilled'
}

export const DEFAULT_DURATION = 6000
