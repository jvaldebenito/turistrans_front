<template>
  <header>
    <div class="container">
      <div class="row at-row">
        <div class="col-md-3">
          <img src="/static/logotipo.png" width="100%"/>
        </div>
        <div class="col-md-offset-13 col-md-8 right-align">
          <at-menu router mode="horizontal">
            <at-menu-item name="check" to="/"><i class="icon icon-check"></i>Check-in</at-menu-item>
            <at-menu-item name="comments" to="/comments"><i class="icon icon-message-square"></i>Comentarios</at-menu-item>
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
    margin: 15px 0;
  }
  .right-align{ 
    text-align: right !important;
  }
  .at-menu {
    float: right !important;
  }
  .at-menu--horizontal .at-menu__item.at-menu__item--active .at-menu__item-link,
  .at-menu--horizontal .at-menu__item-link:hover, .at-menu--horizontal .at-menu__item-link.router-link-active {
    color: #dc9a3e;
  }
  .at-menu--horizontal .at-menu__item-link::after {
    background-color: #dc9a3e;
  }
</style>


