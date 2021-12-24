var APP_DATA = {
  "scenes": [
    {
      "id": "0-enter-apt5",
      "name": "Enter Apt5",
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
        "yaw": -2.9473837494672956,
        "pitch": 0.13418034513195565,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 3.0213323260722422,
          "pitch": 0.08625138063568905,
          "rotation": 0,
          "target": "2-living-room"
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6891080382151742,
          "pitch": 0.04947838536327254,
          "rotation": 0,
          "target": "3-livingroom-"
        },
        {
          "yaw": -1.9608302333416603,
          "pitch": 0.07072599352024156,
          "rotation": 0,
          "target": "4-shower"
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
        "yaw": 2.8873861134696233,
        "pitch": 0.0005381658277858747,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.5609910113931962,
          "pitch": 0.012859419202731814,
          "rotation": 0,
          "target": "0-enter-apt5"
        },
        {
          "yaw": 2.1607729404340628,
          "pitch": 0.06564403908842564,
          "rotation": 0,
          "target": "3-livingroom-"
        },
        {
          "yaw": -2.729443685543199,
          "pitch": 0.004627529892832882,
          "rotation": 0,
          "target": "5-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-livingroom-",
      "name": "LivingRoom ",
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
        "yaw": -1.1824615047636389,
        "pitch": -0.0021794910351253804,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": -0.38842747484675755,
          "pitch": 0.13679879243736792,
          "rotation": 0,
          "target": "6-bedroom-2"
        },
        {
          "yaw": 1.076491420787498,
          "pitch": -0.03788244959877218,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -2.010706054299728,
          "pitch": 0.12324812910315153,
          "rotation": 0,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-shower",
      "name": "Shower",
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
        "yaw": 1.1991510420171085,
        "pitch": 0.12690561322565763,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 0.4463218023583515,
          "pitch": 0.10760243138894765,
          "rotation": 0,
          "target": "3-livingroom-"
        },
        {
          "yaw": 0.9682367598112975,
          "pitch": 0.16662151864960606,
          "rotation": 0,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1",
      "name": "Bedroom 1",
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
        "yaw": 2.7240196720415497,
        "pitch": 0.00492687627974675,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 2.2675716421462786,
          "pitch": 0.11253237365920654,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-2",
      "name": "Bedroom 2",
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
        "yaw": 1.6883965345925809,
        "pitch": 0.026906978129821013,
        "fov": 1.4665669395098586
      },
      "linkHotspots": [
        {
          "yaw": 1.4136951578482115,
          "pitch": 0.04047139204615746,
          "rotation": 0,
          "target": "3-livingroom-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "364 Pine Street Apt5, Meadville Pa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
