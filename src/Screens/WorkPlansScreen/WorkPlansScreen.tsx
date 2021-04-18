import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import { ChoiseTagBlock } from "../../components/ChoiseTagBlock/ChoiseTagBlock";
import { sixthMenuList } from "../../components/Consts/Consts";
import { Button, Divider, Typography } from "@material-ui/core";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";
import plansImg from "../../components/images/plansImg.png";

interface IWorkPlansScreenProps {}

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
        maneBlock: {
            border: "1px solid #4F4F4F",
            boxSizing: "border-box",
            borderRadius: "2px",
            padding: "0 20px",
        },
        plansBlock: {
            display: "flex",
            margin: "20px 0",
        },
        textBlock: {
            marginLeft: "24px",
        },
        data: {
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "17px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        nameOfNews: {
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        textNews: {
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "17px",
            textAlign: "left",
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
    }),
);


export const WorkPlansScreen = (props: IWorkPlansScreenProps) => {
    const classes = useStyles();
    const nameOfPage = "Планы работы";

    const renderPlans = () => {
        return (
            <div className={classes.plansBlock}>
                <img src={plansImg} alt={"plansImg"}/>
                <div className={classes.textBlock}>
                    <Typography className={classes.data}>
                        24 февраля 2021
                    </Typography>
                    <Typography className={classes.nameOfNews}>
                        Разъяснения по вопросам прохождения вакцинации
                    </Typography>
                    <Typography className={classes.textNews}>
                        Минпросвещения РФ и Общероссийский Профсоюз образования обратились в Минтруда РФ о даче разъяснения по вопросам прохождения вакцинации
                    </Typography>
                </div>
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
                    <Typography className={classes.nameOfPage}>
                        {nameOfPage}
                    </Typography>
                    <div className={classes.maneBlock}>
                        {renderPlans()}
                        <Divider/>
                        {renderPlans()}
                        <Divider/>
                        {renderPlans()}
                        <Divider/>
                        {renderPlans()}
                        <Divider/>
                        {renderPlans()}
                        <Divider/>
                        {renderPlans()}
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