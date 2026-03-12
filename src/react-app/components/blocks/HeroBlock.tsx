import Heading from "@/react-app/components/ui/Heading";
import Text from "@/react-app/components/ui/Text";
import Button from "@/react-app/components/ui/Button";
import Stack from "@/react-app/components/ui/Stack";

interface HeroBlockProps {
  heading: string;
  body: string;
  caption: string;
  primaryButtonLabel: string;
  primaryButtonAction: () => void;
  secondaryButtonLabel: string;
  secondaryButtonAction: () => void;
}

export default function HeroBlock({
  heading,
  body,
  caption,
  primaryButtonLabel,
  primaryButtonAction,
  secondaryButtonLabel,
  secondaryButtonAction,
}: HeroBlockProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Coluna Esquerda - 60% */}
          <div className="lg:col-span-3">
            <Stack>
              <Heading variant="display">{heading}</Heading>
              <Text variant="body-lg">{body}</Text>
              <Text variant="caption">{caption}</Text>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="primary" onClick={primaryButtonAction}>
                  {primaryButtonLabel}
                </Button>
                <Button variant="secondary" onClick={secondaryButtonAction}>
                  {secondaryButtonLabel}
                </Button>
              </div>
            </Stack>
          </div>

          {/* Coluna Direita - 40% */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-3xl backdrop-blur-sm border border-slate-800/50" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl animate-pulse" />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full grid grid-cols-8 grid-rows-8 gap-4 p-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-slate-700/50 rounded"
                      style={{
                        animationDelay: `${i * 0.05}s`,
                        animation: "pulse 3s ease-in-out infinite",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
