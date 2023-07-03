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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5489552808869487,
          "pitch": 0.08760235180487008,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
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
        "yaw": -0.7524443943038541,
        "pitch": 0.1404159739728783,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.1271826413342474,
          "pitch": 0.11101928525354054,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-outside",
      "name": "Outside",
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
        "yaw": -1.1044072282643,
        "pitch": 0.19698124431746322,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.1461813193751489,
          "pitch": 0.22704078038302633,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
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
        "yaw": 0.9027063179304591,
        "pitch": 0.20595448487219947,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.0865205393711008,
          "pitch": 0.05475645860600409,
          "rotation": 0,
          "target": "2-outside"
        },
        {
          "yaw": 0.14310877066238703,
          "pitch": 0.15034532535698197,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": -0.6827361284615954,
          "pitch": 0.15668572207469467,
          "rotation": 0,
          "target": "0-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Highway 18 apt5 3rd floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
