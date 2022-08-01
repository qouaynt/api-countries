<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h3>where in the world?</h3>
      </router-link>
      <div class="di" @click="changeMode">
        <ion-icon id="icon" name="moon-sharp"></ion-icon>
        <p>Dark mode</p>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  el: "#app",

  methods: {
    changeMode() {
      document.body.classList.toggle("dark-mode");
      let parIcon = document.querySelector(".di p");
      let IconMode = document.querySelector(".di #icon");
      if (document.body.classList.contains("dark-mode")) {
        parIcon.innerHTML = "Light mode";
        IconMode.name = "sunny-sharp";
      } else {
        parIcon.innerHTML = "Dark mode";
        IconMode.name = "moon-sharp";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Macondo&family=Montserrat:wght@300;600;800&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

:root {
  --Blue-text: hsl(200, 15%, 8%);
  --Dark-Gray-input: hsl(0, 0%, 52%);
  ---Gray-background: hsl(0, 0%, 98%);
  --elements: hsl(0, 0%, 100%);
}

.dark-mode {
  --elements: hsl(209, 23%, 22%);
  ---Gray-background: hsl(207, 26%, 17%);
  --Blue-text: hsl(0, 0%, 100%);
  --Dark-Gray-input: hsl(0, 0%, 52%);
}

#app header {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: var(--elements);
  a {
    text-decoration: none;
    color: var(--Blue-text);
    margin-left: 20px;
    h3 {
      font-weight: 600;
    }
  }
  .di {
    display: flex;
    flex-direction: row;
    gap: 3px;
    color: var(--Blue-text);
    margin-right: 20px;
    font-weight: 600;
    cursor: pointer;
  }
}

#app main {
  background-color: var(---Gray-background);
}
</style>
