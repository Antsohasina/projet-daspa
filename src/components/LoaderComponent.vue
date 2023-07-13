<template>
  <div class="button-load">
    <button @click="startAnimation" class="button-27" :class="{ disappear: isLoaded }">Get start!</button>
  </div>
  <div :class="['overlay', { loaded: isLoaded }]">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
  data() {
    return {
      isLoaded: false
    };
  },
  methods: {
    startAnimation() {
      this.isLoaded = true;
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 999999999;
  pointer-events: none;
}

.overlay > div {
  width: 20%;
  background-color: #343a40;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: bold;
}

.overlay > div:nth-child(1) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 630ms;
}

.overlay > div:nth-child(2) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 560ms;
}

.overlay > div:nth-child(3) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 490ms;
}

.overlay > div:nth-child(4) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 420ms;
}

.overlay > div:nth-child(5) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 350ms;
}

.overlay > div:nth-child(6) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 280ms;
}

.overlay > div:nth-child(7) {
  transition: transform 0.7s cubic-bezier(0.86, 0, 0.07, 1) 210ms;
}

.overlay.loaded > div:not(.logo) {
  transform: translateY(-100%);
}

.button-load {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999999999999;
}

.button-27 {
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button-27:disabled {
  pointer-events: none;
}

.button-27:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-27:active {
  box-shadow: none;
  transform: translateY(0);
}

.disappear {
  opacity: 0;
  transition: .2s;
  pointer-events: none;
}
</style>
