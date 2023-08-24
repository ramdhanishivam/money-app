import { objectType, extendType, stringArg, intArg, nonNull } from "nexus";

export const Income = objectType({
    name: "Income", // 1 
    definition(t) {  // 2
        t.nonNull.int("id"); // 3 
        t.nonNull.string("source"); // 4
        t.nonNull.int("amount"); // 5
        t.nonNull.string("date"); // 6 
    },
});

export const getIncomes = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getIncomes", {
            type: "Income",
            resolve(parent, args, context) {  
                return context.prisma.income.findMany();  // 1
            },
        });
    },
});

export const addIncome = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("addIncome", {
            type: "Income",
            args: {
                source: nonNull(stringArg()),
                amount: nonNull(intArg()),
                date: nonNull(stringArg()),
            },
            resolve(parent, args, context) {
                return context.prisma.income.create({
                    data: {
                        source: args.source,
                        amount: args.amount,
                        date: args.date,
                    },
                });
            },
        });
    }
})
