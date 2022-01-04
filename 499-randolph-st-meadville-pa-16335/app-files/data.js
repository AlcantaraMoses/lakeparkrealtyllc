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
        "yaw": -2.0376413889542278,
        "pitch": 0.009853752559495277,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.1840491386263476,
          "pitch": 0.1195547376151449,
          "rotation": 0,
          "target": "2-kitchen_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
          "yaw": 0.036320814571350724,
          "pitch": 0.17080519105076597,
          "rotation": 0,
          "target": "2-kitchen_1"
        },
        {
          "yaw": 3.046945411718969,
          "pitch": 0.10573147545787265,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen_1",
      "name": "Kitchen_1",
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
        "yaw": -1.261397050304982,
        "pitch": 0.11577550497184497,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.3859779833297097,
          "pitch": -0.026978175467711196,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": -2.8711985414556196,
          "pitch": 0.1319451264511784,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
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
        "yaw": 2.26212934028694,
        "pitch": 0.056652204884862556,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.3847163449588002,
          "pitch": 0.05758183951047613,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": 2.6779076626381917,
          "pitch": 0.004775818316101521,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -3.139756611867977,
          "pitch": 0.005242647059635175,
          "rotation": 0,
          "target": "5-front-door"
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
        "yaw": 3.004540537448449,
        "pitch": 0.10499596378641485,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.552959961787421,
          "pitch": 0.05636454151063752,
          "rotation": 0,
          "target": "3-living-room"
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
        "yaw": 0.89588756794552,
        "pitch": 0.03714251095669674,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.39034008586753,
          "pitch": -0.11010303342780148,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "499 RANDOLPH ST MEADVILLE, PA 16335",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
