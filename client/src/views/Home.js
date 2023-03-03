import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Grid container columnSpacing={2}>
      <Grid item md={10}>
        <img src={"https://images.staticjw.com/mal/6327/malarfarg.jpg"}></img>
      </Grid>
      <Grid item md={2}>
        <h1>Carpe Diem Simon</h1>
      </Grid>
    </Grid>
  );
}

export default Home;
