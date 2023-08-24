import { useMutation, gql } from '@apollo/client';
// import { ADD_EXPENSE } from '../mutations';

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
  const [addExpense] = useMutation(ADD_EXPENSE);

  const handleSubmit = e => {
    e.preventDefault();
    const { category, amount, date } = e.target.elements;

    addExpense({
      variables: {
        category: category.value,
        amount: parseFloat(amount.value),
        date: date.value,
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
