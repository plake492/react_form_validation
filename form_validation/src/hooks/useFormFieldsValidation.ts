import * as React from 'react'
import { forceArray } from '../utils/helpers'
import { InputTypes } from '../types'
import { formValidation, FormValidationTypes } from '../utils/formValidation'

interface IdValueProps {
  id: string
  value: string | number
}

export const useFormFieldsValidation = ({
  children,
}: {
  children: React.ReactElement[]
}) => {
  const elements: React.ReactElement[] = forceArray(children)

  // Find the required children of the form
  // Watch for changes to the children in the event that a new child is added
  const requiredElements: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[] = React.useMemo(
    () =>
      elements.filter((el) => el.props.isRequired || el.props.shouldValidate),
    [children.length]
  )

  const [formItemValues, setFormItemValues] = React.useState<{
    [key: string]: { [key: string]: string | number | null | boolean }
  }>({})

  // Create an object to track the validation of each required field
  // EX: {
  //  first-name: {value: '', isValid: true, isRequired: true},
  //  email: {value: 'email', isValid: false, isRequired: true}
  //  ...
  // }
  React.useEffect(() => {
    if (requiredElements) {
      setFormItemValues(
        requiredElements.reduce(
          (acc, cur) => ({
            ...acc,
            [cur.props.id]: {
              value: cur.props.value,
              isValid: true,
              isRequired: !!cur.props.isRequired,
            },
          }),
          {}
        )
      )
    }
  }, [requiredElements])

  // Check if any required fields are missing a value
  const missingRequiredValue: boolean = Object.values(formItemValues)
    .filter(({ isRequired }: { isRequired: boolean }) => isRequired)
    .some(({ value }: { value: string | number | boolean }) => !value)

  // Check if validation errors exist
  const containesValidationError: boolean = Object.values(formItemValues).some(
    ({ isValid }: { isValid: boolean }) => !isValid
  )

  // update specific field value
  // This function is passed to the Children Component
  // and will be used if a field is required and or should be validated
  const updateRequiredFieldValue = ({ id, value }: IdValueProps): void => {
    if (
      !!formItemValues[id] &&
      /* Prevent infinite loop by comparing incoming value to stored value */
      value !== formItemValues[id].value
    ) {
      // Update the value prop
      setFormItemValues((prev: { [key: string]: {} }) => ({
        ...prev,
        [id]: { ...prev[id], value },
      }))
    }
  }

  const checkFieldValidation = ({
    id,
    value,
    validationType,
    isTouched,
    shouldValidate,
    isRequired,
    type,
  }: {
    id: string
    value: string | number | Function
    validationType: 'email' | 'text' | 'password' | Function
    isTouched: boolean
    shouldValidate: boolean
    isRequired: boolean
    type: InputTypes
  }): boolean => {
    // Avoid loading a form in an error state by setting isValid to defualt to true
    let isValid = true

    const validation: InputTypes | Function =
      validationType || (type in formValidation && type) || 'text'

    // TODO allow skipping of validation and still being required
    // if (!shouldValidate && isRequired) {
    //   return !!value
    // }

    if (isTouched && (shouldValidate || isRequired)) {
      // Run a validation check on the input
      let validationTest: RegExp | Function

      if (validation instanceof Function) {
        // If validation passed to input is a function, set the test to that function
        validationTest = validation as Function
      } else {
        // If the validation is a string, then find the matching test from the
        // formValidation obj
        validationTest = formValidation[validation as keyof FormValidationTypes]
      }

      if (validationTest instanceof RegExp) {
        // Run a regex test
        isValid = validationTest.test(value?.toString())
      }
      if (validationTest instanceof Function) {
        isValid = validationTest(value)
      }

      // If non required field is being validated, the field can be empty
      if (!isRequired && shouldValidate && !value) {
        isValid = true
      }
      // Update the valid status on the specific formItemValue prop
      if (!!formItemValues[id] && !!formItemValues[id].isValid !== isValid) {
        setFormItemValues((prev: { [key: string]: {} }) => ({
          ...prev,
          [id]: {
            ...prev[id],
            isValid,
          },
        }))
      }

      // This will prevent both the isRequired and isInvalid error
      // from showing at the same time if a required input is empty after touch
      return isRequired && !value ? true : isValid
    }
    return true
  }

  return {
    missingRequiredValue,
    updateRequiredFieldValue,
    formItemValues,
    setFormItemValues,
    containesValidationError,
    checkFieldValidation,
  }
}
