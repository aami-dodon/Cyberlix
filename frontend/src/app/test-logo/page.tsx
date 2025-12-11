import { BackgroundGrid } from "@/components/ui/background-grid";
import { CynalitxLogo } from "@/components/ui/logo";
import testLogoContent from "@/content/test-logo.json";

const brandName = testLogoContent.brand;

const logoSizeClasses: Record<string, string> = {
  default: "h-12 w-12",
  large: "h-32 w-32",
  withText: "h-8 w-8",
};

function getSectionClasses(background: string) {
  return background === "light"
    ? {
        container: "bg-white text-black",
        muted: "text-gray-500",
      }
    : {
        container: "bg-black text-white",
        muted: "text-gray-400",
      };
}

export default function TestLogoPage() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {testLogoContent.sections.map((section) => {
        const { container, muted } = getSectionClasses(section.background);
        return (
          <div
            key={section.mode}
            className={`relative overflow-hidden ${container} p-10`}
          >
            <BackgroundGrid />
            <div className="relative z-10 flex flex-col items-center gap-10">
              <h2 className="text-xl font-bold mb-4">{section.mode}</h2>
              {section.examples.map((example) => (
                <div key={example.label} className="flex flex-col items-center gap-4">
                  <p className={`text-sm ${muted}`}>{example.label}</p>
                  {example.variant === "withText" ? (
                    <div className="flex items-center gap-2">
                      <CynalitxLogo
                        className={`${logoSizeClasses[example.variant] ?? logoSizeClasses.default} text-[var(--primary)]`}
                      />
                      <span className="text-lg font-bold">{brandName}</span>
                    </div>
                  ) : (
                    <CynalitxLogo
                      className={`${logoSizeClasses[example.variant] ?? logoSizeClasses.default} text-[var(--primary)]`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
