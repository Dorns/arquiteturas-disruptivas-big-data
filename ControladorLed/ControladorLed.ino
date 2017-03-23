int led = 3;
char nextByte = 0, lendo = 0;
String valor;
void setup() {
Serial.begin(9600);
pinMode(led,OUTPUT);
}
void loop() {
if (Serial.available() > 0) {
// lê o byte disponível na porta serial:
nextByte = Serial.read();
if(nextByte == 'B') {
lendo = 1; //lendo <- true
valor = "";
} else if(nextByte == 'E') {
lendo = 0; //lendo <- false
analogWrite(led,valor.toInt());
Serial.print("Potencia do LED: ");
Serial.println(valor.toInt(), DEC);
} else if(lendo && nextByte >= '0' && nextByte <= '9') {
valor += nextByte;
}
}
}
