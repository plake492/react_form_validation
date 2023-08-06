import React from 'react'
import {
  isDOMTypeElement,
  checkIfAnyReactComponentType,
} from '../../../utils/detectReactComponents'
import {
  IsIvalidErrorMessage,
  PasswordMatchErrorMessage,
  RequiredFieldErrorMessage,
} from '../../BaseComponents/FormMessages'
import { InputPropTypes } from '../../../types'
import { validFormComponentChildren } from '../../../utils/validFormComponentChildren'
import { setStyles } from '../../../utils/styleVars'
import { setLabelHtmlForAttr } from '../../../utils/injectHtmlForAttrIntoLabel'

export default function Children({
  el,
  index,
  disableSuccessIndicators,
  handlePasswordMatchOnBlur,
  checkIfPasswordMatchIsNeeded,
  updatePasswordValue,
  handlePasswordsMatch,
  passwordIDs,
  passwordMatchError,
  checkFieldValidation,
  formSubmissionAttempted,
  updateRequiredFieldValue,
  formItemValues,
  formError,
  formGroupId,
}: any) {
  const {
    id,
    value,
    label,
    type,
    isRequired,
    shouldValidate,
    hasError,
    onChange,
    onBlur,
    validationType,
    col = 12,
    breakpoint,
    styleConfig,
  }: InputPropTypes = el.props

  // Track if input has been selected and then unselected
  const [isTouched, setIsTouched] = React.useState<boolean>(false)

  /**
   * If child is not a react component,
   * or if it's not on the list of
   * approved form child components,
   * simply return a clone of the child as is
   */
  if (
    isDOMTypeElement(el) ||
    !validFormComponentChildren.includes(el.type.name)
  ) {
    return <React.Fragment key={index}>{React.cloneElement(el)}</React.Fragment>
  }

  // If needed, update the value of the password validation object
  if (checkIfPasswordMatchIsNeeded({ id })) {
    updatePasswordValue({ id, value })
  }

  /******************************************************************************
   * VALIDATON
   */
  let isValid: boolean = true

  if (isRequired || shouldValidate) {
    updateRequiredFieldValue({ id, value })

    isValid = checkFieldValidation({
      id,
      value,
      validationType,
      isTouched,
      shouldValidate,
      isRequired,
      type,
    })
  }

  const requiredFieldError: boolean =
    formSubmissionAttempted &&
    isRequired &&
    !!formItemValues[id] &&
    !formItemValues[id].value
  /******************************************************************************/

  /******************************************************************************
   * ADDITIONAL PROPS
   */
  // Add additional logic to onBlur
  const onBlurProp = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.stopPropagation()

    setIsTouched(true)

    // Check if password match vaidation is needed
    if (checkIfPasswordMatchIsNeeded({ id })) {
      handlePasswordMatchOnBlur({ id, value })
    }

    onBlur && onBlur(e)
  }

  // Add additional logic to onChange
  const onChangeProp = (e: React.ChangeEvent, value: string | number): void => {
    // Check if password match vaidation is needed
    if (checkIfPasswordMatchIsNeeded({ id })) {
      handlePasswordsMatch({ id, value })
    }
    return onChange && onChange(e, value)
  }

  // For required fields with no value, pass an error state
  const isSuccessProp: boolean =
    !disableSuccessIndicators &&
    isTouched && //! This does not allow success to appear when using autocomplete
    !!value &&
    isValid

  const isRequiredProp: {} = {
    ...(isRequired && !value ? { hasError: formError } : {}),
  }
  /******************************************************************************/

  /******************************************************************************
   * PASSWORD MATCH PROPS
   */
  let passwordMatchHasError: boolean,
    passwordMatchIsValid: boolean,
    passwordMatchIsSucces: boolean,
    passwordMatchProps: {}

  if (id.includes('password') || type === 'password') {
    console.log('\n==============================================')
    console.log('id ==>', id)

    // Pasword error
    passwordMatchHasError =
      hasError || passwordMatchError || (!value && formError)
    console.log('passwordMatchHasError ==>', passwordMatchHasError)

    // Password is valide
    passwordMatchIsValid = isValid && !passwordMatchError
    console.log('passwordMatchIsValid ==>', passwordMatchIsValid)

    // Password match is successful
    passwordMatchIsSucces =
      !disableSuccessIndicators &&
      isTouched &&
      !!value &&
      isValid &&
      !passwordMatchError
    console.log('passwordMatchIsSucces ==>', passwordMatchIsSucces)

    // Handle Password specific props
    passwordMatchProps = {
      ...(checkIfPasswordMatchIsNeeded({ id })
        ? {
            hasError: passwordMatchHasError,
            isValid: passwordMatchIsValid,
            isSuccess: passwordMatchIsSucces,
          }
        : {}),
    }
    console.log('passwordMatchProps ==>', passwordMatchProps)
  }

  /******************************************************************************/

  // Set up id with reference to form
  const fieldId: string = formGroupId ? `${formGroupId}__${id}` : id

  let formattedLabel = label

  if (checkIfAnyReactComponentType(label)) {
    formattedLabel = setLabelHtmlForAttr({
      el: label as JSX.Element,
      id: fieldId,
    })
  }

  const columnClass: string = !!breakpoint
    ? `col-${breakpoint}-${col} col-12`
    : `col-${col}`

  const styles = !!styleConfig && setStyles(styleConfig)

  const props = {
    columnClass,
    fieldId,
    formGroupId,
    isValid,
    styles,
    label: formattedLabel,
    isSuccess: isSuccessProp,
    onBlur: onBlurProp,
    onChange: onChangeProp,
    ...isRequiredProp,
    ...passwordMatchProps,
  }

  /******************************************************************************
   * Additional Children
   */
  // This will avoid using long labels for the error messages
  const messageLabel =
    !type || type === 'checkbox' || type === 'radio' ? 'Field' : label

  const newChildren = [
    !isValid ? <IsIvalidErrorMessage label={messageLabel} /> : null,

    requiredFieldError ? (
      <RequiredFieldErrorMessage label={messageLabel} />
    ) : null,

    /**
     * !This assumes that the confirm password field
     * !will be the last password field present
     */
    passwordMatchError && id === passwordIDs[passwordIDs.length - 1] ? (
      <PasswordMatchErrorMessage />
    ) : null,
  ]
  /******************************************************************************/

  return (
    <React.Fragment key={id}>
      {React.cloneElement(el, props, ...newChildren)}
    </React.Fragment>
  )
}
