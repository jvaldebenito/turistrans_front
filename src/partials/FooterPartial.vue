<template>
  <footer>
    <div class="container">
      <div class="row at-row center">
        <div class="col-xs-24 col-sm-24 col-md-24 col-lg-24">
          <hr />
          <h6 class="black-color">TurisTrans</h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPartial',
}
</script>

<style>
  footer {
    margin-top: 80px !important;
    margin-bottom: 20px !important;
  }
  .center{
    text-align: center !important;
  }
  hr{
    border: 1px solid gainsboro !important;
    margin-bottom: 5px !important;
    opacity: .6 !important;
  }
  black-color {
    color: #1a031c !important;
  }
</style>
