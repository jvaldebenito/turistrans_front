<template>
  <default-layout>
    <section slot="main-content">
      <div class="container">

        <div class="row at-row">
          <div class="col-xs-offset-12 col-xs-12 col-sm-offset-12 col-sm-12 col-md-offset-19 col-md-3 col-lg-offset-20 col-lg-2">
            <at-button @click="modalHotelPolicies=true">Ver Políticas / See Policies</at-button>
            <at-modal v-model="modalHotelPolicies">
              <div slot="header">
                <h3 class="black-color">Políticas del Hotel / Hotel Policies</h3>
              </div>
              <div>
                <p class="black-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus 
                arcu ut lacus aliquam bibendum. Nulla massa elit, porttitor vel cursus a, 
                aliquet sed elit. Maecenas sit amet tempus magna, eu rhoncus leo. Nulla 
                ultrices metus ac ex malesuada hendrerit. Nulla tincidunt, ex eget tristique 
                uctus, turpis ex rutrum ante, eu maximus leo lacus ac risus. Praesent 
                eget dapibus diam. Proin convallis dignissim magna, eget varius urna 
                feugiat quis.</p>
                <br />
                <p class="black-color">Quisque at lacinia ex. Aliquam finibus semper fermentum. Sed risus felis, 
                dapibus in nunc non, accumsan varius nisi. Praesent id eros gravida, 
                aliquet nunc dapibus, sodales lectus. Aliquam erat volutpat. Duis ut 
                massa ac nibh finibus mattis eget quis lectus. Mauris iaculis dolor 
                odio, quis lobortis mauris aliquet ut. Nullam tincidunt elementum eros.</p>
              </div>
              <div slot="footer">
                <at-button @click="closeModalPoliciesHotel">De acuerdo / Agree</at-button>
              </div>
            </at-modal>
          </div>
        </div>

        <div class="row at-row center">
          <div class="col-xs-24 col-sm-24 col-md-24 col-lg-24">
            <h1 class="black-color">Registro <b class="orange-color">-</b> Check in</h1>
          </div>
        </div>
        
        <div class="row at-row">
          <div class="col-xs-24 col-sm-24 col-md-offset-4 col-md-16 col-lg-offset-4 col-lg-16">

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-24 col-lg-24 center">
                <h3 class="black-color">CHECK - IN TIME: 15:00 HORAS | CHECK - OUT TIME: 12:00 HORAS</h3>
              </div>
            </div>

            <br />
            <br />

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Nombre / Name</label>
                <at-input v-model="check_in.name" size="large" placeholder="John"></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Apellido / Surname</label>
                <at-input v-model="check_in.surname" size="large" placeholder="Thomson"></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">R.U.T / Passport</label>
                <at-input v-model="check_in.passport" size="large" placeholder="11.111.111-1"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Dirección / Address</label>
                <at-input v-model="check_in.address" size="large" placeholder="233 S Wacker IL 60606, "></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Ciudad / City</label>
                <at-input v-model="check_in.city" size="large" placeholder="Chicago"></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">País / Country</label>
                <at-input v-model="check_in.country" size="large" placeholder="EEUU"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Nacionalidad / Nationality</label>
                <at-input v-model="check_in.nationality" size="large" placeholder="EEUU"></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Correo electrónico / Email</label>
                <at-input v-model="check_in.email" size="large" placeholder="jhon.thomson@turistrans.cl"></at-input>
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Teléfono / Phone</label>
                <at-input v-model="check_in.phone" size="large" placeholder="+569 6666 66 66"></at-input>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Fecha In/ Arrival Date</label>
                <input type="date" class="at-input__original" v-model="check_in.arrival_date" />
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Fecha Out/ Departure Date</label>
                <input type="date" class="at-input__original" v-model="check_in.departure_date" />
              </div>
              <div class="col-xs-offset-2 col-xs-20 col-sm-24 col-md-8 col-lg-8">
                <label class="black-color">Habitación/ Room</label>
                <at-select v-model="check_in.room" size="large" placeholder="Seleccione / Select">
                  <at-option value="room101">Habitación / Room 101</at-option>
                  <at-option value="room102">Habitación / Room 102</at-option>
                  <at-option value="room103">Habitación / Room 103</at-option>
                  <at-option value="room104">Habitación / Room 104</at-option>
                  <at-option value="room105">Habitación / Room 105</at-option>
                </at-select>
              </div>
            </div>

            <br />

            <div class="row at-row">
              <div class="col-xs-offset-2 col-xs-20  col-sm-24 col-md-offset-16 col-md-8 col-lg-offset-16 col-lg-8">
                <at-button class="btn-send-check-in" :disabled="disabledButton" @click="sendCheckIn">Enviar Registro / Send Check - In</at-button>
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
import { postCheckIn } from '@/services/checkin'

export default {
  name: 'HomeView',
  data () {
    return {
      modalHotelPolicies: false,
      disabledButton: false,
      check_in: {
        name          : '',
        surname       : '',
        passport      : '',
        address       : '',
        city          : '',
        country       : '',
        nationality   : '',
        email         : '',
        phone         : '',
        arrival_date  : '',
        departure_date: '',
        room          : '',
        folio         : '564485868665',
        rate          : '100'
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
      this.disabledButton = true
      if (this.checkValuesForm()) {
        postCheckIn(this.check_in).then(response => {
          if(response.status == 200) {
            this.$Notify({
              title: 'Genial!',
              message: 'El registro se realizó con éxito! / The check in it was done successfully',
              type: 'error'
            })
            this.disabledButton = false
          } else {
            this.$Notify({
              title: 'Ups!',
              message: 'Ocurrió un problema, vuelva a internarlo! / There was a problem, reinsert it!',
              type: 'error'
            })
            this.disabledButton = false
          }
        }).catch(err => {
          this.$Notify({
            title: 'Ups!',
            message: 'Ocurrió un problema, vuelva a internarlo! / There was a problem, reinsert it!',
            type: 'error'
          })
          this.disabledButton = false
        })
      } else {
        this.$Notify({
          title: 'Ups!',
          message: 'Debe completar todos los campos! / You must complete all the fields!',
          type: 'warning'
        })
        this.disabledButton = false
      }
    },
    checkValuesForm () {
      if (this.check_in.name === '' || this.check_in.surname === '' || this.check_in.passport === '' || this.check_in.address === '' || this.check_in.city === '' || this.check_in.country === '' || this.check_in.nationality === '' || this.check_in.email === '' || this.check_in.phone === '' || this.check_in.arrival_date === '' || this.check_in.departure_date === '' || this.check_in.room === '' || this.check_in.folio === '' || this.check_in.rate === '')
        return false
      return true
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
  .at-input__original,
  .at-select__selection {
    color: #1a031c;
    border: 1px solid #474148;
  }
  .at-input__original:focus,
  .at-input__original:hover,
  .at-select__selection:focus,
  .at-select__selection:hover {
    border-color: #dc9a3e;
  }
  .at-select--large .at-select__selection {
    height: 36px;
    line-height: 34px;
  }
  .at-select__option {
    color: #1a031c;
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
  .at-notification {
    color: #1a031c;
  }
</style>

