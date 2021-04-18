import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import {
    createStyles,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { ChoiseTagBlock } from "../../components/ChoiseTagBlock/ChoiseTagBlock";
import {apparatus, firstMenuList} from "../../components/Consts/Consts";
import galleryImg from "../../components/images/galleryImage.png";

interface IApparatusScreenProps {}

const CONTENT_WIDTH = 962;
const CONTENT_WIDTH_FULL_SCREEN = 1800;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: "36px 83px 53px",
            display: "flex",
        },
        pageContent: {
            width: CONTENT_WIDTH,
            margin: "0 auto",
            "@media (min-width: 1919px)": {
                width: CONTENT_WIDTH_FULL_SCREEN,
            },
        },
        nameOfPage: {
            fontFamily: "Inter",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0.04em",
            textAlign: "left",
            textTransform: "uppercase",
            marginBottom: "24px",
        },
        name: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        post: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
        },
    }),
);


export const ApparatusScreen = (props: IApparatusScreenProps) => {
    const classes = useStyles();
    const nameOfPage = "Аппарат";
    const isDesktop = window.innerWidth > 1600;

    return (
        <div>
            <HeaderBlock/>
            <div className={classes.root}>
                <ChoiseTagBlock
                    menuList={firstMenuList}
                    selectedTag={nameOfPage}
                />
                <div className={classes.pageContent}>
                    <Typography className={classes.nameOfPage}>
                        {nameOfPage}
                    </Typography>
                    <Grid container spacing={6}>
                        {apparatus.map((apparatusEl) => (
                            <Grid item key={"apparatusEl" + apparatusEl.name} xs={isDesktop ? 3 : 4}>
                                <img src={galleryImg} alt={"galleryImg"}/>
                                <Typography className={classes.name}>
                                    {apparatusEl.name}
                                </Typography>
                                <Typography className={classes.post}>
                                    {apparatusEl.post}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
};