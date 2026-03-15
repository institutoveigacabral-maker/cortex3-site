import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import List, { ListItem } from "@/react-app/components/ui/List";

describe("List", () => {
  it("renders children list items", () => {
    render(
      <List>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
      </List>,
    );
    expect(screen.getByText("First item")).toBeInTheDocument();
    expect(screen.getByText("Second item")).toBeInTheDocument();
  });

  it("renders as ul element", () => {
    const { container } = render(
      <List>
        <li>Item</li>
      </List>,
    );
    expect(container.querySelector("ul")).toBeTruthy();
  });
});

describe("ListItem", () => {
  it("renders children text", () => {
    render(
      <ul>
        <ListItem>Item content</ListItem>
      </ul>,
    );
    expect(screen.getByText("Item content")).toBeInTheDocument();
  });

  it("applies purple color bullet by default", () => {
    const { container } = render(
      <ul>
        <ListItem>Purple item</ListItem>
      </ul>,
    );
    const bullet = container.querySelector(".bg-purple-500");
    expect(bullet).toBeTruthy();
  });

  it("applies orange color bullet", () => {
    const { container } = render(
      <ul>
        <ListItem color="orange">Orange item</ListItem>
      </ul>,
    );
    const bullet = container.querySelector(".bg-orange-500");
    expect(bullet).toBeTruthy();
  });

  it("applies indigo color bullet", () => {
    const { container } = render(
      <ul>
        <ListItem color="indigo">Indigo item</ListItem>
      </ul>,
    );
    const bullet = container.querySelector(".bg-indigo-500");
    expect(bullet).toBeTruthy();
  });
});
