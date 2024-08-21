import mongoose from "mongoose";
import bcrypt from "bcrypt";



const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
});

const orderSchema = new Schema({
  orderDate: { type: Date, default: Date.now },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },

    mobile: {
      type: String,
      unique: true,
    },

    addresses: [addressSchema],

    orders: [orderSchema],

    password: {
      type: String,
    },

    refreshToken: {
      type: String,
    }

  },
  {
    timestamps: true,
  }
);

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.matchPassword=async function(password){
    return await bcrypt.compare(password,this.password);
};

userSchema.methods.generateAccessToken=async function(){
    return await jwt.sign(
        {
            _id:this._id,
            email:this.email,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};
userSchema.methods.generateRefreshToken=async function(){
    return await jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};


export const User = mongoose.model("User", userSchema);
