import { NavLink } from "react-router";
import { ThemeToggle } from "@/features/theme";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    { name: "App", to: "/app" },
    { name: "Feature One", to: "/app/feature-one" },
    { name: "Feature Two", to: "/app/feature-two" },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 border-r bg-black text-white flex flex-col">
        <div className="h-16 flex items-center px-4 font-bold">Logo</div>

        <nav className="flex flex-col gap-2 p-2 flex-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-gray-800" : "hover:bg-gray-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-700 p-2">
          <ThemeToggle />
        </div>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="h-14 border-b flex items-center px-4">Header</header>

        {/* Content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
