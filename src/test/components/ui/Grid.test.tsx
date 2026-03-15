import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Grid from "@/react-app/components/ui/Grid";

describe("Grid", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("applies 2-column grid by default", () => {
    const { container } = render(
      <Grid>
        <div>A</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("md:grid-cols-2");
  });

  it("applies 3-column grid", () => {
    const { container } = render(
      <Grid cols={3}>
        <div>A</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("md:grid-cols-3");
  });

  it("applies 4-column grid with responsive classes", () => {
    const { container } = render(
      <Grid cols={4}>
        <div>A</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("lg:grid-cols-4");
  });

  it("uses gap-6 by default", () => {
    const { container } = render(
      <Grid>
        <div>A</div>
      </Grid>,
    );
    expect(container.firstChild).toHaveClass("gap-6");
  });
});
