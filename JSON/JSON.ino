#include <ArduinoJson.h>

const int LED = 3;

void setup() {
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
  Serial.setTimeout(50);
}

void loop() {
 
 if (Serial.available() > 0){
   char texto[200];
   Serial.readBytesUntil('\n', texto, 200);
   //Criar o buffer do JSON
   StaticJsonBuffer<200> jsonBuffer; // reserva 200 bytes
   //Decodificar o JSON que esta em texto
   JsonObject& obj = jsonBuffer.parseObject(texto);
   //Verificar se o objeto foi criado 
   if(obj.success()){
    int led = obj["led"];
    //Acender o led
    analogWrite(LED, led);
    Serial.println(String("Valor do LED: ") + led);
   }
 obj["luz"] = analogRead(A1);
 obj.printTo(Serial); 
 Serial.println(); 
 delay(500); 
 }
}
