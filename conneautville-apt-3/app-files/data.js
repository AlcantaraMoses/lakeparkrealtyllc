var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "kitchen",
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
          "yaw": 0.31751239927520203,
          "pitch": 0.08688369059111523,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": 0.06894515802090773,
          "pitch": 0.08457979703841367,
          "rotation": 0,
          "target": "2-bathroom"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7518859882934628,
          "pitch": 0.07837134627447107,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": -2.5258113324450093,
          "pitch": 0.0862996892375687,
          "rotation": 0,
          "target": "2-bathroom"
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.842270919011238,
        "pitch": 0.07562455707309113,
        "fov": 1.5298766778395319
      },
      "linkHotspots": [
        {
          "yaw": 3.08707503671219,
          "pitch": 0.15434921110352384,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 2.824121144656883,
          "pitch": 0.13106174306762952,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Conneautville apt 3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
