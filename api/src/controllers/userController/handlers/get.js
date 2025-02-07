const prisma = require('../prismaClient');
const { entityName } = require('../index');

async function getEntity(req, res) {
  try {
    const { id } = req.params;

    const entity = await prisma[entityName].findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!entity) {
      return res.status(404).json({ error: 'Entidade não encontrada.' });
    }

    res.status(200).json({ data: entity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao buscar a entidade.' });
  }
}

module.exports = { getEntity };