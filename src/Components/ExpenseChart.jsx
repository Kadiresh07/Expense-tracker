// Simple bar chart using pure CSS/SVG — no extra dependencies needed
const weekData = [
  { day: "Mon", amount: 2400 },
  { day: "Tue", amount: 1800 },
  { day: "Wed", amount: 2200 },
  { day: "Thu", amount: 1650 },
  { day: "Fri", amount: 3200 },
  { day: "Sat", amount: 2700 },
  { day: "Sun", amount: 2100 },
];

const max = Math.max(...weekData.map((d) => d.amount));

function ExpenseChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Expense analytics</h3>
          <p className="text-sm text-gray-400">Weekly spend overview across categories.</p>
        </div>
        <button className="text-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-600">
          Export report
        </button>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-2 h-40">
        {weekData.map((d) => {
          const heightPct = Math.round((d.amount / max) * 100);
          return (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
              <div className="relative w-full flex items-end justify-center" style={{ height: "120px" }}>
                <div
                  className="w-full bg-teal-600 rounded-t-md group-hover:bg-teal-500 transition-colors cursor-pointer"
                  style={{ height: `${heightPct}%` }}
                  title={`₹${d.amount.toLocaleString()}`}
                />
              </div>
              <span className="text-xs text-gray-400">{d.day}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-gray-100">
        <div>
          <p className="text-sm text-gray-500 mb-1">Average daily spend</p>
          <p className="text-2xl font-bold text-gray-900">₹716</p>
          <p className="text-xs text-gray-400">Stable over the last 7 days</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Highest spend day</p>
          <p className="text-2xl font-bold text-gray-900">Friday</p>
          <p className="text-xs text-gray-400">Shopping and dining activity</p>
        </div>
      </div>
    </div>
  );
}

export default ExpenseChart;
