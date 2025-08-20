import { useState } from 'react';
import Button from './Button';
import analytics from '../utils/analytics';

const TrialForm = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        platform: '',
        experience: ''
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
                analytics.trackFormSubmission('trial_signup', true);
                onSubmit(formData);
                setIsSubmitting(false);
                onClose();
            }, 1500);
        } catch (error) {
            analytics.trackFormSubmission('trial_signup', false);
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
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Primary Streaming Platform
                </label>
                <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                >
                    <option value="">Select platform</option>
                    <option value="twitch">Twitch</option>
                    <option value="youtube">YouTube</option>
                    <option value="trovo">Trovo</option>
                    <option value="tiktok">TikTok</option>
                    <option value="kick">Kick</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Streaming Experience
                </label>
                <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (0-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                    <option value="professional">Professional/Partner</option>
                </select>
            </div>

            <div className="flex gap-3 pt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                    disabled={isSubmitting}
                    trackingName="trial_form_cancel"
                    trackingLocation="trial_modal"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    className="flex-1"
                    disabled={isSubmitting}
                    trackingName="trial_form_submit"
                    trackingLocation="trial_modal"
                >
                    {isSubmitting ? 'Starting Trial...' : 'Start Free Trial'}
                </Button>
            </div>
        </form>
    );
};

export default TrialForm;