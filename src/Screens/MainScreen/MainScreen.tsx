import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import { SliderBlock } from "../../components/SliderBlock/SliderBlock";
import sportImage from "../../components/images/prisoedinitsya-k-jestafete-zdorovya.svg";
import mailIcon from "../../components/images/mailIcon.svg";
import {
    Button,
    createStyles,
    Divider,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import doctorIcon from "../../components/images/doctor.png";
import hundredYears from "../../components/images/100years.png";
import { Link } from "react-router-dom";

interface IMainScreenProps {}

const SIDE_BLOCK_WIDTH = 282;
const FORM_BUTTON_WIDTH = 242;
const SEARCH_FIELD_WIDTH = 180;
const SEARCH_FIELD_HEIGHT = 42;
const FORM_BUTTON_HEIGHT = 42;
const FORM_HEIGHT = 340;
const FOOTER_CONTENT_WIDTH = 1198;

const useStyles = makeStyles(() =>
    createStyles({
        maneBlock: {
            display: "flex",
            justifyContent: "space-between",
            margin: "80px 83px 100px",
        },
        leftSideBlock: {
            width: SIDE_BLOCK_WIDTH,
            height: FORM_HEIGHT,
        },
        questionForm: {
            marginTop: "40px",
            border: "1px solid #4F4F4F",
            borderRadius: "2px",
        },
        mailIcon: {
            margin: "20px 82px",
        },
        questionText: {
            fontFamily: "Inter",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0em",
            textAlign: "center",
            margin: "20px 42px 20px 39px",
        },
        questionButton: {
            background: "#003CA0",
            border: "1px solid #003CA0",
            borderRadius: "2px",
            margin: "0 20px 30px",
            width: FORM_BUTTON_WIDTH,
            height: FORM_BUTTON_HEIGHT,
            "&:hover": {
                "& questionButtonText:hover": {
                    color: "#000",
                },
            },
        },
        questionButtonText: {
            color: "#FFF",
            textDecoration: "none",
            "&:hover": {
                color: "#000"
            },
        },
        centerBlock: {
            border: "1px solid #4F4F4F",
            borderRadius: "2px",
            margin: "0 24px",
        },
        centerBlockHeader: {
            display: "flex",
            padding: "20px 20px 2px",
        },
        headerText: {
            fontFamily: "Inter",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0.04em",
            textAlign: "center",
            marginRight: "auto",
        },
        search: {
            marginLeft: "10px",
            border: "1px solid #003CA0",
            borderRadius: "2px",
            color: "#003CA0",
            height: SEARCH_FIELD_HEIGHT,
        },
        searchInput: {
            width: SEARCH_FIELD_WIDTH,
            height: SEARCH_FIELD_HEIGHT,
            "& .MuiOutlinedInput-root": {
                height: SEARCH_FIELD_HEIGHT,
            },
        },
        newsBlock: {
            margin: "20px",
            display: "flex",
        },
        divider: {
            margin: "0 20px"
        },
        newsImage: {
            width: "160px",
            height: "100px",
            marginRight: "24px",
            marginBottom: "22px",
        },
        viewAll: {
            border: "1px solid #003CA0",
            color: "#003CA0",
            width: `calc(100% - 40px)`,
            margin: "0 20px 20px",
        },
        rightSideBlock: {
            width: SIDE_BLOCK_WIDTH,
        },
        date: {
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "17px",
            textAlign: "left",
        },
        nameOfNews: {
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "22px",
            textAlign: "left",
            marginBottom: "10px",
        },
        textNews: {
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "17px",
            textAlign: "left",
        },
        materialText: {
            marginBottom: "16px",
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "22px",
            textAlign: "left",
        },
        hundredYears: {
            marginBottom: "16px",
        },
        topicText: {
            fontFamily: "Inter",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "44px",
            textAlign: "left",
            margin: "28px 0 20px",
        },
        footer: {
            margin: "0 auto 100px",
            paddingTop: "16px",
            width: FOOTER_CONTENT_WIDTH,
        },
        footerContent: {
            marginTop: "4px",
            display: "flex",
        },
        link: {
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "17px",
            textAlign: "center",
        },
        nameOfLink: {
            marginTop: "16px",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "17px",
            textAlign: "center",
        },
    }),
);


export const MainScreen = (props: IMainScreenProps) => {
    const classes = useStyles();

    const renderNews = () => {
        return (
            <>
                <div className={classes.newsBlock}>
                    <img src={doctorIcon} alt={"doctorIcon"} className={classes.newsImage}/>
                    <div>
                        <Typography className={classes.date}>
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
                <Divider className={classes.divider}/>
            </>
        );
    }

    const renderMainBlock = () => {
        return (
            <div>
                <div className={classes.centerBlock}>
                    <div className={classes.centerBlockHeader}>
                        <Typography className={classes.headerText}>
                            НОВОСТИ
                        </Typography>
                        <TextField
                            className={classes.searchInput}
                            variant={"outlined"}
                            placeholder={"Поиск"}
                        />
                        <Button
                            className={classes.search}
                        >
                            Найти
                        </Button>
                    </div>
                    <div>
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                        {renderNews()}
                    </div>
                    <Button className={classes.viewAll}>
                        Показать все
                    </Button>
                </div>
            </div>
        );
    }

    const renderMaterials = () => {
        return (
            <Typography className={classes.materialText}>
                Утверждены новые порядок проведения медосмотров работников и перечни вредных факторов и работ
            </Typography>
        );
    }

    const renderNewMaterial = () => {
        return (
            <Typography className={classes.materialText}>
                Финальные мероприятия конкурса "Воспитатель года России"-2020
            </Typography>
        );
    }

    const renderRightSideBlock = () => {
        return (
            <>
                <img src={hundredYears} alt={"hundredYears"} className={classes.hundredYears}/>
                <div>
                    <Typography className={classes.topicText}>
                        Популярные материалы
                    </Typography>
                    {renderMaterials()}
                    {renderMaterials()}
                    {renderMaterials()}
                    {renderMaterials()}
                    {renderMaterials()}
                </div>
                <div>
                    <Typography className={classes.topicText}>
                        Новые материалы
                    </Typography>
                    {renderNewMaterial()}
                    {renderNewMaterial()}
                    {renderNewMaterial()}
                    {renderNewMaterial()}
                    {renderNewMaterial()}
                </div>
            </>
        );
    }

    const renderFooterElement = () => {
        return (
            <div>
                <Typography className={classes.link}>
                    www.stvprofedu.ru
                </Typography>
                <Typography className={classes.nameOfLink}>
                    Ставропольская краевая организация Профсоюза
                </Typography>
            </div>
        );
    }

    const renderFooterContent = () => {
        return (
            <div className={classes.footerContent}>
                {renderFooterElement()}
                <Divider orientation={"vertical"} flexItem/>
                {renderFooterElement()}
                <Divider orientation={"vertical"} flexItem/>
                {renderFooterElement()}
                <Divider orientation={"vertical"} flexItem/>
                {renderFooterElement()}
                <Divider orientation={"vertical"} flexItem/>
                {renderFooterElement()}
            </div>
        );
    }

    return (
        <div>
            <HeaderBlock/>
            <SliderBlock/>
            <div className={classes.maneBlock}>
                <div className={classes.leftSideBlock}>
                    <img src={sportImage} alt={"sportImage"}/>
                    <div className={classes.questionForm}>
                        <img className={classes.mailIcon} src={mailIcon} alt={"mailIcon"}/>
                        <Typography className={classes.questionText}>
                            Задай свой вопрос
                        </Typography>
                        <Button className={classes.questionButton}>
                            <Link to={"/form"} className={classes.questionButtonText}>
                                написать нам
                            </Link>
                        </Button>
                    </div>
                </div>
                {renderMainBlock()}
                <div className={classes.rightSideBlock}>
                    {renderRightSideBlock()}
                </div>
            </div>
            <div className={classes.footer}>
                <Typography className={classes.topicText}>
                    Полезные ссылки
                </Typography>
                {renderFooterContent()}
            </div>
        </div>
    );
};