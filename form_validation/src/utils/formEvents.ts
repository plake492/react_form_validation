import * as React from 'react'

export type HTMLFormEventElements =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement

interface FormEventPropTypes<T> {
  onChange: (e: React.ChangeEvent, v: string | number | boolean) => void
  onClick: (e: React.MouseEvent, v: string | number | boolean) => void
  onBlur: React.FocusEventHandler<T>
}

export const formEvents = <T extends HTMLFormEventElements>({
  onChange,
  onClick,
  onBlur,
}: FormEventPropTypes<T>) => {
  const handleOnClick = (event: React.MouseEvent<T>): void =>
    onClick && onClick(event, (event.target as T).value)

  const handleOnChange = (event: React.ChangeEvent<T>): void =>
    onChange && onChange(event, (event.target as T).value)

  return {
    onChange: handleOnChange,
    onClick: handleOnClick,
    onBlur,
  }
}
