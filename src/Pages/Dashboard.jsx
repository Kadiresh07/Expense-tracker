import { useState } from "react";
import Header from "../Components/Header";
import SummaryCards from "../Components/SummamyCard";
import ExpenseChart from "../Components/ExpenseChart";
import ExpenseForm from "../Components/Expenseform";
import ExpenseList from "../Components/Expenselist";

const initialExpenses = [
  { id: 1, title: "Groceries", amount: 1420, category: "Food", date: "2026-05-15", paymentMode: "Card" },
  { id: 2, title: "Internet Bill", amount: 999, category: "Bills", date: "2026-05-14", paymentMode: "UPI" },
  { id: 3, title: "Mechanical Keyboard", amount: 2799, category: "Shopping", date: "2026-05-12", paymentMode: "Card" },
  { id: 4, title: "Metro Pass", amount: 500, category: "Transport", date: "2026-05-10", paymentMode: "Cash" },
];

function Dashboard({ onMenuClick }) {
  const [expenses, setExpenses] = useState(initialExpenses);

  const handleAdd = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={onMenuClick} />

      <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
        {/* Summary cards */}
        <SummaryCards />

        {/* Main grid: chart left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Chart — takes 3/5 on large screens */}
          <div className="lg:col-span-3">
            <ExpenseChart />
          </div>

          {/* Form — takes 2/5 on large screens */}
          <div className="lg:col-span-2">
            <ExpenseForm onAdd={handleAdd} />
          </div>
        </div>

        {/* Recent expenses full width */}
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}

export default Dashboard;
