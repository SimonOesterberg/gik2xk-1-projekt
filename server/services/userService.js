const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  userName: {
    length: {
      minimum: 4,
      maximum: 30,
      tooShort: "^Username has to be at least %{count} letters long!",
      tooLong: "^Username cannot be longer than %{count} letters long!",
    },
  },
  firstName: {
    length: {
      minimum: 2,
      maximum: 30,
      tooShort: "^First name has to be at least %{count} letters long!",
      tooLong: "^First name cannot be longer than %{count} letters long!",
    },
  },
  lastName: {
    length: {
      minimum: 2,
      maximum: 30,
      tooShort: "^Last name has to be at least %{count} letters long!",
      tooLong: "^Last name cannot be longer than %{count} letters long!",
    },
  },
  email: {
    email: {
      message: "^This is not a valid email example@mail.com",
    },
  },
};

async function getById(id) {
  if (!id) {
    return createResponseError(422, "ID cannot be empty");
  }
  try {
    const allUsers = await db.user.findOne({
      where: { id },
      include: [{ model: db.rating }],
    });
    return createResponseSuccess(allUsers);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allusers = await db.user.findAll();
    return createResponseSuccess(allusers);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function addUniqueProduct(id, uniqueProductId) {
  if (!id) {
    return createResponseError(422, "ID cannot be empty");
  }
  try {
    const addedUniqueProduct = await db.uniqueProduct.update(
      { userId: id },
      {
        where: { id: uniqueProductId },
      }
    );

    return createResponseSuccess(addedUniqueProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(user) {
  const invalidData = validate(user, constraints);
  const userName = user.userName;
  const email = user.email;
  if (!userName) {
    return createResponseError(422, "userName cannot be empty!");
  }
  if (!email) {
    return createResponseError(422, "email cannot be empty!");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newUser = await db.user.create(user);
    return createResponseSuccess(newUser);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(user, id) {
  const invalidData = validate(user, constraints);

  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    await db.user.update(user, {
      where: { id },
    });
    return createResponseMessage(200, "The user was updated");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "ID is necessary when updating");
  }
  try {
    await db.user.destroy({
      where: { id },
    });
    return createResponseMessage(200, "The user was destroyed");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getById,
  getAll,
  addUniqueProduct,
  create,
  update,
  destroy,
};
