import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Stack from "@/react-app/components/ui/Stack";

describe("Stack", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Stack>
        <p>Stacked item</p>
      </Stack>,
    );
    expect(getByText("Stacked item")).toBeInTheDocument();
  });

  it("applies space-y-6 by default", () => {
    const { container } = render(
      <Stack>
        <p>A</p>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass("space-y-6");
  });

  it("applies custom gap", () => {
    const { container } = render(
      <Stack gap={4}>
        <p>A</p>
      </Stack>,
    );
    expect(container.firstChild).toHaveClass("space-y-4");
  });
});
