import Container from '@component/Container'
import Form from '@component/Form'

export default function RegisterPage() {
  const fields = [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'email', label: 'Email Address', type: 'email', required: true },
    { id: 'password', label: 'Password', type: 'password', required: true },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Container>
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>
        <Form 
          fields={fields}
          onSubmit={handleSubmit}
          submitText="Register"
        />
      </div>
    </Container>
  )
}
