// src/components/ExpensesList.js
import { useQuery, gql } from '@apollo/client';
import client from '../apollo';
//import { GET_EXPENSES } from '../queries';

const GET_EXPENSES = gql`
  query {
    getExpenses {
      id
      category
      amount
      date
    }
  }
`;
export default function ExpensesList() {
  const { loading, error, data } = useQuery(GET_EXPENSES);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const expenses = data.getExpenses;

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.category} - ${expense.amount} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
