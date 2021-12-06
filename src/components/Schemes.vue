<template>
  <div class="container">
    <div class="layout">
      <h1 class="title left">Мои схемы</h1>
      <div v-for="scheme in schemes" :key="scheme.key" class="table-row">
        <div class="table-cell-55 left">{{ scheme.schema.schemaName }}</div>
        <div class="table-cell-15" @click="showScheme(scheme.id)">
          <span class="link blue">Просмотреть</span>
        </div>
        <div class="table-cell-15" @click="editScheme(scheme.id)">
          <span class="link blue">Изменить</span>
        </div>
        <div class="table-cell-15" @click="deleteScheme(scheme.id)">
          <span class="link red">Удалить</span>
        </div>
      </div>
      <NewEditScheme v-if="showSchema" :cur-schema="curSchema" />
      <button class="button-primary" @click="createUpdateSchema">
        Создать схему
      </button>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import NewEditScheme from '@/components/NewEditScheme.vue';

type propertyType = {
  key: 'string';
  name: 'string';
  fieldType: 'string';
};
type schemaType = {
  id: number;
  schema: {
    name: 'string';
    properties: Array<propertyType>;
  };
};

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
    async editScheme(id: number) {
      this.showSchema = false;
      const curScheme = await this.getScheme(id);
      this.curSchema = curScheme;
      this.showSchema = true;
    },
    showScheme(id: number) {
      this.$router.push(`/show/${id}`);
    },
    deleteScheme(id: number) {
      console.log(id); // для избежания ошибки
      // предполагается метод удаления, но его нет в апи
    },
    update() {
      this.updateScheme();
    },
  },
});
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
}
.table {
  &-row {
    width: 100%;
    display: flex;
    background: #fff;
    padding: 15px;
    margin-bottom: 1px;
  }
  &-cell {
    &-55 {
      width: 55%;
    }
    &-15 {
      width: 15%;
    }
  }
}
</style>
