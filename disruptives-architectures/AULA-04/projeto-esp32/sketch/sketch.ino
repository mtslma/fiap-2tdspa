#define LED 5
#define POT 35

// Variável que recebe valor do ADC (POT)
int valor; 
int percentual;


void setup() {
  Serial.begin(115200);

  // Configurando o pino do LED
  pinMode(LED, OUTPUT);

  digitalWrite(LED, HIGH);
  delay(2000);
  digitalWrite(LED, LOW);

  Serial.println("Sistema inicializado!");
  Serial.println("");
}

void loop() {

  valor = analogRead(POT);
  delay(10); // Delay de 0.01s para estabilizar
  percentual = map(valor, 0, 4095, 0, 100);
  Serial.print("Valor ADC: " + String(valor));
  Serial.println(" | Percentual: ", + String(percentual) + " %");
}
