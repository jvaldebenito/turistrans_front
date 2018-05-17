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
          <div class="col-xs-24 col-sm-24 col-md-offset-4 col-md-16 col-lg-offset-5 col-lg-14">
            <div class="comments-container">
              <h2 class="black-color center">Comparte tu experiencia en <b class="green-color">TripAdvisor!</b> <br />Share your experience on <b class="green-color">TripAdvisor!</b></h2>
              <br />
              <iframe src="https://www.tripadvisor.es/WidgetEmbed-collectreview?partnerId=D8E9D7EBFD114DFEB2CE15948E7D0446&ReviewCollect&locationId=508168&lang=es_ES&data=P9W8FAVziy8FoU2YlEtqyvHUG47_TfaNRk45EX94U0vMnBkRYR240EWH-RnL45k3&display=true&attrMCID=16456&rexId=4180218&allowMobile" class="content-iframe"></iframe>
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
    width: 100% !important;
    padding: 10px !important;
    background-color: #FFF !important;
    border: 1px solid #efefef !important;
  }
  .content-iframe {
    width: 100% !important;
    height: 700px !important;
    border: 0 !important;
    overflow-y: hidden !important;
  }
</style>

