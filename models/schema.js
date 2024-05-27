import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default Image;
