[
    {
        "id": "f6e61a44.70c7d8",
        "type": "tab",
        "label": "Exercício1-Inject"
    },
    {
        "id": "2c47467.c5919ba",
        "type": "tab",
        "label": "Exercicio1-insert"
    },
    {
        "id": "199348d0.ddc567",
        "type": "mongodb",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "27017",
        "db": "fiap",
        "name": ""
    },
    {
        "id": "8c928d1.fad667",
        "type": "mqtt-broker",
        "z": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "70ee46e9.ff08a8",
        "type": "inject",
        "z": "f6e61a44.70c7d8",
        "name": "",
        "topic": "",
        "payload": "{\"deviceId\":76093,\"temp\":25.0,\"luz\":50}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 108,
        "y": 72,
        "wires": [
            [
                "3b436883.8bb6f8"
            ]
        ]
    },
    {
        "id": "3b436883.8bb6f8",
        "type": "function",
        "z": "f6e61a44.70c7d8",
        "name": "insere data",
        "func": "msg.payload.timestamp = new Date(); \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 277.5,
        "y": 164,
        "wires": [
            [
                "ba3e361c.4e65b8"
            ]
        ]
    },
    {
        "id": "ba3e361c.4e65b8",
        "type": "mqtt out",
        "z": "f6e61a44.70c7d8",
        "name": "",
        "topic": "fiap/lab903/arduino",
        "qos": "",
        "retain": "",
        "broker": "8c928d1.fad667",
        "x": 504.5,
        "y": 245,
        "wires": []
    },
    {
        "id": "4d0f6f62.004aa",
        "type": "mqtt in",
        "z": "2c47467.c5919ba",
        "name": "",
        "topic": "fiap/lab903/arduino",
        "qos": "2",
        "broker": "8c928d1.fad667",
        "x": 202.5,
        "y": 78,
        "wires": [
            [
                "5bc9935a.a71b6c"
            ]
        ]
    },
    {
        "id": "3c3d8e22.41fce2",
        "type": "mongodb out",
        "z": "2c47467.c5919ba",
        "mongodb": "199348d0.ddc567",
        "name": "",
        "collection": "arduino",
        "payonly": true,
        "upsert": false,
        "multi": false,
        "operation": "insert",
        "x": 571.5,
        "y": 275,
        "wires": []
    },
    {
        "id": "5bc9935a.a71b6c",
        "type": "function",
        "z": "2c47467.c5919ba",
        "name": "parse JSON",
        "func": "msg.payload = JSON.parse(msg.payload);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 388.5,
        "y": 178,
        "wires": [
            [
                "3c3d8e22.41fce2"
            ]
        ]
    }
]