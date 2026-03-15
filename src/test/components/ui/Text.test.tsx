import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Text from "@/react-app/components/ui/Text";

describe("Text", () => {
  it("renders children text", () => {
    render(<Text>Paragraph content</Text>);
    expect(screen.getByText("Paragraph content")).toBeInTheDocument();
  });

  it("applies body variant classes by default", () => {
    render(<Text>Default body</Text>);
    const el = screen.getByText("Default body");
    expect(el.className).toContain("text-lg");
  });

  it("applies body-lg variant classes", () => {
    render(<Text variant="body-lg">Large body</Text>);
    const el = screen.getByText("Large body");
    expect(el.className).toContain("text-xl");
  });

  it("applies caption variant classes", () => {
    render(<Text variant="caption">Caption text</Text>);
    const el = screen.getByText("Caption text");
    expect(el.className).toContain("text-sm");
    expect(el.className).toContain("text-slate-400");
  });

  it("renders as a p element", () => {
    render(<Text>Check tag</Text>);
    const el = screen.getByText("Check tag");
    expect(el.tagName).toBe("P");
  });
});
