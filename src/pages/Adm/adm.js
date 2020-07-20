import React from 'react'
import grafico from '../../assets/grafico.png'

function Adm() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info p=0" >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Atena</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/Adm">Administração<span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link " href="/MinhaConta" ><span class="sr-only"></span>Minha Conta</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <br></br><br></br><br></br><br></br><br></br><br></br>
  <p class="font-weight text-center">Administrações</p>
<div>
<table class="table">
    <tr>
      <th scope="col" >Job</th>
      <th scope="col">Assuntos</th>
      <th scope="col">Dia</th>
      <th scope="col">Semana</th>
      <th scope="col">Mês</th>
    </tr>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Quantidade total dos pedidos</td>
      <td>18</td>
      <td>Quarta-feira</td>
      <td>Junho</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Quantidade de pedidos cancelados</td>
      <td>20</td>
      <td>Segunda-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Valor cancelado</td>
      <td>25</td>
      <td>Sabádo</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Quantidade de consultas</td>
      <td>26</td>
      <td>Quinta-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Quantidade de rotas de entrega</td>
      <td>28</td>
      <td>Sexta-feira</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Quantidade de retorno de entrega</td>
      <td>30</td>
      <td>Domingo</td>
      <td>Junho</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Valor total:</td>
      <td img src={grafico} class="img-fluid" alt="Imagem responsiva"></td>
      <td>Valor total:</td>
    </tr>
  </tbody>
</table>
  </div>
</div>


  );
}
export default Adm;

