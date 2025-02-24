import Container from '@component/Container'
import Form from '@component/Form'

export default function LoginPage() {
  const fields = [
    { id: 'email', label: 'Email Address', type: 'email', required: true },
    { id: 'password', label: 'Password', type: 'password', required: true }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login submission
  }

  return (
    <Container>
      <div className="max-w-md mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <Form 
          fields={fields}
          onSubmit={handleSubmit}
          submitText="Login"
        />
        <div className="mt-4 text-center">
          <a href="/register" className="text-blue-600 hover:underline">
            Don&apos;t have an account? Register here
          </a>

        </div>
      </div>
    </Container>
  )
}
