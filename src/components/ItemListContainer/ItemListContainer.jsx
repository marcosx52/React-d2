import React from "react";
import Title from "../../Title/title";


function ItemListContainer() {
    return (
      <>
    <main class="cont-nosotros d-flex p-3 bd-highlight">
      <div class="img-nos img-fluid">
        <img src='https://http2.mlstatic.com/D_NQ_NP_620471-MPE43841030553_102020-O.jpg' />
      </div>
      <div>
        <h1 class="nos-title text-center">¡Bienvenidos a Playroom!</h1>
        <h3 class="nos-p text-center">
          <Title greeting="Probando" />
        </h3>
       
      </div>
      
    </main>

      </>
    );
  }
  
  export default ItemListContainer;