import { objectType, extendType, stringArg, intArg, nonNull } from "nexus";

export const Expense = objectType({
    name: "Expense", // 1 
    definition(t) {  // 2
        t.nonNull.int("id"); // 3 
        t.nonNull.string("category"); // 4
        t.nonNull.int("amount"); // 5
        t.nonNull.string("date"); // 6 
    },
});

export const getExpenses = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getExpenses", {
            type: "Expense",
            resolve(parent, args, context) {  
                return context.prisma.expense.findMany();  // 1
            },
        });
    },
});

export const addExpense = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addExpense", {
            type: "Expense",
            args: {
                category: nonNull(stringArg()),
                amount: nonNull(intArg()),
                date: nonNull(stringArg()),
            },
            resolve(parent, args, context) {
                return context.prisma.expense.create({
                    data: {
                        category: args.category,
                        amount: args.amount,
                        date: args.date,
                    },
                });
            },
        });
    }
})
