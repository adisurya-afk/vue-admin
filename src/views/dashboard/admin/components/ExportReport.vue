<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select
      v-model="selectedYears"
      placeholder="Select"
      size="large"
      style="width: 140px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <router-link target="_blank" :to="'/pdf/export-report/'+selectedYears">
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-download"
      >
        Export
      </el-button>
    </router-link>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      items: null,
      options: [
        {
          value: 2021,
          label: '2021'
        },
        {
          value: 2022,
          label: '2022'
        },
        {
          value: 2023,
          label: '2023'
        },
        {
          value: 2024,
          label: '2024'
        }
      ],
      selectedYears: 2024
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
