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
        "yaw": -1.2778739348517867,
        "pitch": -0.015884518279996485,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.3592590493621337,
          "pitch": 0.13983371825290902,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -0.02624605004901781,
          "pitch": 0.1058918192814069,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": -0.6706027103121954,
          "pitch": 0.061254168557464794,
          "rotation": 0,
          "target": "3-bathroom"
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
        "yaw": -1.1717099681355592,
        "pitch": 0.014808079131338303,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.7982435050690455,
          "pitch": 0.014448939468834965,
          "rotation": 0,
          "target": "0-living-room"
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
        "yaw": -0.5034792613672998,
        "pitch": 0.011613069619841099,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.7614666491509148,
          "pitch": 0.00969058338776918,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -2.6181483937322714,
          "pitch": -0.02168099288258496,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": 2.4006001173446414,
          "pitch": 0.0029935046051061676,
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
        "yaw": -0.01938929706653525,
        "pitch": 0.29068570050526077,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -1.8683394353096183,
          "pitch": 0.05665907721713559,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apt 5, Old state Rd",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
