import React from 'react'
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  RadioButtons,
  Select,
} from '../../../components/FormComponents'

export const MockSignup = function () {
  const formStyles = {
    shadowColor: 'grey',
    fieldBackgroundColor: 'blueviolet',
    fieldTextColor: 'darkblue',
    fieldPlaceholderTextColor: 'cornflower',
    fieldBorderColor: 'indego',
    fieldBorderColorFocus: 'orange',
    labelTextColor: 'lime',
    errorColor: 'red',
    successColor: 'orange',
  }

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

  const validateZipCode = (v: any) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v)
  const validatePhone = (v: any) =>
    /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v)

  return (
    <div className="row" style={{ padding: '4rem' }}>
      {/* <div
        className="col-4"
        style={{
          top: 16,
          borderRadius: '40px',
          position: 'sticky',
          height: '100%',
        }}
      >
        <>
          {`{`}
          {Object.entries(user).map(([key, value]) => (
            <p
              className=" text-md pl-md mb-sm"
              key={key}
            >{`${key}: "${value}",`}</p>
          ))}
          {`}`}
        </>
      </div> */}

      <Form
        onSubmit={(_, status) =>
          status ? alert('SINGUP SUBMITTED') : alert('signup error')
        }
        formId="signup-form"
        noValidate
        autoComplete="on"
        formLabel="Signup form"
        colorTheme="dark"
        // submitButton={<button style={{ background: 'green' }}>HELLO</button>}
        // styleOptions={formStyles}
      >
        <Input
          type="text"
          value={user.firstName}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['firstName']: v }))
          }
          label="First Name"
          id="first-name"
          isRequired
          col={6}
        />
        <Input
          type="text"
          value={user.lastName}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['lastName']: v }))
          }
          label="Last Name"
          id="last-name"
          isRequired
          col={6}
        />

        <Input
          type="email"
          value={user.email}
          onChange={(v) => setUser((prev: any) => ({ ...prev, ['email']: v }))}
          label="email"
          id="email"
          isRequired
        />
        <Input
          type="tel"
          value={user.phone}
          onChange={(v) => setUser((prev: any) => ({ ...prev, ['phone']: v }))}
          label="phone"
          id="phone"
          shouldValidate
          validationType={validatePhone}
        />
        <Input
          label="Address"
          type="text"
          id="address"
          placeholder="1234 Park Place"
          value={user.address}
          isRequired
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['address']: v }))
          }
          message={'This would be an address'}
        />
        <Input
          label="Address Line 2"
          type="text"
          id="address-line-two"
          placeholder="APT 2"
          value={user.addressTwo}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['addressTwo']: v }))
          }
          col={6}
        />
        <Input
          label="Postal Code"
          type="text"
          id="postal-code"
          placeholder="12345"
          isRequired
          value={user.zipcode}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['zipcode']: v }))
          }
          validationType={validateZipCode}
          col={6}
          autocomplete="on"
        />
        <DatePicker
          startDate={new Date('01/01/1990')}
          label="Date of birth"
          id="dob"
          onChange={(v) => setUser((prev: any) => ({ ...prev, ['dob']: v }))}
          value={user.dob}
          isRequired
          autocomplete="on"
          placeholder="04/04/1992"
          col={6}
          monthAndYearAreSelectable
        />
        <Select
          label="Gender"
          id="gender"
          value={user.gender}
          onChange={(v) => setUser((prev: any) => ({ ...prev, ['gender']: v }))}
          options={[{ label: 'Male' }, { label: 'Female' }, { label: 'other' }]}
          col={6}
          isRequired
        />
        <Input
          type="password"
          value={user.password}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['password']: v }))
          }
          label="Password"
          id="password"
          isRequired
        />
        <Input
          type="password"
          value={user.passwordConfirm}
          onChange={(v) =>
            setUser((prev: any) => ({ ...prev, ['passwordConfirm']: v }))
          }
          label="Confirm Password"
          id="confirm-password"
          isRequired
        />
        <RadioButtons
          label="What is your favorite food?"
          id="food"
          options={[
            { id: 'food1', label: 'Steak', value: 'steak' },
            { id: 'food2', label: 'Lobster', value: 'lobster' },
            { id: 'food3', label: 'Sushi', value: 'sushi' },
          ]}
          onChange={(v) => setUser((prev: any) => ({ ...prev, ['food']: v }))}
        />
        <Checkbox
          label={
            // TODO Allow custom labels and, Ensure that htmlFor is applied propery
            <label
              htmlFor="tos"
              // this id is incorect since it does not inclue the form id
            >
              Please confirm that you have read the{' '}
              <a href="#">Terms of Service</a>
            </label>
          }
          id="tos"
          isRequired
          value={user.tos}
          onChange={() =>
            setUser((prev: any) => ({ ...prev, ['tos']: !prev['tos'] }))
          }
        />
      </Form>
    </div>
  )
}
