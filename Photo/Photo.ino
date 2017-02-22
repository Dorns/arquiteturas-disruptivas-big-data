void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  // Referencia de saida
  pinMode(5, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  // Referencia de Saida
  int luz = analogRead(A1);
  Serial.print("Luminosidade: ");
  Serial.println(luz);
  if (luz < 200){
    digitalWrite(5, HIGH);  
  }else{
    digitalWrite(5, LOW);
  }
  delay(2500);
}
