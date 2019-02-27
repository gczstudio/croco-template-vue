  <template>
  <div class="p-200">
    {{#if_eq library "element"}}
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="createTime"
                       label="日期"
                       width="180">
      </el-table-column>

      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>

      <el-table-column prop="address"
                       label="地址">
      </el-table-column>

    </el-table>
    {{/if_eq}}
    {{#if_eq library "iview"}}
    <Table stripe
           :columns="columns"
           :data="tableData"></Table>
    {{/if_eq}}
  </div>
</template>

  <script>
export default {
  data() {
    return {
      {{#if_eq library "iview"}}
      columns: [
        {
          title: '日期',
          key: 'createTime'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      {{/if_eq}}
      tableData: []
    };
  },
  created() {
    this.$api['user/userList']({ pageNo: 2, pageSize: 20 }).then(data => {
      this.tableData = data;
    });
  },
  mounted() {}
};
</script>

<style>
.p-200 {
  padding: 30px 300px;
  text-align: left;
}
</style>
