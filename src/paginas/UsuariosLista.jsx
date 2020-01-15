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
import Usuarios from '../database_mockup/Usuarios';


export default function UsuariosLista() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title><strong>Usuários</strong></Title>
        <Paper>
          <React.Fragment>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Usuarios.map(usuario => (
                  <TableRow key={usuario.id}>
                    <TableCell>{usuario.id}</TableCell>
                    <TableCell>{usuario.nome}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>
                      <Button size="small" color="primary"   href={"/usuario-edicao/"  + usuario.id}>editar</Button>
                      <Button size="small" color="secondary" href={"/usuario-excluir/" + usuario.id}>excluir</Button>
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
