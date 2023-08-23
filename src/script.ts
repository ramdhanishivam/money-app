// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient()

// 3
async function main() {
  const newExpense = await prisma.expense.create({
    data: {
      amount: 100,
      category: 'Food',
      date: '2021-01-01',
    },
  })
  const expenses = await prisma.expense.findMany()
  console.log(expenses)
}

// 4
main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect()
  })