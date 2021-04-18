import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import {
    createStyles,
    Divider,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { ChoiseTagBlock } from "../../components/ChoiseTagBlock/ChoiseTagBlock";
import { delegation, firstMenuList, IDelegation } from "../../components/Consts/Consts";
import classNames from "classnames";

interface IRepublicanCommitteeScreenProps {}

const CONTENT_WIDTH = 900;
const CONTENT_WIDTH_FULL_SCREEN = 1800;
const NAME_WIDTH = 282;

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
        table: {
            display: "flex",
        },
        namePerson: {
            width: NAME_WIDTH,
            marginRight: "12px",
        },
        titleText: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "29px",
            letterSpacing: '0em',
            textAlign: "left",
        },
        delegationText: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
        },
        tableBlock: {
            display: "flex",
            margin: "12px 0",
        },
        nameBlock: {
            width: NAME_WIDTH,
        },
    }),
);


export const RepublicanCommitteeScreen = (props: IRepublicanCommitteeScreenProps) => {
    const classes = useStyles();
    const nameOfPage = "Республиканский Комитет";

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
                    <div className={classes.table}>
                        <Typography className={classNames(classes.namePerson, classes.titleText)}>
                            ФИО
                        </Typography>
                        <Typography className={classes.titleText}>
                            Кем делигирован
                        </Typography>
                    </div>
                    <Divider style={{background: "#000"}}/>
                    {delegation.map((delegationName: IDelegation) => (
                        <div
                            key={'delegation_name_' + delegationName.name}
                            className={classes.tableBlock}
                        >
                            <div className={classes.nameBlock}>
                                <Typography className={classNames(classes.namePerson, classes.delegationText)}>
                                    {delegationName.name}
                                </Typography>
                            </div>
                            <Typography className={classes.delegationText}>
                                {delegationName.delegation}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};