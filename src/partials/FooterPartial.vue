<template>
  <footer>
    <div class="container">
      <div class="row at-row center">
        <div class="col-md-24">
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
    margin-top: 80px;
    margin-bottom: 20px;
  }
  .center{
    text-align: center !important;
  }
  hr{
    border: 1px solid gainsboro;
    margin-bottom: 5px;
    opacity: .6;
  }
  black-color {
    color: #1a031c;
  }
</style>
