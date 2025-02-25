<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        placeholder="Item Name"
        style="width: 200px"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        Search
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        Add
      </el-button>
      <el-select
        v-model="listQuery.monthSelected"
        style="margin-left: 10px; width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in monthOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-select
        v-model="listQuery.yearSelected"
        style="margin-left: 10px; width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in yearOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <router-link target="_blank" :to="'/pdf/export-report-tx/'+listQuery.monthSelected+'/'+listQuery.yearSelected">
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-download"
          style="margin-left: 10px"
        >
          Export
        </el-button>
      </router-link>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Item Name" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.items_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Type" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.total }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Created By" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.created_by }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" align="center">
        <template slot-scope="{ row }">
          <span>{{ formatDateTime(row.date) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <el-button
            v-if="row.status != 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left: 50px"
      >
        <el-form-item label="Item" prop="items_id">
          <el-select v-model="temp.items_id" class="filter-item" placeholder="Please select">
            <el-option v-for="item in listItem" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="Date" prop="date">
          <el-date-picker v-model="temp.date" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item label="Type" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in typeOptions" :key="item.key" :label="item.name" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item label="Total" prop="total">
          <el-input-number v-model="temp.total" :min="1" :max="999" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> Cancel </el-button>
        <el-button
          type="primary"
          @click="createData()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table
        :data="pvData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogPvVisible = false"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, createTransaction, deleteTransaction } from '@/api/transaction'
import { fetchList as fListItem } from '@/api/item'
import waves from '@/directive/waves' // waves directive
import { toDateTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const typeOptions = [
  { key: 'IN', name: 'IN' },
  { key: 'OUT', name: 'OUT' }
]

export default {
  name: 'TransactionTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      typeOptions,
      tableKey: 0,
      list: null,
      listItem: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        name: undefined,
        type: undefined,
        sort: 'desc',
        monthSelected: '01',
        yearSelected: 2024
      },
      importanceOptions: [1, 2, 3],
      sortOptions: [
        { label: 'Date Ascending', key: 'asc' },
        { label: 'Date Descending', key: 'desc' }
      ],
      monthOptions: [
        { label: 'Januari', key: '01' },
        { label: 'Februari', key: '02' },
        { label: 'Maret', key: '03' },
        { label: 'April', key: '04' },
        { label: 'Mei', key: '05' },
        { label: 'Juni', key: '06' },
        { label: 'Juli', key: '07' },
        { label: 'Agustus', key: '08' },
        { label: 'September', key: '09' },
        { label: 'Oktober', key: '10' },
        { label: 'November', key: '11' },
        { label: 'Desember', key: '12' }
      ],
      yearOptions: [
        { label: '2023', key: 2023 },
        { label: '2024', key: 2024 },
        { label: '2025', key: 2025 },
        { label: '2026', key: 2026 }
      ],
      statusOptions: ['published', 'draft', 'deleted'],
      temp: {
        id: undefined,
        items_id: undefined,
        users_id: this.$store.getters.userID,
        created_by: this.$store.getters.created_by,
        items_name: '',
        type: '',
        total: 0,
        date: new Date()

      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        items_id: [
          { required: true, message: 'items name is required', trigger: 'change' }
        ],
        users_id: [
          { required: true, message: 'user is required', trigger: 'blur' }
        ],
        type: [
          { required: true, message: 'type is required', trigger: 'change' }
        ],
        total: [
          { required: true, message: 'total is required', trigger: 'blur' }
        ],
        date: [
          { required: true, message: 'date is required', trigger: 'change' }
        ]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
    this.getItemList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then((response) => {
        this.list = response.data
        this.total = 0 // response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    getItemList() {
      this.listLoading = true
      fListItem(null).then((response) => {
        this.listItem = response.data
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: 'Success',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        items_id: undefined,
        users_id: this.$store.getters.userID,
        created_by: this.$store.getters.created_by,
        type: '',
        total: 0,
        date: new Date()
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createTransaction(this.temp).then(() => {
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
            this.getList()
          })
        }
      })
    },
    handleDelete(row, index) {
      deleteTransaction(row.id).then(() => {
        this.list.splice(index, 1)
        this.$notify({
          title: 'Success',
          message: 'Delete Successfully',
          type: 'success',
          duration: 2000
        })
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then((excel) => {
        const tHeader = ['id', 'name', 'created_at', 'updated_at']
        const filterVal = ['id', 'name', 'created_at', 'updated_at']
        const data = this.formatJson(filterVal)
        const date = new Date()
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: `items-${date}`
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map((v) =>
        filterVal.map((j) => {
          if (j === 'timestamp') {
            return toDateTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },
    formatDateTime(dateTime) {
      return toDateTime(dateTime)
    }
  }
}
</script>
