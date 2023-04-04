import * as React from 'react';

import MockSignup from './components/TestComponents/MockSignup';
import TestForm from './components/TestComponents/TestForm';
import EventForm from './components/TestComponents/EventForm';

export default function App() {
  return (
    <main>
      <div style={{ backgroundColor: '#343434', padding: '24px 0' }}>
        <TestForm />
      </div>

      <MockSignup />
      <div style={{ backgroundColor: '#121212', padding: '24px 0' }}>
        <EventForm />
      </div>
    </main>
  );
}
