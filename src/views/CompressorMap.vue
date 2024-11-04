<template>
  <div>
    <h1 class="ml-16">Compressor Map</h1>
    <apexchart
      class="mt-16 ml-16"
      width="1000"
      type="line"
      :options="options"
      :series="series"
      :markers="markers"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import seriesData from '../assets/sample_data/CompressorMapData.json'

export default defineComponent({
  data() {
    return {
      options: {
        legend: {
          position: 'right',
          markers: {
            shape: 'diamond',
          },
        },
        xaxis: {
          type: 'numeric',
          title: {
            text: 'Volumetric flow [m3/h]',
          },
          min: 150,
          max: 400,
          stepSize: 62.5,
          decimalsInFloat: 1,
          tickAmount: 3,
          labels: {
            show: true,
          },
        },
        yaxis: {
          type: 'numeric',
          title: {
            text: 'Pressure Ratio [-]',
          },
          min: 100,
          decimalsInFloat: 2,
          stepSize: 30,
          tickAmount: 4,
        },
        colors: [
          '#FF0000',
          '#00FF00',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
        markers: {
          size: 4,
        },
      },
      series: seriesData,
    }
  },
})
</script>
