var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7085080546181697,
          "pitch": 0.1006841178039668,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.309179422188345,
          "pitch": 0.06635488609843776,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": 2.082811981431835,
          "pitch": 0.12660733958859183,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "bedroom",
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
        "yaw": 1.4909457056518223,
        "pitch": 0.059915017036693996,
        "fov": 1.5486176214610408
      },
      "linkHotspots": [
        {
          "yaw": 1.5666384381532659,
          "pitch": 0.05974388961312549,
          "rotation": 0,
          "target": "0-living-room"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2433790778890792,
          "pitch": 0.07918225625133601,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
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
        "yaw": 0.7609639401113277,
        "pitch": 0.11746480410462823,
        "fov": 1.5486176214610408
      },
      "linkHotspots": [
        {
          "yaw": 0.2779921109146102,
          "pitch": 0.1037716399606019,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -0.519761733028842,
          "pitch": 0.046054580615027874,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": -0.12677683049117405,
          "pitch": -0.02769554208940228,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apt 2 first floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
