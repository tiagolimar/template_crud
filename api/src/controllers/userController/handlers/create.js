const prisma = require('../prismaClient');
const { entityName } = require('../index');

async function create(req, res) {
  try {
    const data = req.body;

    const newEntity = await prisma[entityName].create({ data });

    res.status(201).json({ data: newEntity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao criar a entidade.' });
  }
}

module.exports = { create };