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
          <div class="col-xs-24 col-sm-24 col-md-offset-4 col-md-16 col-lg-offset-6 col-lg-12">
            <div class="music-container">
              <h2 class="black-color center">Disfruta de tu música con <b class="green-color-spotify">Spotify!</b> <br />Enjoy your music with <b class="green-color-spotify">Spotify!</b></h2>
              <br />
              <iframe src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A2rp5riHULWgrXPsDtsp1ir" width="100%" height="600" frameborder="0" allowtransparency="true"></iframe>
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
  .green-color-spotify {
    color: #2fd565 !important;
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
