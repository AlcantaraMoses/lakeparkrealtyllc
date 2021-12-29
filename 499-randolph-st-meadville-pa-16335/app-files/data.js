var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.789967530177945,
        "pitch": 0.08869909864190006,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.0655052006930426,
          "pitch": 0.11087004190077288,
          "rotation": 0,
          "target": "2-kitchen2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen1",
      "name": "kitchen.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 0.05445126821451396,
          "pitch": 0.24018194125291714,
          "rotation": 0,
          "target": "2-kitchen2"
        },
        {
          "yaw": 2.8620516304192662,
          "pitch": 0.08198514117374422,
          "rotation": 0,
          "target": "3-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen2",
      "name": "kitchen.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6236753313482879,
        "pitch": 0.03397725447971034,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.353970846390233,
          "pitch": 0.11240751772181667,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": -2.909128558086813,
          "pitch": 0.16713967508210636,
          "rotation": 0,
          "target": "1-kitchen1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-livingroom",
      "name": "Livingroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.9565599495834203,
        "pitch": 0.07585906501697437,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.633182864207626,
          "pitch": -0.00989737964741444,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -3.0540609626786193,
          "pitch": 0.0193433135612473,
          "rotation": 0,
          "target": "5-front-door"
        },
        {
          "yaw": 1.42490104324908,
          "pitch": 0.04707448767899791,
          "rotation": 0,
          "target": "1-kitchen1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7849081627776968,
        "pitch": 0.09739935740819305,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.5606772346861284,
          "pitch": 0.008877339564293152,
          "rotation": 0,
          "target": "3-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-front-door",
      "name": "Front Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.0606979031143773,
        "pitch": 0.09448477252617415,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.217466223284017,
          "pitch": 0.07743208058534634,
          "rotation": 0,
          "target": "3-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "499 Randolph St, Meadville, PA 16335",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
