[
    {
        "id": "33d70ae0.e63536",
        "type": "tab",
        "label": "Exemplo mongodb node red"
    },
    {
        "id": "274452b9.c2ff3e",
        "type": "mongodb out",
        "z": "33d70ae0.e63536",
        "mongodb": "199348d0.ddc567",
        "name": "",
        "collection": "alunos",
        "payonly": true,
        "upsert": false,
        "multi": false,
        "operation": "insert",
        "x": 590,
        "y": 284,
        "wires": []
    },
    {
        "id": "a111699b.ce6718",
        "type": "inject",
        "z": "33d70ae0.e63536",
        "name": "",
        "topic": "",
        "payload": "{\"nome\":\"Felipe Dornelas Viel\",\"rm\":76093,\"curso\":\"TDS\"}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 180.5,
        "y": 59,
        "wires": [
            [
                "e58578ec.d9f9c8"
            ]
        ]
    },
    {
        "id": "accae88b.e84c08",
        "type": "mongodb in",
        "z": "33d70ae0.e63536",
        "mongodb": "199348d0.ddc567",
        "name": "",
        "collection": "alunos",
        "operation": "find",
        "x": 330,
        "y": 452,
        "wires": [
            [
                "f5dcb859.402f08"
            ]
        ]
    },
    {
        "id": "f5dcb859.402f08",
        "type": "debug",
        "z": "33d70ae0.e63536",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 559,
        "y": 501,
        "wires": []
    },
    {
        "id": "69882dbf.8b2e04",
        "type": "inject",
        "z": "33d70ae0.e63536",
        "name": "",
        "topic": "",
        "payload": "{}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 148,
        "y": 281,
        "wires": [
            [
                "f804b707.ef9e18"
            ]
        ]
    },
    {
        "id": "e58578ec.d9f9c8",
        "type": "function",
        "z": "33d70ae0.e63536",
        "name": "insere data de nascimento",
        "func": "msg.payload.nasc = new Date(1995,0,10);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 369.5,
        "y": 155,
        "wires": [
            [
                "274452b9.c2ff3e"
            ]
        ]
    },
    {
        "id": "f804b707.ef9e18",
        "type": "function",
        "z": "33d70ae0.e63536",
        "name": "modifica filtro",
        "func": "msg.projection = {\n    nome:true,\n    rm:true,\n    nasc:true,\n    _id:false};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 240.5,
        "y": 374,
        "wires": [
            [
                "accae88b.e84c08"
            ]
        ]
    },
    {
        "id": "199348d0.ddc567",
        "type": "mongodb",
        "z": "",
        "hostname": "127.0.0.1",
        "port": "27017",
        "db": "fiap",
        "name": ""
    }
]