import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema.graphql";
import { randomBytes } from "crypto";
import { GraphQLContext } from "./context";

type Expense = {
  id?: string;
  amount: number;
  category: string;
  date: string;
}
const resolvers = {
  Query: {
    info: () => 'Test',
    getExpenses: async (parent: unknown, args: {}, context: GraphQLContext) => {
      return context.prisma.expense.findMany();
    },
  },
  Expense: {
    id: (expense: Expense) => expense.id,
    amount: (expense: Expense) => expense.amount,
    category: (expense: Expense) => expense.category,
    date: (expense: Expense) => expense.date,
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
      
    }
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});