const { prisma } = require('../src/prismaClient');
const fs = require("fs");
const path = require("path");

async function main() {
    const folderPath = path.join(__dirname, "seeds");
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith(".js"));

    for (const file of files) {
        const data = require(path.join(folderPath, file));
        const fileName = file.replace(".js", "");

        const entityDB = prisma[fileName];

        if (!entityDB) {
            throw new Error(`Entidade ${fileName} não encontrada!`);
        }

        const entity = await entityDB.createMany({ data });

        console.log(`Inseridos ${entity.count} ${file}!`);
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });