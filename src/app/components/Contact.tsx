import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    // Handle form submission
    const data = {
      name: formData.name,
      phoneNumber: formData.phone,
      service: formData.service,
      description: formData.message
    }

    //front end validation
    if (formData.name.length < 2 || formData.name.length > 20) {
      setErr("Please enter a valid name.")
      setLoading(false)
      return
    }
    if (formData.phone.length < 10 || formData.phone.length > 15) {
      setErr("Please enter a phone number.")
      setLoading(false)
      return
    }
    if (formData.service == "") {
      setErr("Please select a service.")
      setLoading(false)
      return
    }    

    //back end validation and email sender - validates phone number
    await fetch("https://ecotemp-instance.azurewebsites.net/api/service-requests", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', service: '', message: '' });
    setErr("")
    setLoading(false)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to improve your comfort? Contact us today for a free quote. Serving Springfield and all of Southwest Missouri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <p style={{color: 'red'}}>{err}</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="417-555-5555"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm mb-2">
                  Service Needed *
                </label>
                <Select value={formData.service} onValueChange={handleServiceChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air-conditioning">Air Conditioning</SelectItem>
                    <SelectItem value="heating">Heating Systems</SelectItem>
                    <SelectItem value="air-quality">Air Quality</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="replacement">System Replacement</SelectItem>
                    <SelectItem value="repair">Repair Service</SelectItem>
                    <SelectItem value="consultation">Free Quote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your HVAC needs..."
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:417-576-2152" className="text-lg text-blue-600 hover:underline">
                  (417) 576-2152
                </a>
                <p className="text-gray-600 mt-1">Call us for service inquiries</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:requests@ecotempmech.com" className="text-lg text-blue-600 hover:underline">
                  requests@ecotempmech.com
                </a>
                <p className="text-gray-600 mt-1">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Monday - Friday: 8am - 5pm</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}