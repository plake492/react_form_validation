import * as React from 'react'

import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  RadioButtons,
  Select,
} from '../../../../index'

export default function MockSignup(): JSX.Element {
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

  const [user, setUser] = React.useState<any>({
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

  return (
    <div className="row" style={{ padding: '4rem' }}>
      <div
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
      </div>

      <div className="col-8">
        <Form
          onSubmit={(_, status) =>
            status ? alert('SINGUP SUBMITTED') : alert('signup error')
          }
          formId="signup-form"
          noValidate
          autoComplete="on"
          formLabel="Signup form"
          colorTheme="light"
        >
          <Input
            type="text"
            value={user.firstName}
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['firstName']: v }))
            }
            label={
              <section style={{ padding: '2rem', backgroundColor: 'blue' }}>
                <main style={{ marginLeft: '2rem', backgroundColor: 'yellow' }}>
                  <label
                    style={{ marginLeft: '2rem', backgroundColor: 'green' }}
                  >
                    <p
                      style={{
                        marginLeft: '2rem',
                        padding: '2rem',
                        backgroundColor: '#232323',
                        color: '#ffffff',
                      }}
                    >
                      First Name
                    </p>
                  </label>
                </main>
              </section>
            }
            id="first-name"
            isRequired
            col={6}
          />
          <Input
            type="text"
            value={user.lastName}
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['lastName']: v }))
            }
            label="Last Name"
            id="last-name"
            isRequired
            col={6}
            styleConfig={formStyles}
          />

          <Input
            type="email"
            value={user.email}
            onChange={(v) => setUser((prev: {}) => ({ ...prev, ['email']: v }))}
            label={
              <div className="WHY_IS_IT_SO_COMPLICATED">
                <div>
                  <div>Yo</div>
                  <div>Whatup</div>
                </div>
              </div>
            }
            // label="Email"
            id="email"
            isRequired
          />
          <Input
            type="tel"
            value={user.phone}
            onChange={(v) => setUser((prev: {}) => ({ ...prev, ['phone']: v }))}
            label="phone"
            id="phone"
            shouldValidate
            validationType={(v: string) =>
              /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(v)
            }
          />
          <Input
            label="Address"
            type="text"
            id="address"
            placeholder="1234 Park Place"
            value={user.address}
            isRequired
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['address']: v }))
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
              setUser((prev: {}) => ({ ...prev, ['addressTwo']: v }))
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
              setUser((prev: {}) => ({ ...prev, ['zipcode']: v }))
            }
            validationType={(v: string) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v)}
            col={6}
            autocomplete="on"
          />
          <DatePicker
            startDate={new Date('01/01/1990')}
            label="Date of birth"
            id="dob"
            onChange={(v) => setUser((prev: {}) => ({ ...prev, ['dob']: v }))}
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
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['gender']: v }))
            }
            options={[
              { label: 'Male' },
              { label: 'Female' },
              { label: 'other' },
            ]}
            col={6}
            isRequired
          />
          <Input
            type="password"
            value={user.password}
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['password']: v }))
            }
            label="Password"
            id="password"
            isRequired
          />
          <Input
            type="password"
            value={user.passwordConfirm}
            onChange={(v) =>
              setUser((prev: {}) => ({ ...prev, ['passwordConfirm']: v }))
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
            onChange={(v: any) =>
              setUser((prev: {}) => ({ ...prev, ['food']: v }))
            }
          />
          <Checkbox
            label={
              <div
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '16px',
                  padding: '2rem',
                }}
              >
                <main>
                  <aside>
                    <label>
                      Please confirm that you have read the{' '}
                      <a href="#">Terms of Service</a>
                    </label>
                  </aside>
                </main>
              </div>
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
    </div>
  )
}
