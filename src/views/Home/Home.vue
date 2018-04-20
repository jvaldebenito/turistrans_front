<template>
  <default-layout>
    <section slot="main-content">
      <div class="container">
        <div class="row at-row center">
          <div class="col-xs-24 col-sm-24 col-md-24 col-lg-24">
            <h1 class="black-color">Inicio <b class="orange-color">-</b> Home</h1>
          </div>
        </div>
        <br />
        <div class="row at-row center">
          <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
            <router-link to="/check">
              <div class="each-icon">
                <at-button class="black-color" size="large" icon="icon-check" circle></at-button>
                <h3 class="black-color">Registro / Check-in</h3>
              </div>
            </router-link>
          </div>
          <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
            <router-link to="/comments">
              <div class="each-icon">
                <at-button class="black-color" size="large" icon="icon-message-square" circle></at-button>
                <h3 class="black-color">Comentarios / Comments</h3>
              </div>
            </router-link>
          </div>
          <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
            <router-link to="/music">
              <div class="each-icon">
                <at-button class="black-color" size="large" icon="icon-music" circle></at-button>
                <h3 class="black-color">Música / Music</h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import { postCheckIn } from '@/services/checkin'

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
  }
}
</script>

<style>
  .black-color {
    color: #1a031c !important;
  }
  .orange-color {
    color: #dc9a3e !important;
  }
  h1 {
    font-size: 2rem !important;
  }
  .each-icon {
    width: 100%;
    padding: 50px;
    background-color: #f9f9f9;
    border: 1px solid #efefef;
    margin-bottom: 10px;
  }
  .at-btn--large.at-btn--circle{
    width: 100px !important;
    height: 100px !important;
    border: none !important;
    background-color: transparent !important;
  }
  .at-btn--large.at-btn--circle .at-btn__icon {
    font-size: 40px !important;
  }
</style>

