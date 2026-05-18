const navItems = [
  { label: "Dashboard", icon: "⊞", active: true },
  { label: "Transactions", icon: "↗" },
  { label: "Analytics", icon: "◎" },
  { label: "Budgets", icon: "◇" },
  { label: "Settings", icon: "⚙" },
];

const quickFilters = [
  { label: "This month", icon: "₹" },
  { label: "Recurring", icon: "✓" },
  { label: "Needs review", icon: "!" },
];

function Sidebar({ open, onClose }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 flex flex-col
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0 lg:flex lg:shrink-0
      `}
    >
      {/* Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <div>
            <div className="font-bold text-gray-900 text-lg leading-tight">Spendly</div>
            <div className="text-xs text-gray-400">Expense tracker UI</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-4 flex-1 overflow-y-auto">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2">Menu</p>
        <ul className="space-y-1 mb-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${item.active
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-2">Quick Filters</p>
        <ul className="space-y-1 mb-6">
          {quickFilters.map((f) => (
            <li key={f.label}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                <span className="text-base">{f.icon}</span>
                {f.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Budget health */}
      <div className="m-4 p-4 bg-teal-700 rounded-xl text-white">
        <p className="font-semibold text-sm mb-1">Budget health</p>
        <p className="text-xs text-teal-100 mb-3">
          You spent 72% of your monthly budget with 12 days remaining.
        </p>
        <div className="w-full bg-teal-500 rounded-full h-1.5 mb-3">
          <div className="bg-white h-1.5 rounded-full" style={{ width: "72%" }} />
        </div>
        <button className="w-full bg-white text-teal-700 text-xs font-semibold py-1.5 rounded-lg hover:bg-teal-50 transition-colors">
          View budget
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
