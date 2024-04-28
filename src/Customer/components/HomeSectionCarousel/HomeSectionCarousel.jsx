import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarousel = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    // Responsive breakpoints
    const responsive = {
        0: { items: 1 },
        720: { items: 4 },
        1024: { items: 5 },
    };

    // Map mens_kurta items to HomeSectionCard components
    const items = data.slice(0, 10).map((item) => (
        <HomeSectionCard key={item.id} product={item} />
    ));

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };
    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
            setActiveIndex(activeIndex-1)
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
            setActiveIndex(activeIndex+1);
        }
    };

    return (
        <div className="relative px-4 lg:px-8 border shadow-lg">
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                    activeIndex={activeIndex}
                    onSlideChange={syncActiveIndex}
                />
            </div>

            {activeIndex < items.length - responsive[1024].items -1 && (
                <Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={slideNext}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "2rem",
                        transform: "translateX(10%) rotate(90deg)",
                        bgcolor: "white",
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }}
                    />
                </Button>
            )}

            {activeIndex==0 ? null:  (
                <Button
                    variant="contained"
                    className="z-50 bg-white"
                    onClick={slidePrev}
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "2rem",
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: "white",
                    }}
                    aria-label="prev"
                >
                    <KeyboardArrowLeftIcon
                        sx={{ transform: "rotate(90deg)", color: "black" }}
                    />
                </Button>
            )}
        </div>
    );
};

export default HomeSectionCarousel;
