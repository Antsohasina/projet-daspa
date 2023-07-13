<template>
  <div class="modal" v-show="showModal">
    <form @submit="addMed" class="form-add">
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Nom et Prénoms:</label><br>
        </div>
        <div>
          <input v-model="nomPrenoms" type="text" class="input-add" id="nom" required><br><br>
        </div>
      </div>
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Nombre de jours:</label><br>
        </div>
        <div>
          <input v-model="nbrJour" @input="validateInput('nbrJour')" type="text" class="input-add" id="nbrDeJours" required><br><br>
        </div>
      </div>
      <div class="group-add">
        <div class="text-add">
          <label class="label-add">Taux journalier:</label><br>
        </div>
        <div>
          <input v-model="tauxJournalier" @input="validateInput('tauxJournalier')" type="text" class="input-add" id="tauxJournalier" required><br><br>
        </div>
        <div class="notification" v-if="showNotification">
          <p class="red"> Entrer un nombre </p>
        </div>
      </div>
      <div class="button-add">
        <button type="submit" class="buttonAdd">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>
          <span class="text">Add</span>
        </button>
        <button type="reset" id="buttonCancel" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
          <span class="text">Cancel</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    medecinEdit: {
      type: Object
    }
  },
  name: "ModalContent",
  data() {
    return {
      showModal: false,
      numMed: null,
      nomPrenoms: '',
      nbrJour: null,
      tauxJournalier: null,
      showNotification: false
    };
  },
  watch: {
    medecinEdit: {
      immediate: true,
      handler(medecin) {
        this.numMed = medecin.numMed
        this.nomPrenoms = medecin.nomPrenoms;
        this.nbrJour = medecin.nbrJour;
        this.tauxJournalier = medecin.tauxJournalier;
      }
    }
  },
  methods: {
    openModal() {
      this.numMed = this.medecinEdit.numMed
      this.nomPrenoms = this.medecinEdit.nomPrenoms
      this.nbrJour = this.medecinEdit.nbrJour
      this.tauxJournalier = this.medecinEdit.tauxJournalier
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    validateInput(fieldName) {
      const numberRegex = /^\d+(\.\d+)?$/;

      if (!numberRegex.test(this[fieldName])) {
        this.showNotification = true;
      }
      else {
        this.showNotification = false
      }
    },



    addMed(e) {
      e.preventDefault();
      if (this.numMed == null) {
        axios.post("http://localhost:3000/medecin", {
          nomPrenoms: this.nomPrenoms,
          nbrJour: this.nbrJour,
          tauxJournalier: this.tauxJournalier
        })
            .then(response => {
              console.log(response.data);
              this.$emit('medAdded');
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              this.numMed = null
              this.nomPrenoms = null
              this.nbrJour = null
              this.tauxJournalier = null
              this.showModal = false;
            });
      } else {
        axios.put(`http://localhost:3000/medecin/${this.numMed}`, {
          nomPrenoms: this.nomPrenoms,
          nbrJour: this.nbrJour,
          tauxJournalier: this.tauxJournalier
        })
            .then(response => {
              console.log(response.data);
              this.$emit('medAdded');
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              this.numMed = null;
              this.nomPrenoms = null;
              this.nbrJour = null;
              this.tauxJournalier = null;
              this.showModal = false;
            });
      }
    },
  }
};
</script>

<style scoped>
</style>
