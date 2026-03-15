import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/react-app/components/ui/Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a button element by default", () => {
    render(<Button>Action</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders as an anchor when href is provided", () => {
    render(<Button href="/contato">Link</Button>);
    const link = screen.getByRole("link", { name: "Link" });
    expect(link).toHaveAttribute("href", "/contato");
  });

  it("calls onClick handler when clicked", () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("from-orange-500");
  });

  it("applies secondary variant classes", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border-slate-700");
    expect(btn.className).toContain("bg-transparent");
  });

  it("applies ghost variant classes", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-transparent");
  });

  it("applies custom className", () => {
    render(<Button className="my-custom">Custom</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("my-custom");
  });
});
