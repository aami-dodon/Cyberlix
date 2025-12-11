import { CynalitxLogo } from "@/components/ui/logo";

export default function TestLogoPage() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Light Mode Preview */}
      <div className="bg-white text-black p-10 flex flex-col items-center gap-10">
        <h2 className="text-xl font-bold mb-4">Light Mode</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">Default (Color inherited)</p>
          <CynalitxLogo className="h-12 w-12 text-[var(--primary)]" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">Large</p>
          <CynalitxLogo className="h-32 w-32 text-[var(--primary)]" />
        </div>
        <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">With Text</p>
            <div className="flex items-center gap-2">
                <CynalitxLogo className="h-8 w-8 text-[var(--primary)]" />
                <span className="text-lg font-bold">Cynalitx</span>
            </div>
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div className="bg-black text-white p-10 flex flex-col items-center gap-10">
        <h2 className="text-xl font-bold mb-4">Dark Mode</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">Default (Color inherited)</p>
          <CynalitxLogo className="h-12 w-12 text-[var(--primary)]" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">Large</p>
          <CynalitxLogo className="h-32 w-32 text-[var(--primary)]" />
        </div>
         <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">With Text</p>
            <div className="flex items-center gap-2">
                <CynalitxLogo className="h-8 w-8 text-[var(--primary)]" />
                <span className="text-lg font-bold">Cynalitx</span>
            </div>
        </div>
      </div>
    </div>
  );
}
