const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  name: {
    length: {
      minimum: 1,
      maximum: 30,
      tooShort: "^Product name has to be longer than %{count} letter",
      tooLong: "^Product name is too long, please enter a shorter name",
    },
  },
  category: {
    length: {
      minimum: 1,
      maximum: 30,
      tooShort: "^Category name is too short",
      tooLong: "^Category name is too long, please enter a shorter name",
    },
  },
};

async function getById(id) {
  if (!id) {
    return createResponseError(422, "ID cannot be empty");
  }
  try {
    const allProducts = await db.product.findOne({
      where: { id },
      include: [
        db.color,
        db.manufacturer,
        {
          model: db.rating,
          include: [db.user],
        },
      ],
    });
    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProducts = await db.product.findAll();
    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getByManufacturer(id) {
  try {
    const allProducts = await db.product.findAll({
      where: { manufacturerId: id },
      include: [db.manufacturer],
    });

    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(product) {
  const invalidData = validate(product, constraints);
  const name = product.name;
  const category = product.category;

  if (!name) {
    return createResponseError(422, "Name cannot be empty");
  }
  if (!category) {
    return createResponseError(422, "Category cannot be empty");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newProduct = await db.product.create(product);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function addToCart(product, id, cartId) {
  const invalidData = validate(product, constraints);

  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const updatedProduct = { cartId: cartId };
    await db.product.update(updatedProduct, {
      where: { id },
    });
    return createResponseMessage(200, "The product was added to a cart");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(product, id) {
  const invalidData = validate(product, constraints);

  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "The product was updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "ID is necessary when deleting");
  }
  try {
    await db.product.destroy({
      where: { id },
    });
    return createResponseMessage(200, "The product was destroyed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  destroy,
  getByManufacturer,
  addToCart,
};
