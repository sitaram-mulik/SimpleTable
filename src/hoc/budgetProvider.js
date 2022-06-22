import { useState } from "react"
import { data } from "../services"
import budgetContext from "../context/budgetContext"

const BudgetProvider = (props) => {
    const [budgetData, setBudgetData] = useState(data);
    return <budgetContext.Provider value={{
        budgetData,
        setBudgetData
    }}>
        {props.children}
    </budgetContext.Provider>
};

export default BudgetProvider;