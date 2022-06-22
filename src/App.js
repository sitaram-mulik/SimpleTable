import React from "react";
import './App.css';
import BudgetProvider from "./hoc/budgetProvider";
import ErrorBoundary from "./hoc/errorBoundry";
import BudgetTable from './pages/budgetTable';

function App() {
  return (
    <BudgetProvider>
      <ErrorBoundary>
        <BudgetTable />
      </ErrorBoundary>
    </BudgetProvider>
  );
}

export default App;
