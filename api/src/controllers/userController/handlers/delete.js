const prisma = require('../prismaClient');
const { entityName } = require('../index');

async function deleteEntity(req, res) {
  try {
    const { id } = req.params;

    const deletedEntity = await prisma[entityName].delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(200).json({ data: deletedEntity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao deletar a entidade.' });
  }
}

module.exports = { deleteEntity };