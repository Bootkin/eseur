import React from "react";
import {IMenuList} from "../Consts/Consts";
import { Link } from "react-router-dom"
import {createStyles, makeStyles} from "@material-ui/core";
import classNames from "classnames";

interface IChoiseTagBlockProps {
    menuList: IMenuList[],
    selectedTag: string,
}

const BLOCK_WIDTH = 268;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            width: BLOCK_WIDTH,
        },
        tagLink: {
            fontFamily: "Inter",
            fontsize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
            textAlign: "left",
            color: "#000",
            textDecoration: "none",
            marginBottom: "12px",
        },
        selectedTag: {
            color: "#787878",
        },
    }),
);

export const ChoiseTagBlock = (props: IChoiseTagBlockProps) => {
    const { menuList, selectedTag } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {menuList.map((menuItem) => (
                <Link
                    key={`menu-item-${menuItem.title}`}
                    to={menuItem.url || "/"}
                    className={classNames(classes.tagLink, {
                        [classes.selectedTag]: selectedTag === menuItem.title,
                    })}
                >
                    {menuItem.title}
                </Link>
            ))}
        </div>
    );
}