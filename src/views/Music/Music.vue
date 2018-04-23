<template>
  <default-layout>
    <section slot="main-content">
      <div class="container">
        <div class="row at-row center">
          <div class="col-xs-24 col-sm-24 col-md-24 col-lg-24">
            <h1 class="black-color">Música <b class="orange-color">-</b> Music</h1>
          </div>
        </div>
        <br />
        <div class="row at-row">
          <div class="col-lg-offset-6 col-lg-12">
            <div class="music-container">
              <h4 class="black-color">Lorem ipsum dolor sit amet</h4>
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
  name: 'MusicView',
  components: {
    DefaultLayout,
  },
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
  .music-container {
    width: 100%;
    padding: 30px;
    background-color: #f9f9f9;
    border: 1px solid #efefef;
  }
</style>
