import { useState } from 'react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.name.trim().length < 2 || formData.name.trim().length > 40) {
      setError('Please enter a valid name.');
      return;
    }
    if (formData.phone.trim().length < 10 || formData.phone.trim().length > 15) {
      setError('Please enter a valid phone number.');
      return;
    }
    if (!formData.service) {
      setError('Please select a service.');
      return;
    }
    if (formData.message.trim().length < 8) {
      setError('Please provide a few details about your request.');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phoneNumber: formData.phone.trim(),
      service: formData.service,
      description: formData.message.trim(),
    };

    try {
      setLoading(true);
      const response = await fetch('https://ecotemp-instance.azurewebsites.net/api/service-requests', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Service request failed');
      }

      setFormData({ name: '', phone: '', service: '', message: '' });
      setSuccess('Thanks, your request was sent. We will contact you shortly.');
    } catch {
      setError('Unable to submit right now. Please call us at (417) 576-2152.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-teal-200">
            Get in touch
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Tell us what you need, we will follow up quickly.</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Need a repair, replacement quote, or maintenance visit? Send your request and our team will coordinate the next step.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/15 bg-slate-800/70 p-6 md:p-8">
            {error && <p className="mb-4 rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</p>}
            {success && <p className="mb-4 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="h-11 border-slate-600 bg-slate-950/50 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="417-555-1234"
                  className="h-11 border-slate-600 bg-slate-950/50 text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">
                  Service Needed *
                </label>
                <Select value={formData.service} onValueChange={handleServiceChange} required>
                  <SelectTrigger className="h-11 border-slate-600 bg-slate-950/50 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air-conditioning">Air conditioning service</SelectItem>
                    <SelectItem value="heating">Heating service</SelectItem>
                    <SelectItem value="air-quality">Indoor air quality</SelectItem>
                    <SelectItem value="maintenance">Maintenance plan</SelectItem>
                    <SelectItem value="replacement">System replacement</SelectItem>
                    <SelectItem value="commercial">Commercial HVAC support</SelectItem>
                    <SelectItem value="estimate">Project estimate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What issue are you experiencing and where are you located?"
                  rows={5}
                  className="border-slate-600 bg-slate-950/50 text-white placeholder:text-slate-400"
                />
              </div>
              <Button type="submit" size="lg" className="h-11 w-full rounded-full bg-teal-500 text-slate-900 hover:bg-teal-400" disabled={loading}>
                {loading ? 'Sending request...' : 'Submit Request'}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="mr-3 h-5 w-5 text-teal-300" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:417-576-2152" className="text-2xl font-semibold text-white hover:text-teal-200">
                  (417) 576-2152
                </a>
                <p className="mt-2 text-slate-300">Best option for urgent comfort issues.</p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Mail className="mr-3 h-5 w-5 text-teal-300" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:requests@ecotempmech.com" className="text-lg font-semibold text-white hover:text-teal-200">
                  requests@ecotempmech.com
                </a>
                <p className="mt-2 text-slate-300">Share plans or details for larger jobs.</p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-3 h-5 w-5 text-teal-300" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Monday-Friday: 8:00 AM-5:00 PM</p>
                <p className="mt-2 text-slate-300">Serving Springfield and surrounding southwest Missouri communities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
