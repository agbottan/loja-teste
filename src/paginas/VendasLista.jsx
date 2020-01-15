import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from '../helpers/Title';
import PegaId from '../helpers/PegaId';
import Moeda from '../helpers/Moeda';

// Dados
import Vendas   from '../database_mockup/Vendas';
import Produtos from '../database_mockup/Produtos';
import Clientes from '../database_mockup/Clientes';


// produtos nas vendas
Vendas.map(venda => {

  venda.precoTotal = 0;

  venda.produtos = venda.produtos.map(prod => {

    let buscaProd = PegaId(Produtos, prod.id);

    prod.nome  = buscaProd.nome;
    prod.preco = buscaProd.preco;
    venda.precoTotal = venda.precoTotal + prod.preco * prod.quantidade;

    return prod;
  });

  venda.cliente = PegaId(Clientes, venda.cliente);

  return venda;
});


export default function VendasLista() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title><strong>Vendas</strong></Title>
        <Paper>
          <React.Fragment>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Produtos</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Vendas.map(venda => (
                  <TableRow key={venda.id}>
                    <TableCell>{venda.id}</TableCell>
                    <TableCell>{venda.data}</TableCell>
                    <TableCell>{venda.cliente.nome}</TableCell>
                    <TableCell>
                      {venda.produtos.map(prod => (
                        <p>{prod.quantidade}&thinsp;&times; {prod.nome}: <Moeda valor={prod.preco * prod.quantidade} /></p>
                      ))}
                      <p>Total: <Moeda valor={venda.precoTotal} /></p>
                    </TableCell>
                    <TableCell>
                      <Button size="small" color="primary"   href={"/venda-edicao/"  + venda.id}>editar</Button>
                      <Button size="small" color="secondary" href={"/venda-excluir/" + venda.id}>excluir</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        </Paper>
      </Grid>
    </Grid>
  );
}
