var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom1",
      "name": "Livingroom1",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.5984419615666514,
        "pitch": -0.0931996156747168,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.8770734854785456,
          "pitch": -0.017898716256574687,
          "rotation": 0,
          "target": "1-livingroom2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.820977633327299,
          "pitch": -0.016714171624673924,
          "title": "Exit",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-livingroom2",
      "name": "LivingRoom2",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.06041524333826054,
        "pitch": -0.0038040659459390724,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.8259727070165788,
          "pitch": 0.18449216064064444,
          "rotation": 0,
          "target": "2-bathroom1"
        },
        {
          "yaw": -0.8912566319711885,
          "pitch": 0.18517785333406422,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom1",
      "name": "Bathroom1",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 2.2057886162968483,
        "pitch": 0.009346171603571207,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.11129649082521631,
          "pitch": 0.03313030256721561,
          "rotation": 0,
          "target": "1-livingroom2"
        },
        {
          "yaw": 1.5570290069629715,
          "pitch": 0.19026539059504088,
          "rotation": 0,
          "target": "3-bathroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom2",
      "name": "Bathroom2",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.9368821838026804,
        "pitch": -0.04752655399103034,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.260217930504247,
          "pitch": -0.05056536163950298,
          "rotation": 0,
          "target": "2-bathroom1"
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.5437371900443839,
        "pitch": -0.026628461621371002,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.8704816034376925,
          "pitch": 0.08684911257640593,
          "rotation": 0,
          "target": "1-livingroom2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apt 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
