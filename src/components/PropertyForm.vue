<template>
  <div class="form-layout">
    <div class="form-column">
      <div class="collapse" @click="togglePropertyVisibility">
        <span class="arrow arrow-button"></span>
      </div>
      <h2>Свойство {{ idx }}</h2>
      <font-awesome-icon icon="trash" @click="deleteProperty(idx)" />
      <div v-if="propertyVisibility">
        <div class="form-field">
          <label
            ><span class="red">*</span> Ключ свойства
            <input
              v-model="item.key"
              placeholder="Укажите ключ свойства"
              @input.stop="setValue($event, 'key')"
            />
          </label>
        </div>
        <div class="form-field">
          <label
            ><span class="red">*</span> Название свойства
            <input
              v-model="item.name"
              placeholder="Укажите название свойства"
              @input.stop="setValue($event, 'name')"
            />
          </label>
        </div>
        <div class="form-field">
          <label
            ><span class="red">*</span> Поле для отображения
            <div>
              <select
                v-model="item.fieldType"
                @change.stop="setValue($event, 'fieldType')"
              >
                <option disabled selected>Выберите поле для отображения</option>
                <option value="text">Текстовое поле</option>
                <option value="number">Числовое поле</option>
                <option value="password">Пароль</option>
                <option value="checkbox">Чекбокс</option>
                <option value="phone">Номер телефона</option>
                <option value="dropdown">Выпадающий список</option>
              </select>
              <div
                class="arrow arrow-select"
                @click="togglePropertyVisibility"
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="form-column">
      <validation
        v-if="item.fieldType"
        :field-type="item.fieldType"
        :cur-valid-params="{ ...validation }"
        @set-required="setRequired"
        @set-min-val="seMinVal"
        @set-max-val="seMaxVal"
        @set-reg-exp="setRegExp"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Validation from './Validation.vue';

type propertyType = {
  key: 'string';
  name: 'string';
  fieldType: 'string';
};

export default defineComponent({
  name: 'property-form',
  components: {
    Validation,
  },
  data() {
    return {
      item: { key: '', name: '', fieldType: '' },
      propertyVisibility: true,
      validation: {} as any,
      fullItem: {} as any,
    };
  },
  props: {
    property: Object as PropType<propertyType>,
    idx: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.assignPropValues(this.property);
  },

  methods: {
    assignPropValues(property: any) {
      this.item.key = property?.key;
      this.item.name = property?.name;
      this.item.fieldType = property?.fieldType;
      this.validation.isRequired = property?.isRequired;
      this.validation.minVal = property?.minVal;
      this.validation.maxVal = property?.maxVal;
      this.validation.regExp = property?.regExp;
    },
    setRequired(val: any) {
      this.validation.isRequired = val;
      this.setValue(false, '');
    },
    setMinVal(val: any) {
      this.validation.minVal = val;
      this.setValue(false, '');
    },
    setMaxVal(val: any) {
      this.validation.maxVal = val;
    },
    setRegExp(val: any) {
      this.validation.regExp = val;
      this.setValue(false, '');
    },
    setValue(event: any, itemProp: string) {
      switch (itemProp) {
        case 'key':
          this.item.key = event.target.value;
          break;
        case 'name':
          this.item.name = event.target.value;
          break;
        case 'fieldType':
          this.item.fieldType = event.target.value;
          break;
        default:
          break;
      }
      if (this.item.fieldType && this.item.name && this.item.key) {
        this.$emit('set-prop-item', { ...this.item, ...this.validation });
      }
    },
    togglePropertyVisibility() {
      this.propertyVisibility = !this.propertyVisibility;
    },
    deleteProperty(idx: number) {
      this.$emit('delete-property', idx);
    },
  },
});
</script>

<style lang="scss" scoped>
h2 {
  margin-left: 10px;
  position: relative;
  display: inline-block;
}
.form {
  &-layout {
    display: flex;
  }
}
.arrow {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  z-index: 9999999;
  border-top: 4px solid rgb(36, 39, 36);
  cursor: pointer;
  &-button {
    left: 3px;
    bottom: 5px;
  }
  &-select {
    right: 10px;
    top: 40px;
  }
}
.collapse {
  position: relative;
  display: inline-block;
  width: 12px;
}
.fa-trash {
  color: grey;
  position: absolute;
  top: 30px;
  right: 15px;
}
</style>
