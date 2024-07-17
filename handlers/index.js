import { find, create, findById, update} from "../db/queries.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await find();
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ error: "All fields are required" });
  };
  try {
    const product = await create(title, description, price);
    return res.status(201).json({ product });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateProduct = async (req, res) => {
  const { title, description, price} = req.body;
  const id = req.params.id;

  if (!title || !description || !price) {
    return res.status(400).json({ error: "All fields are required" });
  };
  try {
    const product = await update(title, description, price, id);
    return res.status(201).json({ product });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await deleteProduct(id);
    return res.status(200).json({ product });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
