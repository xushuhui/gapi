<template>
  <div id="newuser"></div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { GroupColumn } from '@antv/g2plot'

export default {
  name: 'GroupedColumn',
  data() {
    return {
      data: [
        { date: '1月', area: '日新增下载', value: 1200 },
        { date: '1月', area: '日新增用户', value: 800 },
        { date: '1月', area: '日新增注册', value: 900 },
        { date: '2月', area: '日新增下载', value: 800 },
        { date: '2月', area: '日新增用户', value: 1000 },
        { date: '2月', area: '日新增注册', value: 1100 },
      ]
    }
  },
  mounted() {
    const canvas = new GroupColumn('newuser', {
      title: {
        text: '日新增用户',
        visible: true,
      },
      data: this.data,
      groupField: 'area',
      xField: 'date',
      yField: 'value',
      meta: {
        date: {
          alias: '日期',
        },
        value: {
          alias: '数量',
        },
      },
      forceFit: true,
      color: ['#4577FF', '#00C292', '#FEC108'],
      columnSize: 12,
      legend: {
        visible: true,
        position: 'top-right',
      },
    })
    canvas.render()
  },
}
</script>

<style scoped></style>
