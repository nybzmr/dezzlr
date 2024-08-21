import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="border p-5">
      <Grid container spacing={2} gap={3} className="items-center ">
        <Grid item xs={0}>
          <Box>
            <Avatar className="text-white" sx={{ width: 56, height: 56 }}>
              N
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={10}>
            <div className="space-y-2">
                <div>
                    <p className="font-semibold text-lg">Nayaab</p>
                    <p className="opacity-70">April 17, 2024</p>
                </div>
            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam harum libero velit accusamus aliquam? Illum minus voluptatem natus, consequuntur enim exercitationem, quam obcaecati ab, facilis in totam? Quam reprehenderit enim facilis, asperiores culpa mollitia. </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
