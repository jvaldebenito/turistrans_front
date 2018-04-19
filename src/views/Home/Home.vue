<template>
  <default-layout>
    <section slot="main-content">
      <div class="container">

        <div class="row at-row center">
          <div class="col-md-24">
            <h1 class="black-color">Registro <b class="orange-color">-</b> Check in</h1>
          </div>
        </div>
        
        <div class="row at-row">
          <div class="col-md-offset-4 col-md-16">

            <div class="row at-row">
              <div class="col-md-24 center">
                <h3 class="black-color">CHECK - IN TIME: 15:00 HORAS | CHECK - OUT TIME: 12:00 HORAS <at-button @click="modalHotelPolicies=true">Ver Políticas / See Policies</at-button></h3>
              </div>
            </div>

            <at-modal v-model="modalHotelPolicies">
              <div slot="header">
                <h3 class="black-color">Políticas del Hotel / Hotel Policies</h3>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus 
                  arcu ut lacus aliquam bibendum. Nulla massa elit, porttitor vel cursus a, 
                  aliquet sed elit. Maecenas sit amet tempus magna, eu rhoncus leo. Nulla 
                  ultrices metus ac ex malesuada hendrerit. Nulla tincidunt, ex eget tristique 
                  uctus, turpis ex rutrum ante, eu maximus leo lacus ac risus. Praesent 
                  eget dapibus diam. Proin convallis dignissim magna, eget varius urna 
                  feugiat quis.</p>
                <br />
                <p>Quisque at lacinia ex. Aliquam finibus semper fermentum. Sed risus felis, 
                  dapibus in nunc non, accumsan varius nisi. Praesent id eros gravida, 
                  aliquet nunc dapibus, sodales lectus. Aliquam erat volutpat. Duis ut 
                  massa ac nibh finibus mattis eget quis lectus. Mauris iaculis dolor 
                  odio, quis lobortis mauris aliquet ut. Nullam tincidunt elementum eros.</p>
              </div>
              <div slot="footer">
                <at-button @click="closeModalPoliciesHotel">De acuerdo / Agree</at-button>
              </div>
            </at-modal>

            <br />

            <div class="row at-row">
              <div class="col-md-8">
                <label class="black-color">Nombre / Name</label>
                <at-input v-model="check.name" size="large" placeholder="John"></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">Apellido / Surname</label>
                <at-input v-model="check.surname" size="large" placeholder="Thomson"></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">R.U.T / Passport</label>
                <at-input v-model="check.passport" size="large" placeholder="11.111.111-1"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-md-8">
                <label class="black-color">Dirección / Address</label>
                <at-input v-model="check.address" size="large" placeholder="233 S Wacker IL 60606, "></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">Ciudad / City</label>
                <at-input v-model="check.city" size="large" placeholder="Chicago"></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">País / Country</label>
                <at-input v-model="check.country" size="large" placeholder="EEUU"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-md-8">
                <label class="black-color">Nacionalidad / Nationality</label>
                <at-input v-model="check.nationality" size="large" placeholder="EEUU"></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">Correo electrónico / Email</label>
                <at-input v-model="check.email" size="large" placeholder="jhon.thomson@turistrans.cl"></at-input>
              </div>
              <div class="col-md-8">
                <label class="black-color">Teléfono / Phone</label>
                <at-input v-model="check.phone" size="large" placeholder="+569 6666 66 66"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-md-offset-16 col-md-8">
                <at-button class="btn-send-check-in" @click="sendCheckIn">Enviar Registro / Send Check - In</at-button>
              </div>
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
  name: 'HomeView',
  data () {
    return {
      modalHotelPolicies: false,
      check: {
        name       : '',
        surname    : '',
        passport   : '',
        address    : '',
        city       : '',
        country    : '',
        nationality: '',
        email      : '',
        phone      : '',
      }
    }
  },
  components: {
    DefaultLayout,
  },
  methods: {
    closeModalPoliciesHotel () {
      this.modalHotelPolicies = false
    },
    sendCheckIn () {
      alert('hola')
    }
  }
}
</script>

<style>
  .black-color {
    color: #1a031c;
  }
  .orange-color {
    color: #dc9a3e;
  }
  h1 {
    font-size: 2rem;
  }
  .at-input__original {
    color: #1a031c;
    border: 1px solid #474148;
  }
  .at-input__original:focus,
  .at-input__original:hover {
    border-color: #dc9a3e;
  }
  .at-btn {
    border: 1px solid #dc9a3e;
    color: #1a031c;
  }
  .at-btn:hover {
    background-color: #dc9a3e;
    color: #FFF;
  }
  .btn-send-check-in {
    width: 100%;
    background-color: #dc9a3e;
    color: #FFF;
  }
  .btn-send-check-in:hover {
    background-color: transparent;
    color: #1a031c;
  }
</style>

