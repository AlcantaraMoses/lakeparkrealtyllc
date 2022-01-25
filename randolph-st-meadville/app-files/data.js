var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom",
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
        "yaw": -1.7010483090543786,
        "pitch": 0.015214785929307695,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.8908764716401318,
          "pitch": 0.03424648712678646,
          "rotation": 0,
          "target": "3-livingroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
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
        "yaw": 0.5345856613984576,
        "pitch": 7.105427357601002e-15,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -0.22619444456731586,
          "pitch": 0.14937629586931855,
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
        "yaw": 0.22552389362149583,
        "pitch": 0.07046612643950034,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -3.1311543472259196,
          "pitch": 0.03776298681598078,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -0.41313926599664796,
          "pitch": 0.10096921965304873,
          "rotation": 0,
          "target": "3-livingroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-livingroom2",
      "name": "Livingroom2",
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
        "yaw": 2.7524088892075333,
        "pitch": -0.051545944427566326,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.774957826448711,
          "pitch": 0.20495910681522034,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": -0.11261060249459831,
          "pitch": 0.09267094290644096,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Randolph St Meadville",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
