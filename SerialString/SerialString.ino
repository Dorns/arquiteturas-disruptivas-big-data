const int LED = 3;
char nextChar = 0, lendo=0;
String valor;

void setup() {
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
}

void loop() {
 if(Serial.available() > 0){
  //lê o byte disponivel na porta serial
  nextChar = Serial.read();
  if(nextChar == 'B'){
    lendo = 1; //lendo <- true
    valor = "";
  }else if(nextChar == 'E'){
    lendo = 0; //lendo <- false
    analogWrite(LED, valor.toInt());
    Serial.println(String("Potencia do LED: ") + valor);
  }else if(lendo && nextChar >= '0' && nextChar <= '9'){
    valor += nextChar;
  }
 }
}
