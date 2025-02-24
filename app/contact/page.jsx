import Container from '@component/Container'
import Form from '@component/Form'

export default function ContactPage() {
  const fields = [
    { id: 'name', label: 'Your Name', type: 'text', required: true },
    { id: 'email', label: 'Email Address', type: 'email', required: true },
    { id: 'message', label: 'Message', type: 'textarea', required: true }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle contact form submission
  }

  return (
    <Container>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <Form 
              fields={fields}
              onSubmit={handleSubmit}
              submitText="Send Message"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Our Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Address:</strong><br />
                123 Main Street<br />
                City, Country 12345
              </p>
              <p>
                <strong>Phone:</strong><br />
                +1 (234) 567-8900
              </p>
              <p>
                <strong>Email:</strong><br />
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
