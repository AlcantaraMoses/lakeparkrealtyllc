var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
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
        "yaw": 0.04439313500986053,
        "pitch": 0.08451080071983519,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.023349463791794,
          "pitch": 0.0949571008916017,
          "rotation": 0,
          "target": "3-living-room2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7919171930011615,
          "pitch": 0.08733033915006239,
          "title": "Front exit door",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-private-exit",
      "name": "private exit",
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
        "yaw": 2.97521886341958,
        "pitch": 0,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.97521886341958,
          "pitch": 0,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8326038196777628,
          "pitch": -0.07389589979362832,
          "rotation": 0,
          "target": "1-private-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room2",
      "name": "Living Room2",
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
        "yaw": -1.1236042179391248,
        "pitch": 0.11094274248416092,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.3295330767969773,
          "pitch": 0.05234528635882185,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.020073254859877,
          "pitch": 0.050435725956608835,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": 0.8587249552511551,
          "pitch": 0.19977004820841415,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
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
        "yaw": 0.32753682405055606,
        "pitch": -0.012317190699375757,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 0.7845334187549788,
          "pitch": -0.08025952351668408,
          "rotation": 0,
          "target": "3-living-room2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Water St 201",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
