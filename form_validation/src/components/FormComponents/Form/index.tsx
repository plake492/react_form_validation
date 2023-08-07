import * as React from 'react'
import * as ReactIs from 'react-is'
import { useBemify } from '../../../hooks/useBemify'
import Children from './Children'
import { forceArray } from '../../../utils/helpers'
import FieldLabel from '../../BaseComponents/FieldLabel'
import { useConfirmPasswordMatch } from '../../../hooks/useConfirmPasswordMatch'
import { useFormFieldsValidation } from '../../../hooks/useFormFieldsValidation'
import { useStyleForm } from '../../../hooks/useStyleForm'
import { FormPropTypes } from '../../../types'

export default function Form({
  children,
  onSubmit,
  noValidate,
  excludeFieldFromConfirmPassword,
  wrapperClasses,
  disableSuccessIndicators,
  formId,
  formLabel,
  autoComplete = 'off',
  gap = 'md',
  rowGap,
  colGap,
  colorTheme = 'dark',
  styleOptions,
  disbalePasswordConfirmation,
}: FormPropTypes): JSX.Element {
  // Force children to be an array
  // Extract the children from any fragments
  const elements: React.ReactElement[] = React.useMemo(
    () =>
      forceArray(children).reduce((acc, cur) => {
        if (ReactIs.isFragment(cur) && !!cur.props?.children) {
          return [...acc, ...cur.props.children]
        } else {
          return [...acc, cur]
        }
      }, []),
    [children]
  )

  /******************************************************************************
   * Form Validation Hooks and Functions
   */
  // Handles input and form validation
  const {
    missingRequiredValue,
    updateRequiredFieldValue,
    containesValidationError,
    checkFieldValidation,
    formItemValues,
  } = useFormFieldsValidation({ children: elements })

  // Handles password matching
  const {
    passwordMatchError,
    handlePasswordMatchOnBlur,
    checkIfPasswordMatchIsNeeded,
    updatePasswordValue,
    handlePasswordsMatch,
    passwordIDs,
  } = useConfirmPasswordMatch({
    elements,
    excludeFieldFromConfirmPassword,
    disbalePasswordConfirmation,
  })

  React.useEffect((): void => {
    if (formError) {
      setFormError(
        missingRequiredValue || containesValidationError || passwordMatchError
      )
    }
  }, [containesValidationError, passwordMatchError])
  /****************************************************************************/

  const formRef = useStyleForm({ styleOptions })
  // Set up function for handling styles
  const bem: Function = useBemify('form')

  const [formError, setFormError] = React.useState<boolean>(false)
  const [formSubmissionAttempted, setFormSubmitionAttemp] =
    React.useState<boolean>(false)

  // Add a unique id that can be common to all form fields
  const reactId: string = React.useId()
  const formGroupId: string = formId ? formId + reactId : reactId

  /**
   * Validate the child prop requiremnts.
   * Run the onSubmit function prop
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // Set attempted submit flag on
    setFormSubmitionAttemp(true)
    // Check if the form is invalid
    const formIsInvalid: boolean =
      missingRequiredValue || containesValidationError || passwordMatchError
    // Set the error state
    if (formError !== formIsInvalid) {
      setFormError(formIsInvalid)
    }
    // Call the submit callback and pass the event, and the validation state
    onSubmit(event, !formIsInvalid)
  }

  const gapClass =
    rowGap && colGap
      ? `g-col-${colGap} g-row-${rowGap}`
      : gap && rowGap && !colGap
      ? `g-row-${rowGap} g-col-${gap}`
      : gap && !rowGap && colGap
      ? `g-col-${colGap} g-row-${gap}`
      : `g-${gap}`

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={noValidate}
      id={formGroupId}
      autoComplete={autoComplete}
      className={bem('', `--${colorTheme}`)}
      ref={formRef}
    >
      {formLabel ? <FieldLabel el="legend">{formLabel}</FieldLabel> : null}
      <div className={bem('field-wrapper', wrapperClasses, 'row', gapClass)}>
        {elements.map((el: JSX.Element, index: number) => (
          <Children
            el={el}
            index={index}
            disableSuccessIndicators={disableSuccessIndicators}
            handlePasswordMatchOnBlur={handlePasswordMatchOnBlur}
            checkIfPasswordMatchIsNeeded={checkIfPasswordMatchIsNeeded}
            updatePasswordValue={updatePasswordValue}
            handlePasswordsMatch={handlePasswordsMatch}
            passwordIDs={passwordIDs}
            passwordMatchError={passwordMatchError}
            checkFieldValidation={checkFieldValidation}
            formSubmissionAttempted={formSubmissionAttempted}
            updateRequiredFieldValue={updateRequiredFieldValue}
            formItemValues={formItemValues}
            formError={formError}
            formGroupId={formGroupId}
            disbalePasswordConfirmation={disbalePasswordConfirmation}
          />
        ))}
      </div>
    </form>
  )
}
