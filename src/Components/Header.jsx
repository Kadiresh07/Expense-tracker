function Header({ onMenuClick, onAddExpense }) {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between gap-4">
      {/* Hamburger for mobile */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Expense dashboard</h1>
        <p className="text-sm text-gray-400 hidden sm:block">
          Track spending, add expenses, and review category trends on one page.
        </p>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-400 w-48">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          Search expenses
        </div>

        {/* Dark mode toggle placeholder */}
        <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors">
          ◑
        </button>

        {/* Add expense */}
        <button
          onClick={onAddExpense}
          className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors whitespace-nowrap"
        >
          + Add expense
        </button>
      </div>
    </header>
  );
}

export default Header;
