import * as React from 'react'
import { forceArray } from '../utils/helpers'

interface IdValueProps {
  id: string
  value: string | number
  overRideCurrentIsTouched?: boolean
}

export const useConfirmPasswordMatch = ({
  elements,
  excludeFieldFromConfirmPassword,
  disbalePasswordConfirmation,
}: {
  elements: React.ReactElement[]
  excludeFieldFromConfirmPassword: string[] | string | undefined
  disbalePasswordConfirmation?: boolean
}) => {
  // ****************************** STATE ****************************** //
  /**
   * Memoizing this prevents any type change to
   * text (common for show password options)
   * from changing this value
   */
  const passwordElements: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[] = React.useMemo(
    () =>
      !disbalePasswordConfirmation
        ? elements.filter((el) => {
            if (excludeFieldFromConfirmPassword) {
              if (Array.isArray(excludeFieldFromConfirmPassword)) {
                return (
                  el.props.type === 'password' &&
                  !excludeFieldFromConfirmPassword.includes(el.props.id)
                )
              } else if (typeof excludeFieldFromConfirmPassword === 'string') {
                return (
                  el.props.type === 'password' &&
                  el.props.id !== excludeFieldFromConfirmPassword
                )
              }
            }

            return el.props.type === 'password'
          })
        : [],
    [disbalePasswordConfirmation, elements.length]
  )

  // Track the matching state of the password and password confirm
  const [passwordMatchError, setPasswordMatchError] =
    React.useState<boolean>(false)

  /**
   * Track password and passwordConfirm fields
   * tracking if they've been touched, and their values
   * */
  const [passwordCheckObject, setPasswordCheckObj] = React.useState<{
    [key: string]: { [key: string]: string | boolean }
  }>({})

  /**
   * Store the password field IDs
   */
  const passwordIDs: string[] = React.useMemo(
    () => Object.keys(passwordCheckObject),
    [passwordCheckObject]
  )

  /**
   * Initialize the password check state with the password and confirmPassword
   * as keys containing an obj with 'value', and 'isTouched' properties
   */
  React.useEffect(() => {
    if (passwordElements && passwordElements.length > 1) {
      // Create the password check object
      const pElements = passwordElements.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.props.id]: {
            value: cur.props.value,
            /* Assume that the presence of a value means this field has been touched */
            isTouched: !!cur.props.value,
          },
        }),
        {}
      )

      // ! Only allows two fields to be compared
      const [password, confirmPassword]: { value: string }[] =
        Object.values(pElements)
      if (password.value !== confirmPassword.value) {
        setPasswordMatchError(true)
      }

      setPasswordCheckObj(pElements)
    } else {
      // If the password elements are not present, reset the state
      // Prevents conditioanlly rendered fields to stop a form from submitting if they are not present
      setPasswordCheckObj({})
      setPasswordMatchError(false)
    }
  }, [passwordElements])

  // ****************************** FUNCTIONS ****************************** //

  // Handle setState logic for the passwordCheckObject
  const updatePasswordConfirmObj =
    ({
      id,
      key,
      value,
    }: {
      id: string
      key: string
      value: string | boolean | number
    }) =>
    (prev: { [key: string]: {} }) => ({
      ...prev,
      [id]: { ...prev[id], [key]: value },
    })

  const checkIfPasswordMatchIsNeeded = ({ id }: { id: string }): boolean =>
    passwordIDs.length > 0 && passwordIDs.includes(id)

  const updatePasswordValue = ({ id, value }: IdValueProps): void => {
    if (
      !!passwordCheckObject[id] &&
      /* Prevent infinite loop by comparing incoming value to stored value */
      value !== passwordCheckObject[id].value
    ) {
      // Update the value prop
      setPasswordCheckObj(
        updatePasswordConfirmObj({ id, key: 'value', value: value })
      )
    }
  }

  const handlePasswordsMatch = ({
    id,
    value,
    overRideCurrentIsTouched,
  }: IdValueProps): void => {
    const otherID = passwordIDs.find((idKey) => idKey !== id)

    if (
      !!passwordCheckObject[id] &&
      passwordCheckObject[otherID]?.isTouched &&
      (passwordCheckObject[id]?.isTouched || overRideCurrentIsTouched)
    ) {
      // If both fields have been touched, then we run the test
      setPasswordMatchError(passwordCheckObject[otherID].value !== value)
    }
  }

  const handlePasswordMatchOnBlur = ({ id, value }: IdValueProps): void => {
    if (!passwordCheckObject[id]?.isTouched) {
      // Update the isTouched prop
      setPasswordCheckObj(
        updatePasswordConfirmObj({ id, key: 'isTouched', value: true })
      )

      handlePasswordsMatch({ id, value, overRideCurrentIsTouched: true })
    }
  }

  return {
    passwordMatchError,
    passwordIDs,
    handlePasswordMatchOnBlur,
    checkIfPasswordMatchIsNeeded,
    updatePasswordValue,
    handlePasswordsMatch,
  }
}
