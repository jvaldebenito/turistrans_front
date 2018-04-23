<template>
  <default-layout>
    <section slot="main-content">
      <div class="container">
        <div class="row at-row center">
          <div class="col-xs-24 col-sm-24 col-md-24 col-lg-24">
            <h1 class="black-color">Comentarios <b class="orange-color">-</b> Comments</h1>
          </div>
        </div>
        <br />
        <div class="row at-row">
          <div class="col-xs-24 col-sm-24 col-md-offset-4 col-md-16 col-lg-offset-6 col-lg-12">
            <div class="comments-container">
              <h2 class="black-color center">Comparte tu experiencia en <b class="green-color">TripAdvisor!</b></h2>
              <h3 class="black-color center">Hotel Bidasoa</h3>
              <br />
              <img src="/static/tripadvisor.png" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'

export default {
  name: 'CommentsView',
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
  .green-color {
    color: #31a87e !important;
  }
  h1 {
    font-size: 2rem !important;
  }
  .comments-container {
    width: 100%;
    padding: 30px;
    background-color: #FFF;
    border: 1px solid #efefef;
  }
</style>

