var APP_DATA = {
  "scenes": [
    {
      "id": "0-livingroom",
      "name": "livingroom",
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
          "yaw": 0.24461689334327197,
          "pitch": 0.31903295302949175,
          "rotation": 0,
          "target": "2-kitchen"
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
        "yaw": 1.7154760773129833,
        "pitch": 0.06756553151341649,
        "fov": 1.5298766778395319
      },
      "linkHotspots": [
        {
          "yaw": 1.7154760773129833,
          "pitch": 0.06756553151341649,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
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
        "fov": 1.5298766778395319
      },
      "linkHotspots": [
        {
          "yaw": -0.38285972579555505,
          "pitch": 0.1587559916943917,
          "rotation": 0,
          "target": "1-bathroom"
        },
        {
          "yaw": -3.0308248536459086,
          "pitch": 0.23623389141640416,
          "rotation": 0,
          "target": "0-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Highway 18 Apt 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
