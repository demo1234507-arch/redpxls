import { useRef, useState } from "react";

type LeadFormProps = {
  source: "Lead Modal" | "Contact Page";
  buttonText?: string;
};

const serviceOptions = [
  "Website Development",
  "Landing Page",
  "Video Editing",
  "Podcast Editing",
  "Motion Graphics",
  "Lead Generation System",
  "Automation / CRM Setup",
  "Other",
];

const budgetOptions = [
  "Less than $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

const timelineOptions = [
  "Immediately",
  "Within 1 week",
  "Within 2-4 weeks",
  "Within 1-2 months",
  "Just exploring",
];

export default function LeadForm({
  source,
  buttonText = "Submit",
}: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_WEB_APP_URL;

  function handleSubmit() {
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      formRef.current?.reset();
    }, 1800);
  }

  if (!scriptUrl) {
    return (
      <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        Missing VITE_APPS_SCRIPT_WEB_APP_URL in .env file
      </p>
    );
  }

  return (
    <>
      <iframe
        name="lead-form-hidden-iframe"
        className="hidden"
        title="Lead Form Hidden Iframe"
      />

      <form
        ref={formRef}
        action={scriptUrl}
        method="POST"
        target="lead-form-hidden-iframe"
        onSubmit={handleSubmit}
        className="w-full space-y-4"
      >
        <input type="hidden" name="source" value={source} />
        <input type="hidden" name="pageUrl" value={window.location.href} />
        <input type="hidden" name="userAgent" value={navigator.userAgent} />

        <div className="hidden">
          <input name="websiteTrap" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Full Name *</label>
          <input
            name="fullName"
            required
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            WhatsApp / Phone *
          </label>
          <input
            name="whatsapp"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Company / Brand Name
          </label>
          <input
            name="company"
            placeholder="Company or brand name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Website / Social Link
          </label>
          <input
            name="website"
            placeholder="https://example.com"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Service Needed *
          </label>
          <select
            name="serviceNeeded"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          >
            <option value="" disabled>
              Select service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Budget *</label>
          <select
            name="budget"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          >
            <option value="" disabled>
              Select budget
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">Timeline *</label>
          <select
            name="timeline"
            required
            defaultValue=""
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          >
            <option value="" disabled>
              Select timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Project Details *
          </label>
          <textarea
            name="projectDetails"
            required
            rows={5}
            placeholder="Tell us what you need, your goal, reference links, and expected outcome."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : buttonText}
        </button>

        {submitted && (
          <p className="text-sm font-medium text-green-700">
            Submitted successfully. We will contact you soon.
          </p>
        )}
      </form>
    </>
  );
}