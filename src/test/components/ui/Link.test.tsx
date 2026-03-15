import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Link from "@/react-app/components/ui/Link";

describe("Link", () => {
  it("renders children with arrow suffix", () => {
    render(<Link href="/test">Learn more</Link>);
    const link = screen.getByRole("link");
    expect(link.textContent).toContain("Learn more");
    expect(link.textContent).toContain("→");
  });

  it("sets href attribute", () => {
    render(<Link href="/portfolio">Portfolio</Link>);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/portfolio");
  });

  it("applies custom className", () => {
    render(
      <Link href="#" className="extra">
        Styled
      </Link>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("extra");
  });
});
