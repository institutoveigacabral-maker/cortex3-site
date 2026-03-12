import Section from "@/react-app/components/ui/Section";
import Heading from "@/react-app/components/ui/Heading";
import Text from "@/react-app/components/ui/Text";
import Button from "@/react-app/components/ui/Button";
import List, { ListItem } from "@/react-app/components/ui/List";

interface ContactBlockProps {
  heading: string;
  body: string;
  listItems: string[];
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}

export default function ContactBlock({
  heading,
  body,
  listItems,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: ContactBlockProps) {
  const colors = ["purple", "orange", "indigo"] as const;

  return (
    <Section id="contact-section" variant="dark">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-slate-800/50 rounded-2xl p-12">
          <Heading variant="h3" centered className="mb-6">
            {heading}
          </Heading>

          <Text className="mb-8 text-center">{body}</Text>

          <div className="bg-slate-900/50 rounded-xl p-8 mb-10">
            <List>
              {listItems.map((item, index) => (
                <ListItem key={index} color={colors[index % colors.length]}>
                  {item}
                </ListItem>
              ))}
            </List>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href={primaryButtonHref}>
              {primaryButtonLabel}
            </Button>
            <Button variant="secondary" href={secondaryButtonHref}>
              {secondaryButtonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
