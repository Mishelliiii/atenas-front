import React from 'react';

function Menu() {
  const estiloMenu = {
    backgroundColor: "#4b1a7a",
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark p=0" style={estiloMenu}>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/">Atena</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="/Adm">Administração<span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link " href="/Register"><span class="sr-only"></span>Minha Conta</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  );
  
}
export default Menu;