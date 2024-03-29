import * as React from 'react'
import { checkIfAnyReactComponentType } from '../../utils/detectReactComponents'
import { formFieldLabelTyps } from '../../types'

const MessageWrapper = function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="status-message error">
      <svg id="error" width="16" height="16" viewBox="0 0 25 25" fill="none">
        <circle
          cx="12.5001"
          cy="12.5"
          r="11.75"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="20.6777"
          y1="4.23744"
          x2="4.23744"
          y2="20.6777"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </div>
  )
}

export const IsIvalidErrorMessage = function ({
  label,
}: {
  label: formFieldLabelTyps
}): JSX.Element {
  return (
    <MessageWrapper>
      <i>
        {checkIfAnyReactComponentType(label)
          ? 'Invalid input'
          : `${label} is invalid`}
      </i>
    </MessageWrapper>
  )
}

export const RequiredFieldErrorMessage = function ({
  label,
}: {
  label: formFieldLabelTyps
}): JSX.Element {
  return (
    <MessageWrapper>
      <i>
        {checkIfAnyReactComponentType(label)
          ? 'Field is required '
          : `${label} is required`}
      </i>
    </MessageWrapper>
  )
}

export const PasswordMatchErrorMessage = function () {
  return (
    <MessageWrapper>
      <i>Passwords do not match</i>
    </MessageWrapper>
  )
}
