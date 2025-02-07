const { prisma } = require('../src/prismaClient');

async function main() {
    // Exemplo: Criando usuários falsos
    const users = await prisma.user.createMany({
        data: [
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" },
            { name: "Charlie", email: "charlie@example.com" },
        ],
    });

    console.log(`Inseridos ${users.count} usuários!`);
    
    // Exemplo: Criando produtos falsos
    const products = await prisma.product.createMany({
        data: [
            { name: "Produto A", price: 10.0 },
            { name: "Produto B", price: 20.0 },
            { name: "Produto C", price: 30.0 },
        ],
    });

    console.log(`Inseridos ${products.count} produtos!`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
