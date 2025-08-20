import { useState } from 'react';
import Button from './Button';
import analytics from '../utils/analytics';

const DemoForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            setTimeout(() => {
                analytics.trackFormSubmission('demo_request', true);
                onSubmit(formData);
                setIsSubmitting(false);
                onClose();
            }, 1500);
        } catch (error) {
            analytics.trackFormSubmission('demo_request', false);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-900  focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-900  focus:outline-none transition-colors"
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Company/Channel Name
                </label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-900  focus:outline-none transition-colors"
                    placeholder="Your company or channel name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-900  focus:outline-none transition-colors"
                    placeholder="Your phone number"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Tell us about your streaming goals
                </label>
                <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-900  focus:outline-none transition-colors resize-none"
                    placeholder="What are you looking to achieve with your streams?"
                />
            </div>

            <div className="flex gap-3 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                    trackingName="demo_form_cancel"
                    trackingLocation="demo_modal"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    className="flex-1"
                    disabled={isSubmitting}
                    trackingName="demo_form_submit"
                    trackingLocation="demo_modal"
                >
                    {isSubmitting ? 'Scheduling Demo...' : 'Request Demo'}
                </Button>
            </div>
        </form>
    );
};

export default DemoForm;