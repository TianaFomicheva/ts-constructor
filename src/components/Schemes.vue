<template>
    <div class="container">
    <div class="layout">
      <!-- <button @click="update">Update</button> -->
<div v-for="scheme in schemes" :key="scheme.key" class="table-row">
    <div class="table-cell-70"> {{ scheme.schema.schemaName}}</div>
    <div class="table-cell-10" @click="showScheme(scheme.id)">Show</div>
    <div class="table-cell-10" @click="editScheme(scheme.id)">Edit</div>
    <div class="table-cell-10" @click="deleteScheme(scheme.id)">Delete</div>
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
    console.log(this.schemes[0].schema);
  },
  methods: {
    ...mapActions(['getSchemes', 'getScheme', 'updateScheme']),
    showScheme(id:number) {
      alert(id);
    },
    async editScheme(id:number) {
      const curScheme = await this.getScheme(id);
      console.log(curScheme);
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
