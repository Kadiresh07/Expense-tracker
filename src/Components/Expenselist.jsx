const categoryColors = {
  Food: "bg-yellow-100 text-yellow-700",
  Shopping: "bg-purple-100 text-purple-700",
  Transport: "bg-blue-100 text-blue-700",
  Health: "bg-red-100 text-red-600",
  Entertainment: "bg-pink-100 text-pink-700",
  Bills: "bg-orange-100 text-orange-700",
  Other: "bg-gray-100 text-gray-600",
};

const defaultExpenses = [
  { id: 1, title: "Groceries", amount: 1420, category: "Food", date: "2026-05-15", paymentMode: "Card" },
  { id: 2, title: "Internet Bill", amount: 999, category: "Bills", date: "2026-05-14", paymentMode: "UPI" },
  { id: 3, title: "Mechanical Keyboard", amount: 2799, category: "Shopping", date: "2026-05-12", paymentMode: "Card" },
  { id: 4, title: "Metro Pass", amount: 500, category: "Transport", date: "2026-05-10", paymentMode: "Cash" },
];

function ExpenseList({ expenses = defaultExpenses }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Recent expenses</h3>
          <p className="text-xs text-gray-400">Latest logged transactions</p>
        </div>
        <button className="text-sm text-teal-600 font-medium hover:underline">View all</button>
      </div>

      <div className="space-y-3">
        {expenses.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-base">
                {item.category === "Food" ? "🍔" :
                 item.category === "Shopping" ? "🛍️" :
                 item.category === "Transport" ? "🚌" :
                 item.category === "Health" ? "💊" :
                 item.category === "Bills" ? "📄" :
                 item.category === "Entertainment" ? "🎬" : "💰"}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-400">{item.date} · {item.paymentMode}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[item.category] || "bg-gray-100 text-gray-600"}`}>
                {item.category}
              </span>
              <span className="text-sm font-bold text-gray-900">₹{item.amount.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
