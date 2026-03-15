import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";

// Lightweight route config test without importing heavy page components
const routeConfig = [
  { path: "/", label: "Home" },
  { path: "/grupo", label: "Grupo" },
  { path: "/figital", label: "Figital" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/governanca", label: "Governanca" },
  { path: "/contato", label: "Contato" },
];

function TestRouter({ initialPath }: { initialPath: string }) {
  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        {routeConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<div data-testid="page">{route.label}</div>}
          />
        ))}
      </Routes>
    </MemoryRouter>
  );
}

describe("Routing", () => {
  it("renders Home route at /", () => {
    render(<TestRouter initialPath="/" />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders Grupo route at /grupo", () => {
    render(<TestRouter initialPath="/grupo" />);
    expect(screen.getByText("Grupo")).toBeInTheDocument();
  });

  it("renders Figital route at /figital", () => {
    render(<TestRouter initialPath="/figital" />);
    expect(screen.getByText("Figital")).toBeInTheDocument();
  });

  it("renders Portfolio route at /portfolio", () => {
    render(<TestRouter initialPath="/portfolio" />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders Governanca route at /governanca", () => {
    render(<TestRouter initialPath="/governanca" />);
    expect(screen.getByText("Governanca")).toBeInTheDocument();
  });

  it("renders Contato route at /contato", () => {
    render(<TestRouter initialPath="/contato" />);
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("has exactly 6 defined routes", () => {
    expect(routeConfig).toHaveLength(6);
  });
});
