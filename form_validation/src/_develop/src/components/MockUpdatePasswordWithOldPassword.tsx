import React from 'react'
import { Form, Input } from '../../../components/FormComponents'

export const MockUpdatePasswordWithOldPassword = function () {
  const [pass, setPass] = React.useState({
    oldPassword: '',
    newPassword: '',
    passwordConfirm: '',
  })

  const handleChange = (e: any) => {
    console.log('e ==>', e)

    const { name, value } = e.target
    setPass((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="row" style={{ padding: '4rem' }}>
      <Form
        colorTheme="light"
        onSubmit={(_, v) => (v ? alert('Good Job') : alert('NOPE'))}
        // ? This is needed to prevent the old password
        // ? from being checked for equal value agains the new password
        excludeFieldFromConfirmPassword={'old-password'}
        noValidate
      >
        <Input
          type="password"
          value={pass.oldPassword}
          name="oldPassword"
          onChange={handleChange}
          label="Old Password"
          id="old-password"
          isRequired
          shouldValidate={false}
        />
        <Input
          type="password"
          value={pass.newPassword}
          name="newPassword"
          onChange={handleChange}
          label="New Password"
          id="new-password"
          isRequired
        />
        <Input
          type="password"
          value={pass.passwordConfirm}
          name="passwordConfirm"
          onChange={handleChange}
          label="Confirm New Password"
          id="confirm-new-password"
          isRequired
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
