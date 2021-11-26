<template>
    <div class="container">
    <div class="layout">
      <!-- <button @click="update">Update</button> -->
<div v-for="scheme in schemes" :key="scheme.key" class="table-row">
    <div class="table-cell-80"> {{ scheme.schema.schemaName}}</div>
    <div class="table-cell-10" @click="showScheme(scheme.id)"><span class="link">Show</span></div>
    <div class="table-cell-10" @click="editScheme(scheme.id)"><span class="link">Edit</span></div>
  </div>
    <NewEditScheme v-if="showSchema" :cur-schema="curSchema"/>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import NewEditScheme from '@/components/NewEditScheme.vue';

type propertyType = {
  key: 'string',
  name: 'string',
  fieldType: 'string',
}
type schemaType = {
   id: number,
  schema: {
    name: 'string',
    properties: Array<propertyType>,
  }
}

export default defineComponent({
  name: 'Schemes',
  components: {
    NewEditScheme,
  },
  data() {
    return {
      schemes: Array<schemaType>(),
      curSchema: 'object',
      showSchema: false,
    };
  },
  async mounted() {
    const rawSchemesdata = await this.getSchemes();
    this.schemes = JSON.parse(JSON.stringify(rawSchemesdata));
  },
  methods: {
    ...mapActions(['getSchemes', 'getScheme', 'updateScheme']),
    showScheme(id:number) {
      alert(id);
    },
    async editScheme(id:number) {
      const curScheme = await this.getScheme(id);
      this.curSchema = curScheme;
      this.showSchema = true;
    },
    deleteScheme(id:number) {
      alert(id);
    },
    update() {
      this.updateScheme();
    },
  },
});
</script>
<style lang="scss" scoped>
.link{
  cursor: pointer;
}
.table{
  &-row{
    width:100%;
    display: flex;
  }
  &-cell{
    &-80{
      width: 80%;
    }
    &-10{
      width: 10%;
    }
  }
}
</style>
