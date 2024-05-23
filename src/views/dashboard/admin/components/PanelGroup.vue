<template>
  <el-row :gutter="40" class="panel-group">
    <el-col v-for="item in items" :key="item.id" :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-chart">
          <svg-icon icon-class="chart" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            STOCK {{ item.name.toUpperCase() }}
          </div>
          <count-to :start-val="0" :end-val="item.total" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { getTotalItems } from '@/api/item'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      items: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getTotalData()
    })
  },
  methods: {
    getTotalData() {
      getTotalItems().then((response) => {
        this.items = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-exit-fullscreen {
        background: #36a3f7;
      }

      .icon-fullscreen {
        background: #f4516c;
      }

      .icon-chart {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-exit-fullscreen {
      color: #36a3f7;
    }

    .icon-fullscreen {
      color: #f4516c;
    }

    .icon-chart {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
