import Card from "../models/cardModel.js";

export const createCard = async (req, res) => {
  try {
    const { id, title, description } = req.body;
    const newCard = new Card({ id, title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCardById = async (req, res) => {
  try {
    const card = await Card.findOne({ id: req.params.id });
    if (!card) return res.status(404).json({ error: "Card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCard = async (req, res) => {
  try {
    const card = await Card.findOne({ id: req.params.id });
    if (!card) return res.status(404).json({ error: "Card not found" });
    card.title = req.body.title;
    card.description = req.body.description;
    await card.save();
    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCard = async (req, res) => {
  try {
    const result = await Card.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.json({ message: 'Card deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

