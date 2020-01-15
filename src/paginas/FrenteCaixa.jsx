import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Title from '../helpers/Title';
import Moeda from '../helpers/Moeda';
import Hoje from '../helpers/Hoje';

// Dados
import Vendas   from '../database_mockup/Vendas';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  depositContext: {
    flex: 1,
    marginTop: -10,
    marginBottom: 15,
  },

  tabelaVendas: {
    marginBottom: 20,
  },

}));

const hoje = Hoje();
const vendasHoje = Vendas.filter(venda => (venda.data === hoje)? true : false);


export default function FrenteCaixa() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper);
  const faturamentoHoje = vendasHoje.reduce((total, venda) => total + venda.precoTotal, 0);

  return (
    <div>
      <Grid container spacing={3}>

        {/* Vendas de Hoje */}
        <Grid item xs={12} md={7} lg={8}>
          <Paper className={fixedHeightPaper}>
            <Title>Vendas de Hoje</Title>
            <Typography color="textSecondary" className={classes.depositContext}><Hoje/></Typography>
            <Table size="small" className={classes.tabelaVendas}>
              <TableHead>
                <TableRow>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Produtos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vendasHoje.map(venda => (
                  <TableRow key={venda.id}>
                    <TableCell>{venda.cliente.nome}</TableCell>
                    <TableCell>
                      {venda.produtos.map(prod => (
                        <p>{prod.quantidade}&thinsp;&times; {prod.nome}: <Moeda valor={prod.preco * prod.quantidade} /></p>
                      ))}
                      <p>Total: <Moeda valor={venda.precoTotal} /></p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </Paper>
        </Grid>

        {/* Faturamento de Hoje */}
        <Grid item xs={12} md={5} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Title>Faturamento de Hoje</Title>
            <Typography color="textSecondary" className={classes.depositContext}><Hoje/></Typography>
            <Typography component="p" variant="h4"><Moeda valor={faturamentoHoje} /></Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}