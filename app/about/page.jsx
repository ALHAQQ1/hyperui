import Container from '@component/Container'

export default function AboutPage() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to providing innovative solutions that empower our users
              to achieve their goals efficiently and effectively.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of passionate professionals with diverse expertise,
              working together to deliver exceptional products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Commitment to excellence</li>
              <li>Customer-centric approach</li>
              <li>Continuous innovation</li>
              <li>Integrity and transparency</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  )
}
