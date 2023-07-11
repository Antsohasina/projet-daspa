<template>
  <div class="modal">
    <form class="form-add">
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Nom:</label><br>
        </div>
        <div>
          <input type="text" class="input-add" id="nom"><br><br>
        </div>
      </div>
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Prénoms:</label><br>
        </div>
        <div>
          <input type="text" class="input-add" id="prenoms"><br><br>
        </div>
      </div>
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Nombre de jours:</label><br>
        </div>
        <div>
          <input type="text" class="input-add" id="nbrDeJours"><br><br>
        </div>
      </div>
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Taux journalier:</label><br>
        </div>
        <div>
          <input type="text" class="input-add" id="tauxJournalier"><br><br>
        </div>
      </div>
      <div class="button-add">
        <button class="buttonAdd">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
          <span class="text">Add</span>
        </button>
        <button id="buttonCancel">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
          <span class="text">Cancel</span>
        </button>
      </div>


    </form>
  </div>
</template>

<script>
export default {
  name: "ModalContent"
}
</script>

<style scoped>

</style>