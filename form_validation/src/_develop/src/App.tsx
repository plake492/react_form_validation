import * as React from 'react'

import { MockSignup } from './components/MockSignup'
import { MockUpdatePasswordWithOldPassword } from './components/MockUpdatePasswordWithOldPassword'

export default function App() {
  return (
    <main className="bg-grey-30">
      <section style={{ backgroundColor: '#222' }}>
        <MockSignup />
      </section>
      <section style={{ backgroundColor: '#ddd' }}>
        <MockUpdatePasswordWithOldPassword />
      </section>
    </main>
  )
}
