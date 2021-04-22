import React from "react";
import {
    ClickAwayListener,
    createStyles,
    Grid,
    Grow,
    makeStyles,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Typography,
} from "@material-ui/core";
import eseurIcon from "../images/eseur.png";
import vkIcon from "../images/vk.svg";
import instIcon from "../images/inst.svg";
import headerBackground from "../images/header.jpg";
import {
    fifthMenuList,
    firstMenuList,
    fourthMenuList,
    IMenuList,
    ITabList,
    secondMenuList,
    sixthMenuList,
    tabList,
    thirdMenuList
} from "../Consts/Consts";
import { Link } from "react-router-dom";

interface IHeaderBlockProps {}

const HEADER_HEIGHT = 200;
const ESEUR_ICON_SIZE = 136;
const HEADER_TEXT_WIDTH = 798;

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            background: `url(${headerBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "flex",
            maxHeight: HEADER_HEIGHT,
            padding: "26px 0",
        },
        eseurIcon: {
            width: ESEUR_ICON_SIZE,
            height: ESEUR_ICON_SIZE,
            marginLeft: "83px",
        },
        headerTitle: {
            fontFamily: "PT Serif",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "48px",
            letterSpacing: "0.02em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: "0 auto",
            color: "#FFF",
            width: HEADER_TEXT_WIDTH,
            textShadow: "2px 2px 0px #000000",
        },
        followUs: {
            marginTop: "6px",
            marginRight: "83px",
        },
        followUsText: {
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#FFF",
            textShadow: "2px 2px 0px #000000",
        },
        textWithIcons: {
            display: "flex",
        },
        vkIcon: {
            margin: "0 10px",
        },
        menuContent: {
            display: "flex",
            background: "#003CA0",
            padding: "16px 83px 20px 83px",
        },
        menuItem: {
            color: "#FFF",
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
            textAlign: "center",
            cursor: "default",
            textTransform: "none",
            padding: 0,
        },
        gridBox: {
            textAlign: "center",
        },
        triangle: {
            border: "25px solid transparent",
            borderBottom: "20px solid blue",
            width: 0,
            margin: "-25px auto 0",
        },
        menuList: {
            background: "blue",
        },
        menuItemEl: {
            color: "#FFF",
            textDecoration: "none",
        },
    }),
);

export const HeaderBlock = (props: IHeaderBlockProps) => {
    const classes = useStyles();

    const [openOne, setOpenOne] = React.useState(false);
    const [openTwo, setOpenTwo] = React.useState(false);
    const [openThree, setOpenThree] = React.useState(false);
    const [openFour, setOpenFour] = React.useState(false);
    const [openFive, setOpenFive] = React.useState(false);
    const [openSix, setOpenSix] = React.useState(false);
    const anchorRefOne = React.createRef();
    const anchorRefTwo = React.createRef();
    const anchorRefThree = React.createRef();
    const anchorRefFour = React.createRef();
    const anchorRefFive = React.createRef();
    const anchorRefSix = React.createRef();

    const handleToggle = (nameOfTag: string) => {
        handleClose();
        if (nameOfTag === tabList[0].title) {
            setOpenOne(true);
        } else if (nameOfTag === tabList[1].title) {
            setOpenTwo(true);
        } else if (nameOfTag === tabList[2].title) {
            setOpenThree(true);
        } else if (nameOfTag === tabList[3].title) {
            setOpenFour(true);
        } else if (nameOfTag === tabList[4].title) {
            setOpenFive(true);
        } else if (nameOfTag === tabList[5].title) {
            setOpenSix(true);
        }
    };

    const handleClose = () => {
        setOpenOne(false);
        setOpenTwo(false);
        setOpenThree(false);
        setOpenFour(false);
        setOpenFive(false);
        setOpenSix(false);
    };

    const findMenuByTag = (nameOfTag: string) => {
        if (nameOfTag === tabList[0].title) {
            return firstMenuList;
        } else if (nameOfTag === tabList[1].title) {
            return secondMenuList;
        } else if (nameOfTag === tabList[2].title) {
            return thirdMenuList;
        } else if (nameOfTag === tabList[3].title) {
            return fourthMenuList;
        } else if (nameOfTag === tabList[4].title) {
            return fifthMenuList;
        } else if (nameOfTag === tabList[5].title) {
            return sixthMenuList;
        }
    }

    const findOpenedElementByTag = (nameOfTag: string) => {
        if (nameOfTag === tabList[0].title) {
            return openOne;
        } else if (nameOfTag === tabList[1].title) {
            return openTwo;
        } else if (nameOfTag === tabList[2].title) {
            return openThree;
        } else if (nameOfTag === tabList[3].title) {
            return openFour;
        } else if (nameOfTag === tabList[4].title) {
            return openFive;
        } else if (nameOfTag === tabList[5].title) {
            return openSix;
        }
    }

    const findRef = (nameOfTag: string) => {
        if (nameOfTag === tabList[0].title) {
            return anchorRefOne;
        } else if (nameOfTag === tabList[1].title) {
            return anchorRefTwo;
        } else if (nameOfTag === tabList[2].title) {
            return anchorRefThree;
        } else if (nameOfTag === tabList[3].title) {
            return anchorRefFour;
        } else if (nameOfTag === tabList[4].title) {
            return anchorRefFive;
        } else if (nameOfTag === tabList[5].title) {
            return anchorRefSix;
        }
    }

    const renderTabs = (tabItem: ITabList) => {
        const menuList = findMenuByTag(tabItem.title);
        const openMenu = findOpenedElementByTag(tabItem.title);
        return (
            <Grid
                key={`name_of_tab_${tabItem.title}`}
                item
                className={classes.gridBox}
                xs={2}
                >
                <div
                    id={`name_of_tab_${tabItem.title}`}
                    className={classes.menuItem}
                    ref={() => findRef(tabItem.title)}
                    onMouseEnter={() => handleToggle(tabItem.title)}
                >
                    {tabItem.title}
                </div>
                {openMenu &&
                    <Popper
                        open={openMenu}
                        anchorEl={document.getElementById(`name_of_tab_${tabItem.title}`)}
                        role={undefined}
                        transition
                        onMouseLeave={handleClose}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <>
                                    <div className={classes.triangle}/>
                                    <Paper className={classes.menuList}>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList>
                                                {menuList?.map((menuItem: IMenuList) => (
                                                    <MenuItem
                                                        key={`list_one_${menuItem.title}`}
                                                        onClick={handleClose}
                                                    >
                                                        <Link
                                                            to={menuItem.url || "/"}
                                                            className={classes.menuItemEl}
                                                        >
                                                            {menuItem.title}
                                                        </Link>
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </>
                            </Grow>
                        )}
                    </Popper>
                }
            </Grid>
        );
    }

    return (
        <>
            <div className={classes.header}>
                <img className={classes.eseurIcon} src={eseurIcon} alt={"useurIcon"}/>
                <Typography className={classes.headerTitle}>
                    Региональная организация
                    Общероссийского Профсоюза
                    образования в Республике Марий Эл
                </Typography>
                <div className={classes.followUs}>
                    <Typography className={classes.followUsText}>
                        ПОДПИШИТЕСЬ
                    </Typography>
                    <div className={classes.textWithIcons}>
                        <Typography className={classes.followUsText}>
                            НА НАС:
                        </Typography>
                        <img src={vkIcon} alt={"vkIcon"} className={classes.vkIcon}/>
                        <img src={instIcon} alt={"instIcon"}/>
                    </div>
                </div>
            </div>
            <Grid container className={classes.menuContent}>
                {tabList.map((tabItem: ITabList) => renderTabs(tabItem))}
            </Grid>
        </>
    );
};