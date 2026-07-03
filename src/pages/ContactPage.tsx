import LeadForm from "../components/LeadForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl mt-10 px-4 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-gray-600">
          Tell us what you need. Once you submit the form, we will review your
          project and contact you.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <LeadForm source="Contact Page" buttonText="Send Message" />
      </div>
    </main>
  );
}