import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Slider from "react-slick";
import React from "react";
import sliderImage from "../images/sliderImage.png";

interface ISliderBlockProps {}

const SLIDER_TEXT_WIDTH = 1100;

const useStyles = makeStyles(() =>
    createStyles({
        sliderImage: {
            background: `url(${sliderImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
        },
        firstText: {
            width: SLIDER_TEXT_WIDTH,
            margin: "88px auto 50px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "58px",
            textAlign: "center",
            color: "#FFF",
            textShadow: "0px 4px 0px rgba(0, 0, 0, 0.5)",
        },
        subText: {
            width: SLIDER_TEXT_WIDTH,
            margin: "0 auto 159px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#FFF",
            textShadow: "0px 4px 0px rgba(0, 0, 0, 0.5)",
        },
        dots: {
            bottom: 90,
            "& li.slick-active button::before": {
                color: "#FFF",
            },
            "& li": {
                "& button::before": {
                    color: "blue",
                    opacity: 1,
                    fontSize: "20px",
                },
            },
        }
    }),
);

export const SliderBlock = (props: ISliderBlockProps) => {

    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoPlay: true,
        slidesToShow: 1,
        arrows: false,
        rows: 1,
        dotsClass: `slick-dots ${classes.dots}`,
    }

    return (
        <Slider {...settings}>
            <div className={classes.sliderImage}>
                <Typography className={classes.firstText}>
                    IX Республиканская зимняя школа молодых педагогов и наставников
                </Typography>
                <Typography className={classes.subText}>
                    Уважаемые коллеги! Дорогие друзья форума "Таир"! Мы приглашаем всех вас на традиционную январскую встречу - IX Республиканскую зимнюю школу молодых педагогов и наставников, которая состоится с 29 по 31 января 2021 г. на платформе ZOOM.
                </Typography>
            </div>
            <div className={classes.sliderImage}>
                <Typography className={classes.firstText}>
                    IX Республиканская зимняя школа молодых педагогов и наставников
                </Typography>
                <Typography className={classes.subText}>
                    Уважаемые коллеги! Дорогие друзья форума "Таир"! Мы приглашаем всех вас на традиционную январскую встречу - IX Республиканскую зимнюю школу молодых педагогов и наставников, которая состоится с 29 по 31 января 2021 г. на платформе ZOOM.
                </Typography>
            </div>
            <div className={classes.sliderImage}>
                <Typography className={classes.firstText}>
                    IX Республиканская зимняя школа молодых педагогов и наставников
                </Typography>
                <Typography className={classes.subText}>
                    Уважаемые коллеги! Дорогие друзья форума "Таир"! Мы приглашаем всех вас на традиционную январскую встречу - IX Республиканскую зимнюю школу молодых педагогов и наставников, которая состоится с 29 по 31 января 2021 г. на платформе ZOOM.
                </Typography>
            </div>
        </Slider>
    );
};