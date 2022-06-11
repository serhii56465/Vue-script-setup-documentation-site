<template>
<header class="sticky-top">
    <section class="header-main border-bottom bg-white">
        <div class="container-fluid">
             <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
                 <div class="col-md-2">
                    <router-link to="/"><img  class="d-none d-md-flex" src="\src\assets\logo.png" width="100"></router-link>
                 </div>
                 <div class="col-md-8">
                    <div class="d-flex form-inputs">
                    <input class="form-control" type="text" placeholder="Search the documentation, quides, and tutorials...">
                    <i class="bx bx-search"></i>
                    </div>
                 </div>
                 
                 <div class="col-md-2">
                     <div class="d-flex d-none d-md-flex flex-row align-items-center">
                         <span class="shop-bag"><i class='bx bxs-shopping-bag'></i></span>
                         <div class="d-flex flex-column ms-2">
                           <a class="btn btn-primary" href="https://accounts.google.com/ServiceLogin" role="button">Launch DB Builder</a>
                         </div>    
                     </div>           
                 </div>
             </div>
        </div> 
      </section>
</header>
</template>
