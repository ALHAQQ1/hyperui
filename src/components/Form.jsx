export default function Form({ fields, onSubmit, submitText }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required={field.required}
              rows="4"
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required={field.required}
            />
          )}

        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        {submitText}
      </button>
    </form>
  )
}
