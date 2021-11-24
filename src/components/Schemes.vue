<template>
    <div class="container">
    <div class="layout">
<div v-for="scheme in schemes" :key="scheme.key" class="table-row">
    <div class="table-cell-70"> {{ scheme?.name}}123</div>
    <div class="table-cell-10" @click="showScheme(scheme.id)">Show</div>
    <div class="table-cell-10" @click="editScheme(scheme.id)">Edit</div>
    <div class="table-cell-10" @click="deleteScheme(scheme.id)">Delete</div>
  </div>
    <SchemeProperty v-if="showSchema" :cur-schema="schema"/>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import SchemeProperty from '@/components/SchemeProperty.vue';

type propertyType = {
  key: 'string',
  name: 'string',
  fieldType: 'string',
}
export default defineComponent({
  name: 'Schemes',
  components: {
    SchemeProperty,
  },
  data() {
    return {
      schemes: Array<propertyType>(),
      schema: Array<propertyType>(),
      showSchema: false,
    };
  },
  async mounted() {
    const rawSchemesdata = await this.getSchemes();
    this.schemes = JSON.parse(JSON.stringify(rawSchemesdata));
  },
  methods: {
    ...mapActions(['getSchemes', 'getScheme']),
    showScheme(id:number) {
      alert(id);
    },
    async editScheme(id:number) {
      const curScheme = await this.getScheme(id);
      this.schema = curScheme;
      this.showSchema = true;
    },
    deleteScheme(id:number) {
      alert(id);
    },
  },
});
</script>
<style lang="scss" scoped>
.table{
  &-row{
    width:100%;
    display: flex;
  }
  &-cell{
    &-70{
      width: 70%;
    }
    &-10{
      width: 10%;
    }
  }
}
</style>
