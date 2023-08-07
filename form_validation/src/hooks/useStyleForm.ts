import * as React from 'react'
import { toKebabCase } from '../utils/helpers'

export const useStyleForm = ({
  styleOptions,
}: {
  styleOptions: { [key: string]: string } // TODO create style obj type
}) => {
  const elRef = React.useRef<HTMLFormElement>(null)

  // Apply styles to the form
  React.useEffect((): void => {
    if (styleOptions && elRef.current)
      Object.entries(styleOptions).forEach(
        ([key, value]: [string, string]): void => {
          const formatKey = toKebabCase(key)
          ;(elRef.current as HTMLFormElement).style.setProperty(
            `--form-${formatKey}`,
            value
          )
        }
      )
  }, [])

  return elRef
}
