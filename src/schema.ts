import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema.graphql";
import { GraphQLContext } from "./context";

type Expense = {
  id?: string;
  amount: number;
  category: string;
  date: string;
}

type Income = {
  id?: string;
  amount: number;
  source: string;
  date: string;
}

type ExpenseSummary = {
  totalExpenses: number;
  totalIncome: number;
  netBalance: number;
}

const resolvers = {
  Query: {
    info: () => 'Test',
    getExpenses: async (parent: unknown, args: {}, context: GraphQLContext) => {
      return context.prisma.expense.findMany();
    },
    getIncomes: async (parent: unknown, args: {}, context: GraphQLContext) => {
      return context.prisma.income.findMany();
    },
    getExpenseSummary: async (parent: unknown, args: {}, context: GraphQLContext) => {
      const expenses = await context.prisma.expense.findMany();
      const incomes = await context.prisma.income.findMany();

      const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
      const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
      const netBalance = totalIncome - totalExpenses;

      return { totalExpenses, totalIncome, netBalance };
    }
  },
  Expense: {
    id: (expense: Expense) => expense.id,
    amount: (expense: Expense) => expense.amount,
    category: (expense: Expense) => expense.category,
    date: (expense: Expense) => expense.date,
  },
  Income: {
    id: (income: Income) => income.id,
    amount: (income: Income) => income.amount,
    source: (income: Income) => income.source,
    date: (income: Income) => income.date,
  },
  ExpenseSummary: {
    totalExpenses: (expenseSummary: ExpenseSummary) => expenseSummary.totalExpenses,
    totalIncome: (expenseSummary: ExpenseSummary) => expenseSummary.totalIncome,
    netBalance: (expenseSummary: ExpenseSummary) => expenseSummary.netBalance,
  },
  Mutation: {
    addExpense: async (parent: unknown, args: { amount: number, category: string, date: string }, context: GraphQLContext) => {
      const expense: Expense = {
        amount: args.amount,
        category: args.category,
        date: args.date,
      };

      const newExpense = await context.prisma.expense.create({
        data: {
          amount: expense.amount,
          category: expense.category,
          date: expense.date,
        },
      })
      return newExpense
      
    },
    addIncome: async (parent: unknown, args: { amount: number, source: string, date: string }, context: GraphQLContext) => {
      const income: Income = {
        amount: args.amount,
        source: args.source,
        date: args.date,
      };

      const newIncome = await context.prisma.income.create({
        data: {
          amount: income.amount,
          source: income.source,
          date: income.date,
        },
      })
      return newIncome
    }
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});