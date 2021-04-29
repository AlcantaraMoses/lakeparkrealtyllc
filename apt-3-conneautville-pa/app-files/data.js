var APP_DATA = {
  "scenes": [
    {
      "id": "0-apt3",
      "name": "apt3",
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
        "yaw": 0.385358703258019,
        "pitch": 0.018763267308234077,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -1.0381743344501455,
          "pitch": 0.0812016426335731,
          "rotation": 0,
          "target": "1-livingroom"
        },
        {
          "yaw": -1.9966432586299803,
          "pitch": 0.08963864467984806,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.683610441796838,
          "pitch": 0.034991830961322634,
          "title": "Exit",
          "text": "Text"
        },
        {
          "yaw": -2.6873593188508877,
          "pitch": -0.02395688010278718,
          "title": "Closet",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-livingroom",
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
        "yaw": -0.24166097335305992,
        "pitch": -0.019012541554975115,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.6613571667314933,
          "pitch": 0.03514663138357221,
          "rotation": 0,
          "target": "4-bathroom1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3550878919825635,
          "pitch": 0.010430725229035431,
          "title": "exit",
          "text": "Text"
        }
      ]
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
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 3.127454922727969,
        "pitch": 0.031633811550163315,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 2.649641359312011,
          "pitch": 0.037954776204262686,
          "rotation": 0,
          "target": "0-apt3"
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
        "yaw": 1.4591099892228812,
        "pitch": -0.013234426550576828,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 1.2177569531918184,
          "pitch": 0.0924056262331483,
          "rotation": 0,
          "target": "1-livingroom"
        },
        {
          "yaw": 1.937713434398031,
          "pitch": 0.09425963059570641,
          "rotation": 0,
          "target": "4-bathroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom1",
      "name": "bathroom1",
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
        "yaw": -1.14012442120225,
        "pitch": 0.07411821124233597,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.8867005849412095,
          "pitch": 0.12115716141733657,
          "rotation": 0,
          "target": "3-bathroom2"
        },
        {
          "yaw": 2.040795923438737,
          "pitch": 0.05345834350694645,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apt 3 Conneautville, PA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
