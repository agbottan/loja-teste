import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../helpers/Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({

  paper: {
    '&': {
      padding: 20,
    },
  },

  form: {
    '& > *': {
      margin: theme.spacing(1),
    },

    '& > div': {
      width: 500,
    },
  },

}));


export default function ProdutosCadastro(props) {

  const classes = useStyles();
  const id = props.match.params.id;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title>
          <strong>{ (typeof(id) === 'undefined')? 'Novo' : 'Editar' } Produto</strong>
        </Title>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="campo-nome"   label="Nome" value={''} />
            <TextField id="campo-preco"  label="Preço" />
            <TextField id="campo-codigo" label="Código" />
            <br /><br />
            <Button variant="contained" color="primary">{ (typeof(id) === 'undefined')? 'Cadastrar' : 'Editar' } Produto</Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}