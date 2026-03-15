import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Section from "@/react-app/components/ui/Section";

describe("Section", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Section>
        <p>Section content</p>
      </Section>,
    );
    expect(getByText("Section content")).toBeInTheDocument();
  });

  it("applies dark variant by default", () => {
    const { container } = render(
      <Section>
        <p>Dark</p>
      </Section>,
    );
    expect(container.firstChild).toHaveClass("bg-slate-950/50");
  });

  it("applies medium variant", () => {
    const { container } = render(
      <Section variant="medium">
        <p>Medium</p>
      </Section>,
    );
    expect(container.firstChild).toHaveClass("bg-slate-900/30");
  });

  it("applies light variant", () => {
    const { container } = render(
      <Section variant="light">
        <p>Light</p>
      </Section>,
    );
    expect(container.firstChild).toHaveClass("bg-slate-900/50");
  });

  it("sets id attribute when provided", () => {
    const { container } = render(
      <Section id="test-section">
        <p>With ID</p>
      </Section>,
    );
    expect(container.querySelector("#test-section")).toBeTruthy();
  });
});
