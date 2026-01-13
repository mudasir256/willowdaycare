'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const mailtoLink = `mailto:willowdaycare12@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contact Form Submission'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      }, 1000)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-bg-light p-10 rounded-xl shadow-md">
      <h2 className="text-primary-green text-3xl mb-2">Send us a Message</h2>
      <p className="text-text-dark text-lg mb-8 leading-relaxed">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      {submitStatus === 'success' && (
        <div className="p-4 mb-5 rounded-lg bg-green-100 text-green-800 border border-green-300 font-semibold">
          <p>✓ Thank you! Your message has been sent. We&apos;ll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 mb-5 rounded-lg bg-red-100 text-red-800 border border-red-300 font-semibold">
          <p>✗ Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-text-dark font-semibold mb-2">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="p-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-text-dark focus:outline-none focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-text-dark font-semibold mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="p-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-text-dark focus:outline-none focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-text-dark font-semibold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+44 1234 567890"
              className="p-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-text-dark focus:outline-none focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="text-text-dark font-semibold mb-2">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-text-dark cursor-pointer focus:outline-none focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)]"
            >
              <option value="">Select a subject</option>
              <option value="enquiry">General Enquiry</option>
              <option value="enrollment">Enrollment Information</option>
              <option value="visit">Schedule a Visit</option>
              <option value="jobs">Job Opportunities</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-text-dark font-semibold mb-2">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Tell us how we can help you..."
            className="p-3 border-2 border-gray-200 rounded-lg text-base font-sans transition-all duration-300 bg-white text-text-dark resize-y min-h-[120px] focus:outline-none focus:border-primary-green focus:shadow-[0_0_0_3px_rgba(74,124,89,0.1)]"
          />
        </div>

        <button
          type="submit"
          className="btn self-start mt-2 px-10 py-3.5 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
