var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom",
      "name": "LivingRoom",
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
        "yaw": -0.5425856814088377,
        "pitch": -0.014888251906484129,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.0637056437888539,
          "pitch": 0.09728163184155925,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": -0.5833987335413386,
          "pitch": 0.14771099484046069,
          "rotation": 0,
          "target": "3-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3228915270312482,
          "pitch": 0.03090911357675097,
          "title": "Exit",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-bathroom2",
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
        "yaw": -2.281896113014403,
        "pitch": 0.19503462794170368,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.8596180224247973,
          "pitch": 0.06601582400289807,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": -1.3885829070551843,
          "pitch": -0.020786659599432156,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.804731902855231,
        "pitch": 0.0818949923477259,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5397406667708093,
          "pitch": 0.13561276808912837,
          "rotation": 0,
          "target": "1-bathroom2"
        },
        {
          "yaw": -1.1875141892624868,
          "pitch": 0.12973956426289135,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
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
        "yaw": 0.4708222932839341,
        "pitch": 0.06415066307767603,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.9072452724460263,
          "pitch": 0.03198569409657992,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apt1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
