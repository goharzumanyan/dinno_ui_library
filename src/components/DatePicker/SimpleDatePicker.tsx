import type { ReactElement } from 'react'
import React, { useRef } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'

import { Input } from '../Input'
import { Label } from '../../helperComponents'
import { CustomHeader } from './CustomHeader/CustomHeader'

import { MONTHS } from '../../consts'
import { useImportFilesDynamically } from './hooks'

import type { ISimpleDatePickerProps } from './types'
import IconCalendarRight from '../SVGIcons/IconCalendarRight'

export const SimpleDatePicker = (props: ISimpleDatePickerProps): ReactElement => {
  const {
    value,
    currentDate,
    setFieldValue,
    name,
    label,
    size,
    locale = 'hy',
    changeHandler,
    format = 'M/D/YYYY',
    dayjsLocale = 'hy-am',
    required = false,
    dataId,
    hasError,
    placeholderText,
    months = MONTHS,
    minDate,
    maxDate,
    dataIdPrefix,
    helperText,
    ...rest
  } = props

  const startYear = minDate ? minDate.getFullYear() : 1900
  const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5
  const calendarRef = useRef<{
    isCalendarOpen: () => boolean
    setOpen: (isOpen: boolean) => void | null
  }>(null)

  useImportFilesDynamically(dayjsLocale)

  const selectedDate =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentDate

  const openDatepicker = () => {
    if (calendarRef.current) {
      const isOpen = calendarRef.current?.isCalendarOpen()
      calendarRef.current?.setOpen(!isOpen)
    }
  }

  const onChange = (date: Date) => {
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
    if (changeHandler) {
      changeHandler(date)
    }
  }

  return (
    <div className="picker-container">
      <Label text={label} required={required} invalid={hasError} />

      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        selected={dayjs(selectedDate).isValid() ? selectedDate : null}
        locale={locale}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        customInput={
          <Input
            size={size}
            dataId={dataId}
            helperText={helperText}
            datePlaceHolderText={label ? '' : placeholderText}
            rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
            currentValue={selectedDate ? dayjs(selectedDate.toString()).format(format) : ''}
          />
        }
        {...rest}
        onChange={onChange}
        renderCustomHeader={(props) => (
          <CustomHeader
            {...props}
            months={months}
            startYear={startYear}
            endYear={endYear}
            dataPrefix={dataIdPrefix}
          />
        )}
      />
    </div>
  )
}
