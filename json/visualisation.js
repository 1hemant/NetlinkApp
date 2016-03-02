var visualData ={
  "1": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "My First Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "2": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "chart": {
          "alignTicks": false,
          "tickInterval": 20000
        },
        "title": {
          "text": "My Second Chart"
        },
        "yAxis": [
          {
            "min": 0,
            "gridLineWidth": 0,
            "title": {
              "text": "Duration"
            },
            "labels": {
              "formatter": "function() { if (this.value < 1000) { return this.value; } return this.value / 1000 + \" K\"; } "
            },
            "stackLabels": {
              "enabled": false,
              "format": "{this.point.stackTotal:.0f}",
              "style": {
                "fontWeight": "bold",
                "color": "(Highcharts.theme && Highcharts.theme.textColor) || \"gray\""
              }
            }
          },
          {
            "min": 0,
            "gridLineWidth": 0,
            "title": {
              "text": "Avg Duration Per Plan Per Customer"
            },
            "labels": {
              "formatter": "function() { if (this.value < 1000) { return this.value; } return this.value / 1000 + \" K\"; } "
            },
            "stackLabels": {
              "enabled": false,
              "format": "{this.point.stackTotal:.0f}",
              "style": {
                "fontWeight": "bold",
                "color": "(Highcharts.theme && Highcharts.theme.textColor) || \"gray\""
              }
            },
            "opposite": true
          },
          {
            "min": 0,
            "gridLineWidth": 0,
            "title": {
              "text": ""
            },
            "stackLabels": {
              "enabled": false,
              "format": "{this.point.stackTotal:.0f}",
              "style": {
                "fontWeight": "bold",
                "color": "(Highcharts.theme && Highcharts.theme.textColor) || \"gray\""
              }
            },
            "labels": {
              "enabled": false
            },
            "opposite": true
          }
        ],
        "legend": {
          "enabled": true
        },
        "tooltip": {
          "shared": true
        },
        "plotOptions": {
          "column": {
            "stacking": "percentage",
            "dataLabels": {
              "enabled": false,
              "color": "(Highcharts.theme && Highcharts.theme.dataLabelsColor) || \"white\"",
              "style": {
                "textShadow": "0 0 3px black"
              }
            }
          }
        }
      }
    }
  },
  "3": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "My third Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "4": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "My Fourth Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "5": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "Fifth Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "6": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "Sixth Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "7": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "yAxis": {
          "min": 0,
          "gridLineWidth": 0,
          "title": {
            "text": "No.ofCustomers"
          },
          "labels": {
            "formatter": "function() {if(this.value < 1000){return this.value;}return this.value/1000 + \" K\"; }"
          },
          "stackLabels": {
            "enabled": false,
            "format": "{this.point.stackTotal:.0f}",
            "style": {
              "fontWeight": "bold",
              "color": "(Highcharts.theme && Highcharts.theme.textColor) || \"gray\""
            }
          }
        },
        "legend": {
          "enabled": true
        },
        "plotOptions": {
          "column": {
            "stacking": "normal",
            "dataLabels": {
              "enabled": false,
              "color": "(Highcharts.theme && Highcharts.theme.dataLabelsColor) || \"white\"",
              "style": {
                "textShadow": "003pxblack"
              }
            }
          }
        }
      }
    }
  },
  "8": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": ""
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "9": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": ""
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  },
  "10": {
    "configuration": {
      "chartType": "Chart",
      "result": {
        "title": {
          "text": "Seventh Chart"
        },
        "plotOptions": {
          "pie": {
            "allowPointSelect": true,
            "cursor": "pointer",
            "dataLabels": {
              "enabled": false,
              "format": "<b>{point.name}</b>: {point.percentage:.0f} %"
            },
            "showInLegend": true
          }
        },
        "tooltip": {
          "backgroundColor": "rgba(255, 255, 255, .4)"
        }
      }
    }
  }
};
