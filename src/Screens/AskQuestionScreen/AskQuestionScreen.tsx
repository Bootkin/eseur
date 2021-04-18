import React from "react";
import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import {
    Button,
    createStyles,
    makeStyles, TextField, Typography,
} from "@material-ui/core";

interface IAskQuestionScreenProps {}

const CONTENT_WIDTH = 894;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: CONTENT_WIDTH,
            padding: "36px 0 116px 83px",
        },
        textField: {
            width: "100%",
        },
        nameOfField: {
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "22px",
            letterSpacing: '0em',
            textAlign: "left",
            margin: "24px 0 12px",
        },
        questionButton: {
            background: "#003CA0",
            border: "1px solid #003CA0",
            borderRadius: "2px",
            width: "200px",
            color: "#FFF",
            marginTop: "24px",
            "&:hover": {
                color: "#000"
            },
        },
        header: {
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
        subTitle: {
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "29px",
            letterSpacing: "0.04em",
            textAlign: "left",
        },
    }),
);


export const AskQuestionScreen = (props: IAskQuestionScreenProps) => {
    const classes = useStyles();

    return (
        <div>
            <HeaderBlock/>
            <div className={classes.root}>
                <Typography className={classes.header}>
                    задать вопрос
                </Typography>
                <Typography>
                    Вы можете задать вопрос по интересующей вас теме с помощью формы обратной связи. Для получения ответа необходимо заполнить форму.
                </Typography>
                <div>
                    <Typography className={classes.nameOfField}>
                        ФИО
                    </Typography>
                    <TextField
                        className={classes.textField}
                        multiline
                        variant={"outlined"}
                    >
                    </TextField>
                </div>
                <div>
                    <Typography className={classes.nameOfField}>
                        Почта
                    </Typography>
                    <TextField
                        className={classes.textField}
                        multiline
                        variant={"outlined"}
                    >
                    </TextField>
                </div>
                <div>
                    <Typography className={classes.nameOfField}>
                        Место работы
                    </Typography>
                    <TextField
                        className={classes.textField}
                        multiline
                        variant={"outlined"}
                    >
                    </TextField>
                </div>
                <div>
                    <Typography className={classes.nameOfField}>
                        Район, населённый пункт
                    </Typography>
                    <TextField
                        className={classes.textField}
                        multiline
                        variant={"outlined"}
                    >
                    </TextField>
                </div>
                <div>
                    <Typography className={classes.nameOfField}>
                        Вопрос
                    </Typography>
                    <TextField
                        className={classes.textField}
                        rows={6}
                        multiline
                        variant={"outlined"}
                    >
                    </TextField>
                </div>
                <Button className={classes.questionButton}>
                    Добавить
                </Button>
            </div>
        </div>
    )
};