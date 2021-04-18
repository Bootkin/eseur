import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import {
    Button,
    createStyles,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { ChoiseTagBlock } from "../../components/ChoiseTagBlock/ChoiseTagBlock";
import { sixthMenuList } from "../../components/Consts/Consts";
import galleryImg from "../../components/images/galleryImage.png";

interface IGalleryScreenProps {}

const CONTENT_WIDTH = 894;
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
        maneBlock: {
            padding: "0 20px",
        },
        showAll: {
            border: "1px solid #003CA0",
            boxSizing: "border-box",
            width: "100%",
            margin: "0 auto 20px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#003CA0",
            textTransform: "none",
        },
        tagName: {
            fontFamily: "Inter",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0.04em",
            textAlign: "left",
            marginRight: "auto",
        },
        tagBlock: {
            display: "flex",
        },
        galleryContent: {
            margin: "24px 0 36px",
        },
        viewAll: {
            cursor: "default",
            alignSelf: "flex-end",
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "left",
            textTransform: "none",
        },
    }),
);


export const GalleryScreen = (props: IGalleryScreenProps) => {
    const classes = useStyles();
    const nameOfPage = "Галерея";

    const renderGalleryByTag = () => {
        return (
            <div>
                <div className={classes.tagBlock}>
                    <Typography className={classes.tagName}>
                        ТЭГ 1
                    </Typography>
                    <div className={classes.viewAll}>
                        Смотреть все
                    </div>
                </div>
                <Grid container className={classes.galleryContent}>
                    <Grid item xs={4}>
                        <img src={galleryImg} alt={"galleryImg"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={galleryImg} alt={"galleryImg"}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={galleryImg} alt={"galleryImg"}/>
                    </Grid>
                </Grid>
            </div>
        );
    }

    return (
        <div>
            <HeaderBlock/>
            <div className={classes.root}>
                <ChoiseTagBlock
                    menuList={sixthMenuList}
                    selectedTag={nameOfPage}
                />
            <div className={classes.pageContent}>
                <div className={classes.maneBlock}>
                    {renderGalleryByTag()}
                    {renderGalleryByTag()}
                    {renderGalleryByTag()}
                    <Button
                        className={classes.showAll}
                    >
                        Показать все
                    </Button>
                </div>
            </div>
            </div>
        </div>
    )
};