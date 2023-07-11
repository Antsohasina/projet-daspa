<template>
  <div class="content">
    <ModalContent/>
    <div class="tab_content">
      <table>
        <tr>
          <th>Numéro</th>
          <th>Nom et Prénoms</th>
          <th>Nombre de jours</th>
          <th>Taux journalier </th>
          <th>Préstations</th>
          <th>Actions </th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
          <td>Data 4</td>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#0F9DE8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16ZM15 6l3 3m-5 11h8"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff0e84" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
          </td>
        </tr>
      </table>
    </div>
    <div class="logo_content">
      <div class="logo_foot">
        <img src="../assets/images/vue-js.svg" alt="">
      </div>
    </div>
    <div class="buttonAdd-foot">
      <button class="buttonAdd">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
        <span class="text">Add</span>
      </button>
    </div>
  </div>
</template>

<script>
import ModalContent from "@/components/ModalContent";

export default {
  name: "MainContent",
  components: {
    ModalContent,
  }
}
</script>

<style scoped>

</style>