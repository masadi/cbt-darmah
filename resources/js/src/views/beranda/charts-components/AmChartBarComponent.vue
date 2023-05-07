<template>
  <div class="hello" ref="chartdiv">
  </div>
</template>
<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);
    root.setThemes([am5themes_Animated.new(root)]);
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
      panX: false,
      panY: true,
      })
    );
    var old_data = [];
    var value1 = 20;
    var value2 = 200;
    var value3 = 2000;

    var names = [
      "Raina",
      "Demarcus",
      "Carlo",
      "Jacinda",
      "Richie",
      "Antony",
      "Amada",
      "Idalia",
      "Janella",
      "Marla",
      "Curtis",
      "Shellie",
      "Meggan",
      "Nathanael",
      "Jannette",
      "Tyrell",
      "Sheena",
      "Maranda",
      "Briana"
    ];

    for (var i = 0; i < names.length; i++) {
      value1 += Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * value1 * 0.2
      );
      value2 += Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * value2 * 0.2
      );
      value3 += Math.round(
        (Math.random() < 0.5 ? 1 : -1) * Math.random() * value3 * 0.2
      );
      old_data.push({
        category: names[i],
        value1: value1,
        value2: value2,
        value3: value3
      });
    }
    var data = this.data;
    console.log(data);
    console.log(this.data);
    // make x axes stack
    chart.bottomAxesContainer.set("layout", root.horizontalLayout);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 25
    });

    yRenderer.labels.template.setAll({
      multiLocation: 0.5,
      location: 0.5,
      paddingRight: 15
    });

    yRenderer.grid.template.set("location", 0.5);

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "nama",
        tooltip: am5.Tooltip.new(root, {}),
        renderer: yRenderer
      })
    );

    yAxis.data.setAll(data);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(field, judul, margin, column) {
      var xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 40
      });
      
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50
      });
      
      var xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {
            animationDuration: 0
          }),
          marginLeft: margin // this makes gap between axes
        })
      );

      var series;
      if (column) {
        series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: "nama",
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: judul+": {valueX}"
            })
          })
        );
      } else {
        series = chart.series.push(
          am5xy.LineSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueXField: field,
            categoryYField: "nama",
            sequencedInterpolation: true,
            tooltip: am5.Tooltip.new(root, {
              pointerOrientation: "horizontal",
              labelText: judul+": {valueX}"
            })
          })
        );
      }

      if (!column) {
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            locationX: 1,
            locationY: 0.5,
            sprite: am5.Circle.new(root, {
              radius: 4,
              fill: series.get("fill")
            })
          });
        });
      }

      series.data.setAll(data);
      series.appear();

      return series;
    }

    createSeries("sekolah_provinsi_count", "Jumlah SMK", 0, true);
    createSeries("pd_provinsi_count", "Jumlah Peserta Didik", 30, false);
    createSeries("blangko", "Jumlah Blangko Ijazah Terdistribusi", 30, false);

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      yAxis: yAxis
    }));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    this.root = root;
  },
  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
</script>
<style scoped>
.hello {
  width: 100%;
  height: 2000px;
}
</style>