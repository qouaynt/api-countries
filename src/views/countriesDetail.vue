
<template>
  <div class="detailOfCountries" :value="value">
    <br />
    <br />
    <div class="back">
      <router-link to="/">
        <ion-icon name="arrow-back-sharp"></ion-icon>
        <p>Back</p>
      </router-link>
    </div>
    <div class="detas">
      <div class="imgDeta" @click="goet">
        <img :src="svg" alt="" />
      </div>
      <div class="infDeta">
        <div class="labRL">
          <div class="leftInf">
            <span>{{ name }}</span>
            <p><span>Native name:</span> {{ nativeName }}</p>
            <p><span>population:</span> {{ population }}</p>
            <p><span>Region:</span> {{ region }}</p>
            <p><span>Sub region:</span> {{ subregion }}</p>
            <p><span>Capital:</span> {{ capital }}</p>
          </div>
          <div class="rightInf">
            <p><span>Top Level Domain:</span> {{ topLevel }}</p>
            <p>
              <span>Currencies:</span>
              <a v-for="curr in nameCurrencies" :key="curr">{{ curr.name }}</a>
            </p>
            <p>
              <span>Languages:</span>
              <a v-for="lang in languages" :key="lang"> {{ lang }}</a>
            </p>
          </div>
        </div>
        <div class="bordsInf">
          <p><span>border Countries:</span></p>
          <a v-for="border in borders" :key="border">{{ border }}</a>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "countriesDetail",
  props: ["common"],

  async mounted() {
    fetch(`https://restcountries.com/v3.1/name/${this.common}`)
      .then((res) => res.json())
      .then((response) => {
        response.forEach((con) => {
          this.name = con.name.common;
          // eslint-disable-next-line no-undef
          this.population = con.population;
          this.region = con.region;
          this.subregion = con.subregion;
          this.capital = con.capital[0];
          this.borders = con.borders;

          this.nameCurrencies = con.currencies;
          this.topLevel = con.cca2;
          this.languages = con.languages;
          this.svg = con.flags.png;
          this.nativeName = con.name.official;
        });
        this.country = response;
        console.log(this.country);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  },

  data() {
    return {
      name: null,
      population: null,
      region: null,
      subregion: null,
      capital: null,
      borders: null,
      svg: null,
      nameCurrencies: null,
      topLevel: null,
      languages: null,
      currentPage: null,
      nativeName: null,
    };
  },

  // methods: {
  //   formatNumbers(population) {
  //     return population.toLocaleString();
  //   },
  // },
};
</script>






<style lang="scss">
.detailOfCountries {
  width: 100%;
  height: 100vh;
}

.back {
  display: block;
  padding: 10px;
  background-color: var(--elements);
  font-weight: 600;
  box-shadow: 0 0 5px black;
  max-width: 126px;
  justify-content: space-between;
  border-radius: 7px;
  margin: 0 0 15px 138px;
  a {
    text-decoration: none;
    color: var(--Blue-text);
    display: flex;
    gap: 10px;
  }
}

.detas {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 60px;
  .imgDeta {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .infDeta {
    display: flex;
    padding: 15px;
    justify-content: space-around;
    flex-direction: column;
    width: 500px;
    .labRL {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .leftInf {
        color: var(--Blue-text);
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 0.8rem;
        span {
          font-weight: 800;
          font-size: 1.5rem;
          margin: 0px 20px 15px 0;
        }
        p {
          span {
            font-size: 1rem;
            margin: 0;
            font-weight: 600;
          }
        }
      }
      .rightInf {
        color: var(--Blue-text);
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          span {
            font-size: 1rem;
            margin: 0;
            font-weight: 600;
          }
          a {
            margin: 0 5px;
          }
        }
      }
    }
    .bordsInf {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: var(--Blue-text);
      gap: 7px;
      flex-wrap: wrap;
      p {
        span {
          font-size: 1rem;
          margin: 0;
          font-weight: 600;
        }
      }
      a {
        margin: 0 10px;
        padding: 9px;
        color: var(--Blue-text);
        box-shadow: 0 0 5px black;
        background-color: var(--elements);
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.8rem;
      }
    }
  }
}

@media (max-width: 750px) {
  .detailOfCountries .back {
    margin: auto;
  }
  .detailOfCountries .detas {
    flex-direction: column;
  }
  .detailOfCountries .detas .imgDeta {
    width: 80%;
    margin: auto;
  }
  .detailOfCountries .detas .infDeta {
    max-width: 100%;
    gap: 35px;
  }
  .detailOfCountries .detas .infDeta .labRL {
    flex-direction: column;
    gap: 35px;
  }
}
</style>