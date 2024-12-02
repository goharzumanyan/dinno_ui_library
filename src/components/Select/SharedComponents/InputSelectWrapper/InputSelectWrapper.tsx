import type { ReactElement } from 'react'
import React, { useCallback, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { Input } from '../../../Input'
import {
  useGetElemSizes,
  useGetElemPositions,
  useGetHasBottomSpace,
  useGetHasTopSpace
} from '../../../../hooks'
import { getStringWidth, noop, setTranslationValue } from '../../../../utils/helpers'

import { useChangePositionsOnScroll } from '../../../../hooks/useChangePositionsOnScroll'
import { IconCaretDownFilled } from '../../../SVGIcons/IconCaretDownFilled'
import { IconCaretUpFilled } from '../../../SVGIcons/IconCaretUpFilled'
import type { TSelectWrapperProps } from '../../types'
import { DROPDOWN_AND_INPUT_GAP } from '../../../../consts'

export const InputSelectWrapper = (props: TSelectWrapperProps): ReactElement | null => {
  const {
    children,
    options,
    label,
    placeHolder,
    isRequiredField,
    labelAddons,
    disabled,
    className = '',
    dropdownWidth,
    align = 'left',
    size,
    dropdownRef,
    setDropdownRef,
    containerRef,
    setIsOpen,
    isOpen,
    selectedValues,
    setContainerRef,
    overflowText,
    hasError
  } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  const { width } = useGetElemSizes(containerRef)

  const checkIsValueOverflowed = useCallback(
    (value: string) => {
      const elemWidth = getStringWidth(value, 14)
      return elemWidth > width - 80 // padding and width of (+number)
    },
    [width]
  )

  const toggleDropdown = (e?: TClickEventType) => {
    const clickedElement = e?.target as HTMLDivElement
    const className = clickedElement?.getAttribute('class')
    if (
      e &&
      className &&
      (className.indexOf('icon-') !== -1 || className.indexOf('svg-icon') !== -1)
    ) {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else {
      setIsOpen(true)
    }
  }

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues || !selectedValues.length) {
      return ''
    }
    const onlyLabels = selectedValues.map((selected) => selected.label)
    const joinedLabel = onlyLabels.join(', ')

    return checkIsValueOverflowed(joinedLabel)
      ? setTranslationValue(overflowText || '', selectedValues.length)
      : joinedLabel
  }, [options, selectedValues, checkIsValueOverflowed])

  const { bottom, left, top, right } = useGetElemPositions(inputRef.current)
  const { width: containerWidth } = useGetElemSizes(containerRef)

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef.current
  })

  useChangePositionsOnScroll(inputRef?.current, dropdownRef, hasBottomSpace)

  return (
    <div className={classNames('select select--multi', className)} ref={setContainerRef}>
      <div onClick={disabled ? noop : toggleDropdown}>
        <Input
          readonly
          label={label}
          ref={inputRef}
          hasError={hasError}
          className="select__input"
          placeholder={placeHolder}
          required={isRequiredField}
          currentValue={selectedItemsLabels}
          rightIconProps={{
            Component: isOpen ? IconCaretUpFilled : IconCaretDownFilled,
            size: 'xsmall'
          }}
          labelAddons={labelAddons}
          disabled={disabled}
          size={size === 'large' ? 'large' : 'small'}
        />
      </div>

      <>
        {isOpen && (
          <div
            className="select__options"
            ref={setDropdownRef}
            style={{
              left: align === 'left' ? left : right - (dropdownWidth || containerWidth),
              width: dropdownWidth || containerWidth,
              ...(hasBottomSpace || !hasTopSpace
                ? { top: bottom }
                : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP })
            }}
          >
            {children}
          </div>
        )}
      </>
    </div>
  )
}
