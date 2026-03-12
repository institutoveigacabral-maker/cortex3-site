import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Grid from "@/react-app/components/ui/Grid";

interface Founder {
  title: string;
  subtitle: string;
  body: string;
}

interface FoundersBlockProps {
  heading: string;
  founders: Founder[];
}

export default function FoundersBlock({
  heading,
  founders,
}: FoundersBlockProps) {
  return (
    <Section id="founders" variant="medium">
      <div className="max-w-6xl mx-auto">
        <Heading centered className="mb-12">
          {heading}
        </Heading>

        <Grid cols={3} gap={8}>
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-3xl font-bold text-white">
                  {founder.title.split(" ")[0].charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {founder.title}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-4 text-center">
                {founder.subtitle}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {founder.body}
              </p>
            </div>
          ))}
        </Grid>
      </div>
    </Section>
  );
}
