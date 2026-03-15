import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Heading from "@/react-app/components/ui/Heading";

describe("Heading", () => {
  it("renders children text", () => {
    render(<Heading>Hello World</Heading>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("applies h2 variant classes by default", () => {
    render(<Heading>Default</Heading>);
    const el = screen.getByText("Default");
    expect(el.className).toContain("text-4xl");
  });

  it("applies display variant classes", () => {
    render(<Heading variant="display">Display</Heading>);
    const el = screen.getByText("Display");
    expect(el.className).toContain("text-5xl");
    expect(el.className).toContain("lg:text-7xl");
  });

  it("applies centered class when centered prop is true", () => {
    render(<Heading centered>Centered</Heading>);
    const el = screen.getByText("Centered");
    expect(el.className).toContain("text-center");
  });

  it("does not apply centered class by default", () => {
    render(<Heading>Not Centered</Heading>);
    const el = screen.getByText("Not Centered");
    expect(el.className).not.toContain("text-center");
  });
});
