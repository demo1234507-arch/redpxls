import LeadForm from "./LeadForm";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadModal({ open, onClose }: LeadModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl font-bold text-black"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="mb-6 pr-10">
          <h2 className="text-2xl font-bold text-black">
            Tell us about your project
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill this form and our team will get back to you.
          </p>
        </div>

        <LeadForm source="Lead Modal" buttonText="Submit Lead" />
      </div>
    </div>
  );
}