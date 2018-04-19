<template>
  <header>
    <div class="container">
      <div class="row at-row">
        <div class="col-xs-offset-4 col-xs-16 col-sm-24 col-md-3 col-lg-3">
          <router-link to="/">
            <img src="/static/logotipo.png" width="100%"/>
          </router-link>
        </div>
        <div class="col-xs-24 col-sm-24 col-md-offset-9 col-md-12 col-lg-offset-9 col-lg-12 right-align">
          <at-menu mode="horizontal" active-name="/">
            <at-menu-item name="/" to="/"><i class="icon icon-check"></i>Registro / Check-in</at-menu-item>
            <at-menu-item name="/comments" to="/comments"><i class="icon icon-message-square"></i>Comentarios / Comments</at-menu-item>
          </at-menu>
        </div>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPartial',
}
</script>

<style>
  header {
    margin: 15px 0 !important;
  }
  .right-align{ 
    text-align: right !important;
  }
  .at-menu {
    float: right !important;
  }
  .at-menu--horizontal .at-menu__item.at-menu__item--active .at-menu__item-link,
  .at-menu--horizontal .at-menu__item-link:hover, .at-menu--horizontal .at-menu__item-link.router-link-active {
    color: #dc9a3e !important;
  }
  .at-menu--horizontal .at-menu__item-link::after {
    background-color: #dc9a3e !important;
  }
  .at-menu__item a {
    color: #1a031c !important;
  }
</style>


