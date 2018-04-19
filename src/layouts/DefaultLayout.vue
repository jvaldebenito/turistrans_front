<template>
  <div class="default-layout">

    <!-- Header -->
    <header-partial></header-partial>
    <!-- End Header -->

    <!-- Main -->
    <main class="main-section">
      <div class="container">
        <slot name="main-content"></slot>
      </div>
    </main>
    <!-- End Main -->

    <!-- Footer -->
    <footer-partial></footer-partial>
    <!-- End Footer -->

  </div>
</template>

<script>
import HeaderPartial from '@/partials/HeaderPartial'
import FooterPartial from '@/partials/FooterPartial'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial,
  }
}
</script>