<template>
  <LineChart v-bind="lineChartProps" />
</template>

<script setup lang="ts">
import { Chart, ChartOptions, registerables } from 'chart.js';
import { computed, defineProps, ref } from 'vue';
import { LineChart, useLineChart } from 'vue-chart-3';
import Metrics from '~/types/metrics';

Chart.register(...registerables);
const chartData = ref<any>({
  datasets: []
});

const props = defineProps<{
  days: Record<number, Metrics>;
}>();

const data = {
  labels: [] as string[],
  datasets: [] as any[]
};

const days: Record<number, Metrics> = Object.fromEntries(Object.entries(props.days).sort());

for (let day in days) {
  data.labels.push(new Date(parseInt(day)).toLocaleDateString());
  const stats: Metrics = days[day];

  for (let key in stats) {
    if (key.startsWith('Click')) continue;
    let dataset = data.datasets.find(({ label }) => label == key);
    if (dataset == undefined) {
      dataset = {
        label: key,
        yAxisID: key == 'clicks' ? 'clicks' : 'requests',
        backgroundColor: { requests: '#3730a3', impressions: '#4f46e5', clicks: '#818cf8' }[key],
        data: [] as number[]
      };
      data.datasets.push(dataset);
    }
    // @ts-ignore
    dataset.data.push(stats[key]);
  }
}

chartData.value = { ...data };

const options = computed<ChartOptions<'line'>>(() => ({
  scales: {
    requests: {
      type: 'linear',
      position: 'left',
      title: {
        text: 'Requests/impressions'
      }
    },
    clicks: {
      type: 'linear',
      position: 'right',
      title: {
        text: 'Clicks'
      }
    }
  },
  plugins: {}
}));

const { lineChartProps, lineChartRef } = useLineChart({
  chartData: chartData.value,
  options
});
</script>
