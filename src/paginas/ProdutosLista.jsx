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
import Moeda from '../helpers/Moeda';

// Dados
import Produtos from '../database_mockup/Produtos';


export default function ProdutosLista() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title><strong>Produtos</strong></Title>
        <Paper>
          <React.Fragment>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Código</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Produtos.map(produto => (
                  <TableRow key={produto.id}>
                    <TableCell>{produto.id}</TableCell>
                    <TableCell>{produto.nome}</TableCell>
                    <TableCell><Moeda valor={produto.preco} /></TableCell>
                    <TableCell>{produto.codigo}</TableCell>
                    <TableCell>
                      <Button size="small" color="primary"   href={"/produto-edicao/"  + produto.id}>editar</Button>
                      <Button size="small" color="secondary" href={"/produto-excluir/" + produto.id}>excluir</Button>
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
