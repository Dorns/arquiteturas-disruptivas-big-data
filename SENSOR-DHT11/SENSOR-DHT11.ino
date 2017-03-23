#include "DHT.h"
#define DHTPIN A1 // pino que estamos conectado
#define DHTTYPE DHT11 // DHT 11
DHT dht(DHTPIN, DHTTYPE); //Instanciação do objeto do sensor
void setup() {
Serial.begin(9600);
dht.begin();
}
void loop() {
// A leitura da temperatura e umidade pode levar 250ms!
float h = dht.readHumidity();//Valor da umidade
float t = dht.readTemperature(); //Valor da temperatura
if (isnan(t) || isnan(h)) {
Serial.println("Erro ao ler do DHT");
} else {
Serial.print("Umidade: ");
Serial.print(h); Serial.print(" %\t");
Serial.print("Temperatura: ");
Serial.print(t); Serial.println(" ºC");
}
}
