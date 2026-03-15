import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/react-app/components/ui/Card";

describe("Card", () => {
  it("renders title when provided", () => {
    render(<Card title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders overline when provided", () => {
    render(<Card overline="Category" />);
    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<Card subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });

  it("renders body text when provided", () => {
    render(<Card body="Body description here" />);
    expect(screen.getByText("Body description here")).toBeInTheDocument();
  });

  it("renders children content", () => {
    render(
      <Card>
        <span>Child content</span>
      </Card>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("does not render overline element when not provided", () => {
    const { container } = render(<Card title="Only Title" />);
    const overlines = container.querySelectorAll(".text-purple-400.text-sm");
    expect(overlines.length).toBe(0);
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="extra-class" />);
    expect(container.firstChild).toHaveClass("extra-class");
  });
});
