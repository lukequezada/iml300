const int motorPin = 2;
const int motorPinY = 3;
int incomingByte = 0;
char val;

void setup() {
  Serial.begin(9600);
  pinMode(motorPin, OUTPUT);
  pinMode(motorPinY, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  //  if (Serial.available() > 0) {
  //    int inByte = Serial.read();
  //    Serial.write(inByte);
  //    analogWrite(5, inByte);

  if (Serial.available() > 0) {
    //    val = Serial.read();
    //    int inByte = Serial.parseInt();
    int inByte = Serial.read();
    //no x no y
    if (inByte == 0) {
      digitalWrite(motorPin, LOW);
      digitalWrite(motorPinY, LOW);
    }
    //x no y
    if (inByte == 1) {
      digitalWrite(motorPin, HIGH);
      digitalWrite(motorPinY, LOW);
    }
    //x y
    if (inByte == 2) {
      digitalWrite(motorPin, HIGH);
      digitalWrite(motorPinY, HIGH);
    }
    //no x y
    if (inByte == 3) {
      digitalWrite(motorPin, LOW);
      digitalWrite(motorPinY, HIGH);
    }
  }
}
