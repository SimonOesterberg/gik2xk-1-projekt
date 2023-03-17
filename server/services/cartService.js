const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  total: {
    length: {
      maximum: 30,
      tooLong:
        "^This is very prizy, contact us at email@mail.com to make this order!",
    },
    numericality: {
      greaterThan: 0,
      notGreaterThan:
        "^Cannot checkout with cart totaling to less than %{count} dollars!",
      notValid: "^Total has to be a number!",
    },
  },
  quantity: {
    numericality: {
      greaterThan: 0,
      lessThan: 999999,
      notGreaterThan: "^quantity has to be higher than %{count}!",
      notLessThan: "^quantity has to be lower than %{count}!",
      notValid: "^quantity has to be a number!",
    },
  },
};

async function getById(id) {
  if (!id) {
    return createResponseError(422, "ID cannot be empty");
  }
  try {
    const allCarts = await db.cart.findOne({
      where: { id },
      include: [db.product],
    });
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allCarts = await db.cart.findAll();
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(cart) {
  const invalidData = validate(cart, constraints);
  const quantity = cart.quantity;
  const total = cart.total;
  if (!quantity) {
    return createResponseError(422, "Quantity cannot be empty!");
  }
  if (!total) {
    return createResponseError(422, "Total cannot be empty!");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newCart = await db.cart.create(cart);
    return createResponseSuccess(newCart);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(cart, id) {
  const invalidData = validate(cart, constraints);

  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    await db.cart.update(cart, {
      where: { id },
    });
    return createResponseMessage(200, "The cart was updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  try {
    await db.cart.destroy({
      where: { id },
    });
    return createResponseMessage(200, "The cart was destroyed");
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
};
