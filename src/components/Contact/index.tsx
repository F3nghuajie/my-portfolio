import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData: any = {};
    new FormData(form).forEach((v, k) => (formData[k] = v));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-12 px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="flex flex-col text-sm text-gray-200">
            <span className="mb-1">Name</span>
            <input name="name" required className="rounded-md bg-white/5 p-2 text-white" />
          </label>

          <label className="flex flex-col text-sm text-gray-200">
            <span className="mb-1">Email</span>
            <input name="email" type="email" required className="rounded-md bg-white/5 p-2 text-white" />
          </label>

          <label className="flex flex-col text-sm text-gray-200">
            <span className="mb-1">Message</span>
            <textarea name="message" rows={6} required className="rounded-md bg-white/5 p-2 text-white" />
          </label>

          {/* Honeypot */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <div className="flex gap-3">
            <button type="submit" disabled={status === 'sending'} className="px-4 py-2 rounded bg-primary text-white">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <span className="text-green-400">Message sent — thanks!</span>}
            {status === 'error' && <span className="text-red-400">Failed to send. Try again later.</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
