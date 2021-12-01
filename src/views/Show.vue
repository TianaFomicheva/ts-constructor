<template>
  <h1 class="title left">{{curSchema?.schema?.schemaName }}</h1>
  <div v-for="(property, idx) in curSchema?.schema?.properties" :key="idx">
    <div class="form-field"><p>{{property.name}}</p></div>
    <div class="form-field">
      <input v-if="property.fieldType !=='dropdown'" />
      <select v-else></select>
    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'show',
  data() {
    return { schemaId: 0, curSchema: {} as any };
  },
  async mounted() {
    this.schemaId = +this.$route.params.id;
    this.curSchema = await this.getScheme(this.schemaId);
  },
  computed: {
    //
  },

  methods: {
    ...mapActions(['getScheme']),
  },
});
</script>

<style>

</style>
