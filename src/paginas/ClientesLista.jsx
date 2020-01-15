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

// Dados
import Clientes from '../database_mockup/Clientes';


export default function ClientesLista() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title><strong>Clientes</strong></Title>
        <Paper>
          <React.Fragment>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>CPF</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell>Gen.</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Clientes.map(cliente => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.id}</TableCell>
                    <TableCell>{cliente.nome}</TableCell>
                    <TableCell>{cliente.cpf}</TableCell>
                    <TableCell>{cliente.fone}</TableCell>
                    <TableCell>{cliente.email}</TableCell>
                    <TableCell>{cliente.genero}</TableCell>
                    <TableCell>
                      <Button size="small" color="primary"   href={"/cliente-edicao/"  + cliente.id}>editar</Button>
                      <Button size="small" color="secondary" href={"/cliente-excluir/" + cliente.id}>excluir</Button>
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
