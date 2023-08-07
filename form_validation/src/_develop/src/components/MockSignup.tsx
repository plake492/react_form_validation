import * as React from 'react'
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  RadioButtons,
  Select,
} from '../../../components/FormComponents'

const selectOptions = [
  { label: 'Male' },
  { label: 'Female' },
  { label: 'other' },
  { label: 'Prefer not to say' },
]

const radioOptions = [
  { id: 'food1', label: 'Steak', value: 'steak' },
  { id: 'food2', label: 'Lobster', value: 'lobster' },
  { id: 'food3', label: 'Sushi', value: 'sushi' },
]

const submitBtnStyles = {
  padding: 8,
  background: '#222',
  color: '#fff',
  border: '1px solid #fff',
  borderRadius: 8,
}

export const MockSignup = function () {
  // const formStyles = {
  //   shadowColor: 'grey',
  //   fieldBackgroundColor: 'blueviolet',
  //   fieldTextColor: 'darkblue',
  //   fieldPlaceholderTextColor: 'cornflower',
  //   fieldBorderColor: 'indego',
  //   fieldBorderColorFocus: 'orange',
  //   labelTextColor: 'lime',
  //   errorColor: 'red',
  //   successColor: 'orange',
  // }

  const [showPass, setShowPass] = React.useState(false)

  const [user, setUser] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    address: '',
    addressTwo: '',
    zipcode: '',
    dob: '',
    gender: '',
    food: '',
    tos: false,
  })

  const handleSubmit = (_: React.FormEvent, status: boolean) =>
    status
      ? alert('SINGUP SUBMITTED:: ' + JSON.stringify(user))
      : alert('signup error')

  const handleChange = (e: React.ChangeEvent | Event) => {
    const { name, value }: any = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheck = (e: React.ChangeEvent | Event) => {
    const { name, checked }: any = e.target
    setUser((prev) => ({ ...prev, [name]: checked }))
  }

  const validateZipCode = (v: any) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v)

  const validatePhone = (v: any) =>
    /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v)

  return (
    <>
      <div style={{ padding: 32, color: '#ccc' }}>
        {JSON.stringify(user)
          .split(',')
          .map((thing) => (
            <p key={thing}>{thing}</p>
          ))}
      </div>
      <div className="row" style={{ padding: '4rem' }}>
        <Form
          onSubmit={handleSubmit}
          formId="signup-form"
          noValidate
          autoComplete="on"
          formLabel="Signup form"
          // styleOptions={formStyles}
        >
          <Input
            type="text"
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
            label="First Name"
            id="first-name"
            isRequired
            col={6}
          />
          <Input
            type="text"
            value={user.lastName}
            name="lastName"
            onChange={handleChange}
            label="Last Name"
            id="last-name"
            isRequired
            col={6}
          />

          <Input
            type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            label="email"
            id="email"
            isRequired
          />
          <Input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            label="phone"
            id="phone"
            shouldValidate
            validationType={validatePhone}
          />
          <Input
            label="Address"
            type="text"
            id="address"
            name="address"
            placeholder="1234 Park Place"
            value={user.address}
            isRequired
            onChange={handleChange}
            message={'This would be an address'}
          />
          <Input
            label="Address Line 2"
            type="text"
            name="addressTwo"
            id="address-line-two"
            placeholder="APT 2"
            value={user.addressTwo}
            onChange={handleChange}
            col={6}
          />
          <Input
            label="Postal Code"
            type="text"
            name="zipcode"
            id="postal-code"
            placeholder="12345"
            isRequired
            value={user.zipcode}
            onChange={handleChange}
            validationType={validateZipCode}
            col={6}
            autocomplete="on"
          />
          <DatePicker
            startDate={new Date('01/01/1990')}
            label="Date of birth"
            id="dob"
            name="dob"
            onChange={handleChange}
            value={user.dob}
            isRequired
            autocomplete="on"
            validationType="date-dd/mm/yyyy"
            placeholder="04/04/1992"
            col={6}
            monthAndYearAreSelectable
          />
          <Select
            label="Gender"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            options={selectOptions}
            col={6}
            isRequired
          />
          {showPass ? (
            <>
              <Input
                type="password"
                value={user.password}
                name="password"
                onChange={handleChange}
                label="Password"
                id="password"
                isRequired
              />
              <Input
                type="password"
                value={user.passwordConfirm}
                name="passwordConfirm"
                onChange={handleChange}
                label="Confirm Password"
                id="confirm-password"
                isRequired
              />
            </>
          ) : (
            <></>
          )}

          <RadioButtons
            label="What is your favorite food?"
            id="food"
            name="food"
            options={radioOptions}
            onChange={handleChange}
          />
          <Checkbox
            label={
              <label>
                Please confirm that you have read the{' '}
                <a href="#">Terms of Service</a>
              </label>
            }
            name="tos"
            id="tos"
            isRequired
            value={user.tos}
            onChange={handleCheck}
          />
          <button style={submitBtnStyles} type="submit">
            Submit
          </button>
        </Form>
        <button
          style={{ marginTop: 40 }}
          onClick={() => setShowPass((prev) => !prev)}
        >
          Show Password
        </button>
      </div>
    </>
  )
}
