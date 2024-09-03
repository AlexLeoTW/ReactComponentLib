import { useId, useCallback } from 'react'
import CheckMark from './check-solid.svg?react'

interface CheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  children?: React.ReactNode
}

export const Checkbox = ({
  checked = false,
  onChange: _onChange,
  className = '',
  children,
}: CheckboxProps) => {
  const checkboxId = useId()
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!_onChange) return
      _onChange(event.target.checked)
    },
    [_onChange],
  )

  return (
    <div className={`flex items-center gap-x-1 ${className}`}>
      {/* hide actual radio btn (for browser behavior) */}
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      {/* custom radio btn */}
      <div
        className="
          peer-checked:hidden
          w-3 aspect-square
          border rounded"
      ></div>
      <CheckMark
        className="
          peer-checked:block hidden
          w-3 aspect-square"
      />
      {/* label */}
      <label htmlFor={checkboxId}>{children}</label>
    </div>
  )
}
