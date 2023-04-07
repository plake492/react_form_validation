import * as React from 'react'

const formStyles = {
  shadowColor: 'grey',
  fieldFontSize: '16px',
  fieldBackgroundColor: 'blueviolet',
  disabledTextColor: 'whitesmoke',
  fieldTextColor: 'darkblue',
  fieldPlaceholderTextColor: 'cornflower',
  fieldBorderColor: 'indego',
  fieldBorderColorFocus: 'orange',
  fieldBorderRadius: '40px',
  fieldPaddingX: '20px',
  fieldPaddingY: '10px',
  labelHeight: '40px',
  messageBackgroundColor: '#0000',
  messageBorderRadius: '50px',
  labelTextColor: 'lime',
  errorColor: '#829efd',
  successColor: 'orange',
  fieldMarginBottom: '2px',
}

import Form from '../../../../components/FormComponents/Form'
import Input from '../../../../components/FormComponents/Input'
import Checkbox from '../../../../components/FormComponents/Checkbox'
import Textarea from '../../../../components/FormComponents/Textarea'
import RadioButtons from '../../../../components/FormComponents/RadioButtons'
import Select from '../../../../components/FormComponents/Select'

const radioGroup = [{ label: 'red' }, { label: 'blue' }, { label: 'green' }]

const radioGroupTwo = [
  { id: 'value-1', label: 'Blade Runner' },
  { id: 'value-2', label: 'The Matrix' },
  { id: 'value-3', label: 'Equilibrium' },
]

export default function TestForm(): JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false)
  const [test, setTest] = React.useState('')
  const [favoriteColor, setFavoriteColor] = React.useState<string | undefined>(
    undefined
  )
  const [movies, setGf] = React.useState<string | undefined>(undefined)
  const [message, setMessage] = React.useState<string | undefined>('')

  const [openModal, setOpenModal] = React.useState(false)

  const [formFields, setFormFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    address: '',
    addressTwo: '',
    zipcode: '',
    dob: '',
    checked: false,
  })

  const onSubmit = (
    _: React.FormEvent<HTMLFormElement>,
    success: boolean
  ): void => {
    console.log('success ==>', success)
    alert(success ? 'Form success submitted!' : 'Error on form')
  }

  const updateFormItem = (
    key: string,
    value: string | number | boolean
  ): void => setFormFields((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="border-rounded p-lg">
      <Form
        noValidate
        excludeFieldFromConfirmPassword="old-password"
        formId="test-form"
        formLabel={<h4>FORM TIME</h4>}
        gap="md"
        onSubmit={(event: React.FormEvent<HTMLFormElement>, success: boolean) =>
          onSubmit(event, success)
        }
        colorTheme="dark"
        styleOptions={formStyles}
      >
        <Select
          id="select"
          label="Color"
          options={radioGroup}
          placeholder="color"
          onChange={(v: any): void => setFavoriteColor(v)}
          value={favoriteColor}
          col={2}
          isDisabled
        />
        <Input
          label="First Name"
          type="text"
          id="first-name"
          placeholder="John"
          value={formFields.firstName}
          isRequired
          onChange={(v: any) => updateFormItem('firstName', v)}
          col={5}
          isDisabled
        />
        <Input
          label="Last Name"
          type="text"
          id="last-name"
          placeholder="Snow"
          value={formFields.lastName}
          isRequired
          onChange={(v: any): void => {
            updateFormItem('lastName', v)
          }}
          col={5}
        />
        <Input
          label="Address"
          type="text"
          id="address"
          placeholder="1234 Park Place"
          value={formFields.address}
          isRequired
          onChange={(v: any) => updateFormItem('address', v)}
          message={'This would be an address'}
          col={7}
        />
        <Input
          label="Address Line 2"
          type="text"
          id="address-line2"
          placeholder="APT 2"
          value={formFields.addressTwo}
          onChange={(v: any) => updateFormItem('addressTwo', v)}
        />
        <Input
          label="Postal Code"
          type="text"
          id="postal-code"
          placeholder="12345"
          isRequired
          value={formFields.zipcode}
          onChange={(v: any) => updateFormItem('zipcode', v)}
          validationType={(v: string) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v)}
        />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={formFields.password}
          placeholder="**********"
          appendedIcon={`eye-${showPassword ? 'open' : 'closed'}`}
          appendedOnClick={() => setShowPassword((p) => !p)}
          isBlock
          message={[
            "Password should 4 characters long, it's gonna be really secure!",
          ]}
          isRequired
          validationType="password"
          onChange={(v: any) => updateFormItem('password', v)}
        />
        <Input
          label="Confirm Password"
          type={showPasswordConfirm ? 'text' : 'password'}
          id="confirm-password"
          value={formFields.passwordConfirm}
          placeholder="**********"
          appendedIcon={`eye-${showPasswordConfirm ? 'open' : 'closed'}`}
          appendedOnClick={() => setShowPasswordConfirm((p) => !p)}
          isBlock
          isRequired
          validationType="password"
          onChange={(v: any) => updateFormItem('passwordConfirm', v)}
        />

        <Input
          type="text"
          id="test"
          placeholder="Some Text Here"
          value={test}
          isBlock
          label={
            <p className="bg-blue-30 mb-none p-md border-tl-rounded border-tr-rounded mt-md mnb-sm pb-sm text-xs">
              Custom Label
            </p>
          }
          onChange={(v: any) => setTest(v)}
          shouldValidate
          validationType={(v: string) => v === 'TEST'}
          message={[
            `This inputs validation is set to 'value === "TEST"'`,
            'This input is not required, but will be validated if there is an input',
          ]}
        />

        <Textarea
          label="Big Text"
          id="text-area"
          placeholder="A Message"
          shouldValidate
          validationType={(v: string) => v.length > 100}
          value={message}
          onChange={(v: any) => setMessage(v)}
          isRequired
          message={[
            'Must container at least 100 characters',
            `Number of characters: ${message?.length.toString()}`,
          ]}
        />

        <RadioButtons
          label="Select the best movie"
          options={radioGroupTwo}
          value={movies}
          isRequired
          onChange={(v: any) => setGf(v)}
          id="movies"
        />

        <Checkbox
          id="checkbox"
          label="Check me or else this form will not work. You don't want to check me? Well then find a different form"
          value={formFields.checked}
          onChange={() => updateFormItem('checked', !formFields.checked)}
          isRequired
        />
      </Form>
    </div>
  )
}
