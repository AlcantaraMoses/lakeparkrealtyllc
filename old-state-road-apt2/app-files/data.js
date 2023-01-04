var APP_DATA = {
  "scenes": [
    {
      "id": "0-mud-room",
      "name": "Mud Room",
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
        "yaw": 0.09519977738151297,
        "pitch": 0.13795253583300138,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -0.22331691403499399,
          "pitch": -0.09713802432703567,
          "rotation": 0,
          "target": "2-living-room"
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
          "yaw": 0.7396290396563394,
          "pitch": 0.004926876279739645,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
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
        "yaw": -0.2729336790367789,
        "pitch": 0.07390314419624922,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 0.2007284018759634,
          "pitch": 0.05698983040968919,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": -3.1244363236906096,
          "pitch": 0.11720284816285265,
          "rotation": 0,
          "target": "0-mud-room"
        },
        {
          "yaw": -0.5956797416955091,
          "pitch": 0.05364171896494341,
          "rotation": 0,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
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
        "yaw": 0.5345833652961929,
        "pitch": 0.041878448377872246,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.6649967797461471,
          "pitch": 0.013138505588113247,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Old State Road Apt2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
