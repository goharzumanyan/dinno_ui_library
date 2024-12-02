import { useEffect } from 'react'
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE, DROPDOWN_AND_INPUT_GAP } from '../consts'

export const useChangePositionsOnScroll = (
  parentElement: HTMLElement | null,
  childElement: HTMLElement | null,
  hasBottomSpace = true
): null => {
  const positionElement = () => {
    const elemDimensions = parentElement?.getBoundingClientRect()
    const childElementDimensions = childElement?.getBoundingClientRect()

    if (childElementDimensions && elemDimensions && childElement) {
      if (hasBottomSpace) {
        childElement.style.top = elemDimensions.bottom + 'px'
      } else {
        childElement.style.bottom =
          window.innerHeight - elemDimensions.top + DROPDOWN_AND_INPUT_GAP + 'px'
      }
    }
  }
  useEffect(() => {
    if (childElement) {
      window.addEventListener('scroll', positionElement)

      return () => {
        window.removeEventListener('scroll', positionElement)
      }
    }
  }, [positionElement])

  useEffect(() => {
    document.addEventListener(CUSTOM_SCROLL_NAME, (event: Event) => {
      const customEvent = event as CustomEvent<string>
      // Check the event type
      if (customEvent.detail === CUSTOM_SCROLL_MESSAGE) {
        positionElement()
      }
    })
  }, [positionElement])

  return null
}
