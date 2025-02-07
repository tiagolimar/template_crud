const prisma = require('../prismaClient');
const { entityName } = require('../index');

async function updateEntity(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedEntity = await prisma[entityName].update({
      where: { id: parseInt(id, 10) },
      data: updateData,
    });

    res.status(200).json({ data: updatedEntity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Um erro ocorreu ao atualizar a entidade.' });
  }
}

module.exports = { updateEntity };