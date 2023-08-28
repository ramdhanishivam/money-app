import { useMutation, gql } from '@apollo/client';

const ADD_EXPENSE = gql`
    mutation addExpense($category: String!, $amount: Float!, $date: String!) {
        addExpense(category: $category, amount: $amount, date: $date) {
            id
            category
            amount
            date
        }
    }
`;
export default function AddExpenseForm() {

  const handleSubmit = e => {
    e.preventDefault();
    const date = e.target.elements.date.value;
    const amount = e.target.elements.amount.value;
    const category = e.target.elements.category.value;

    const [ ] = useMutation(ADD_EXPENSE, {
      variables: {
        category: category,
        amount: parseFloat(amount),
        date: date,
      },
    });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="category" placeholder="Category" />
        <input type="number" name="amount" placeholder="Amount" step="0.01" />
        <input type="date" name="date" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
