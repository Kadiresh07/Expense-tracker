const cards = [
  {
    title: "Total balance",
    value: "₹84,240",
    badge: "+8.2%",
    badgeColor: "bg-green-100 text-green-700",
    sub: "Compared to last month",
  },
  {
    title: "Total expenses",
    value: "₹21,480",
    badge: "+12.4%",
    badgeColor: "bg-red-100 text-red-600",
    sub: "18 transactions this month",
  },
  {
    title: "Savings goal",
    value: "₹17,000",
    badge: "68%",
    badgeColor: "bg-green-100 text-green-700",
    sub: "₹8,000 left to target",
  },
  {
    title: "Top category",
    value: "₹6,420",
    badge: "Food",
    badgeColor: "bg-yellow-100 text-yellow-700",
    sub: "29% of monthly spend",
  },
];

function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">{card.title}</p>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
              {card.badge}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">{card.value}</p>
          <p className="text-xs text-gray-400">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
