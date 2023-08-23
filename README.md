```markdown
# Personal Money Management App

Welcome to my personal money management app repository! This app helps me track my expenses and income easily and efficiently.

## Features

- Log daily expenses and income.
- Categorize expenses with predefined categories.
- View summary of total expenses, income, and net balance.
- I'm still working on this app.

## Technologies Used

- GraphQL
- Prisma Client
- SQLite
- Helix
- Node.js

## Setup

1. Clone this repository.

   ```bash
   git clone repo-link
   cd to-app-dir
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Set up your environment variables. Create a `.env` file in the root directory and add:

   ```
   DATABASE_URL="sqlite:./dev.db"
   ```

4. Generate Prisma Client.

   ```bash
   npx prisma generate
   ```

5. Start the GraphQL server.

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser to access the Helix GraphQL Playground.

## Usage

1. Add expenses: Use the `addExpense` mutation to log your expenses.
2. Add income: Use the `addIncome` mutation to record your income.
3. Get summaries: Use the provided queries to get expense and income summaries.

## Contributing

Contributions are welcome! If you have suggestions or found a bug, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Remember to customize this template further based on the specifics of Helix and any other changes you've made in your project. Update the technologies used, setup instructions, and any relevant URLs as needed.
