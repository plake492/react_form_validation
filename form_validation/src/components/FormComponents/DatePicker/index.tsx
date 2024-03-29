import * as React from 'react'
import FadeInComponent from '../../BaseComponents/FadeInComponent'

import { useBemify } from '../../../hooks/useBemify'
import { useFormFieldMessages } from '../../../hooks/useFormFieldMessages'
import { formEvents } from '../../../utils/formEvents'
import SuccessIcon from '../../BaseComponents/SuccessIcon'
import FieldLabel from '../../BaseComponents/FieldLabel'
import CalendarWrapper from './CalendarWrapper'
import { DatePickerTypes } from '../../../types'

export default function DatePicker({
  startDate = new Date(),
  showTwoMonths,
  onChange,
  label,
  value,
  placeholder,
  ariaLabel,
  wrapperClasses,
  message,
  autocomplete,
  isRequired,
  isReadOnly,
  isDisabled,
  isSuccess,
  hasError,
  shouldAutoFocus,
  shouldHideStatus,
  isValid,
  onClick,
  onBlur,
  appendedIconSize = { width: '20', height: '20' },
  columnClass,
  fieldId,
  forwardRef,
  children,
  styles,
  monthAndYearAreSelectable,
  hideLabel,
  name,
}: DatePickerTypes): JSX.Element {
  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false)
  const [calendarValue, setCalendarValue] = React.useState<string>('')

  const bem: Function = useBemify('datepicker')

  const iconRef = React.useRef<HTMLDivElement>(null)
  const dateInputRef = React.useRef<HTMLInputElement>(null)

  const handleKeydown = (e: KeyboardEvent) => {
    if (document.activeElement === iconRef.current && e.key === 'Enter') {
      setShowDatePicker(true)
    }
    if (e.key === 'Escape') {
      setShowDatePicker(false)
    }
  }

  // This will allow the calendar to emit an event object
  React.useEffect(() => {
    // Create a new change event
    const event: Event = new Event('change', { bubbles: true })
    // Add the calendar value to the input ref
    dateInputRef.current.value = calendarValue
    // Add the name prop to the input ref
    dateInputRef.current.name = name
    // Connect the input with the event
    dateInputRef.current.dispatchEvent(event)
    // Call the onChange callback with the newly created event
    // and the direct value from the calendar
    onChange(event, calendarValue)
  }, [calendarValue])

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  // Get messages as needed
  const messages: JSX.Element = useFormFieldMessages({
    children,
    message,
    bem,
  })

  const events = formEvents<HTMLInputElement>({
    onChange,
    onClick,
    onBlur,
  })

  return (
    <div
      className={bem(
        '',
        columnClass,
        wrapperClasses,
        [showDatePicker, '--calendar-open'],
        [isDisabled, 'disabled'],
        [isReadOnly, 'readonly'],
        [!shouldHideStatus && (hasError || !isValid), 'error'],
        [!shouldHideStatus && isSuccess, 'success']
      )}
      style={{
        /* Option to set absolute width */
        ...(!!styles ? (styles as React.CSSProperties) : {}),
      }}
    >
      <div className={bem('label-wrapper', [hideLabel, '--hidden'])}>
        <FieldLabel
          className={bem('label')}
          htmlFor={fieldId}
          isRequired={isRequired}
        >
          {label}
        </FieldLabel>
        <SuccessIcon className={bem('success')} isSuccess={isSuccess} />
      </div>
      <div
        className={bem(
          'container',
          'position-relative',
          [isReadOnly, 'readonly'],
          [hasError || !isValid, 'error']
        )}
      >
        <input
          ref={(el: HTMLInputElement) => {
            if (forwardRef) forwardRef.current = el
            dateInputRef.current = el
          }}
          className={bem('field')}
          type="text"
          id={fieldId}
          aria-label={ariaLabel ?? placeholder}
          placeholder={placeholder}
          readOnly={isReadOnly}
          disabled={isDisabled}
          value={value}
          required={isRequired}
          autoFocus={shouldAutoFocus}
          autoComplete={autocomplete}
          name={name}
          {...events}
        />
        <div
          className={bem('appended-icon-wrapper')}
          ref={iconRef}
          tabIndex={0}
        >
          <svg
            className={bem('appended-icon', '--clickable')}
            id="calendar"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            onClick={() => setShowDatePicker((prev) => !prev)}
            {...appendedIconSize}
          >
            <path d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"></path>
            <path d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"></path>
            <path d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"></path>
          </svg>
        </div>
        {/* <FadeInComponent trigger={showDatePicker} timeout={200}> */}
        {showDatePicker ? (
          <CalendarWrapper
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
            iconRef={iconRef}
            showTwoMonths={showTwoMonths}
            startDate={startDate}
            value={value}
            onChange={(v) => setCalendarValue(v)}
            monthAndYearAreSelectable={monthAndYearAreSelectable}
          />
        ) : null}
        {/* </FadeInComponent> */}
      </div>
      <div className={bem('message-wrapper')}>{messages}</div>
    </div>
  )
}
