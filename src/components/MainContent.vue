<template>
  <div class="content">
    <TableContent/>
    <LogoContent/>
  </div>
</template>

<script>
import TableContent from "@/components/TableContent";
import LogoContent from "@/components/LogoContent";

export default {
  name: "MainContent",
  components: {
    TableContent,
    LogoContent,
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    }
  }
};
</script>

<style scoped>

</style>