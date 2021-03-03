import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Lottie from "react-lottie";
import money1 from "./lottie/37464-repayment-concept-e-wallet-payment-inprogress.json";
import money2 from "./lottie/43325-money-dollars-and-bitcoin.json";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { receive, sendbackres } from "./function";
import useMediaQuery from "@material-ui/core/useMediaQuery";



const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Buttonclick() {
  const classes = useStyles();
  const [money, setmoney] = useState();
  const [result, setresult] = useState();

  const matches = useMediaQuery("(max-width:600px)");

  function senddata() {
    const data = {
      money: money,
    };
    receive(data);

    setTimeout(() => {
      const res = sendbackres();

      setresult(res);

    }, 500);
  }

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: money1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: money2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#2ed573" }}>
          <Toolbar>
            <text color="inherit">ดอกเบี้ยเงินฝากหุ้น</text>
          </Toolbar>
        </AppBar>
      </div><br></br>
      <Container maxWidth="xl">
        <Grid container spacing={30}>
          <Grid item xs={12} md={7}>
            <Lottie
              options={defaultOptions1}
              height={matches ? 100 : 500}
              width={matches ? 200 : 500}
            />
          </Grid>
          <Grid item xs={12} md={5} >
            <Card
              className={classes.root}
              style={{ backgroundColor: "#2f3542", opacity: "75%", marginTop: 50 }}>
              <CardContent width={50}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="เงินที่ต้องการคำนวณ"
                    value={money}
                    style={{ marginLeft: 105 }}
                    type="number"
                    variant="filled"
                    onChange={(e) => setmoney(e.target.value)}

                  />
                </form>
                <br></br>
                <Button
                  variant="contained"
                  component="span"
                  className={classes.cardStyle}
                  style={{ backgroundColor: "#2ed573", marginLeft: 160 }}
                  onClick={senddata}
                >

                  ดอกเบี้ยที่จะได้รับ
                </Button>
                {result !== undefined && result !== null ? (
                  <div>
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center", margin: 10 }}
                    >
                      interest : {result}
                    </Typography>
                  </div>
                ) : (
                    <h1 className={classes.cardStyle}></h1>
                  )}
                <Lottie
                  options={defaultOptions2}
                  height={100}
                  width={150}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}


