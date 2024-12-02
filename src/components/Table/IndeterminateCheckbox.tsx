/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardedRef } from 'react'
import React, { forwardRef, useEffect, useRef } from 'react'
import { Checkbox } from '../Checkbox'

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

export const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, checked, onChange }: IndeterminateCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef()
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    const handleChange = (v: boolean) => {
      onChange({ target: { checked: v } })
    }

    return <Checkbox value={checked} onClick={handleChange} ref={resolvedRef} />
  }
)

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'