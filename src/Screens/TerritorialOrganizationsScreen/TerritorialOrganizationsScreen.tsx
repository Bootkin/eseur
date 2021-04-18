import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import {
    createStyles,
    makeStyles, Typography,
} from "@material-ui/core";
import { ChoiseTagBlock } from "../../components/ChoiseTagBlock/ChoiseTagBlock";
import {firstMenuList, IOrganization, organizations} from "../../components/Consts/Consts";

interface ITerritorialOrganizationsScreenProps {}

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
            padding: "0 20px",
        },
        nameOfLink: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        link: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
            textDecoration: "none",
        },
        linkBlock: {
            margin: "12px 0 24px",
        },
    }),
);


export const TerritorialOrganizationsScreen = (props: ITerritorialOrganizationsScreenProps) => {
    const classes = useStyles();
    const nameOfPage ="Территориальные организации";

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
                    <div className={classes.maneBlock}>
                        {organizations.map((organization: IOrganization) => (
                            <div key={`organization-${organization.title}`}>
                                <Typography className={classes.nameOfLink}>
                                    {organization.title}
                                </Typography>
                                <div className={classes.linkBlock}>
                                    <a className={classes.link} target={"_self"} href={'http://' + organization.url}>
                                        {organization.url}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};