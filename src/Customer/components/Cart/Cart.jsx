import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div className="text-left m-10">
      <div className="lg:grid grid-cols-3 lg:px-10 relative">
        <div className="col-span-2">
          {[1,1,1,1,1,1].map(()=><CartItem />)}
        </div>
        <div className="px sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border mx-3">
            <p className="uppercase font-bold opacity-60 p-4 items-center">Price Details</p>
            <hr/>
            <div className="space-y-3 font-semibold p-4 shadow-lg">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>₹4697</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">-₹3419</span>
                </div>
                <div className="flex justify-between py-3 ">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">FREE</span>
                </div>
                <hr/>
                <div className="flex justify-between py-3">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹1278</span>
                </div>
                <hr/>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2.5,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem", // rounded-md
                    backgroundColor: "indigo.600",
                    px: 2,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "indigo.700", // hover:bg-indigo-700
                    },
                    "&:focus": {
                      outline: "none",
                      ring: 2, // focus:ring-2
                      ringColor: "indigo.500", // focus:ring-indigo-500
                      ringOffset: 2, // focus:ring-offset-2
                    },
                  }}
                >
                  Check Out
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
