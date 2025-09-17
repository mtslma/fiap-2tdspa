/***********************************************************************************
 * Projeto: Envio de Dados Aleatórios para ThingSpeak via ESP32                    *
 * Autor: André Tritiack                                                           *
 * Repositório: https://github.com/prof-atritiack/tutorial-esp32-thingspeak        *
 *                                                                                 *
 * Este projeto exemplifica como conectar o ESP32 a uma rede Wi-Fi                 *
 * e enviar múltiplos campos (fields) para um canal do ThingSpeak.                 *
 *                                                                                 *
 * Baseado em exemplos oficiais da biblioteca ThingSpeak,                          *
 * tutoriais da Random Nerd Tutorials, e documentação da Espressif.                *
 ***********************************************************************************/

#include <Arduino.h>

// Dependências 

#define LED 5
#define POT 35
#define pinoDHT 23 // pino SDA do sensor conectado ao GPIO 23
#define tipoDHT DHT22 // modelo do sensor


DHT dht(pinoDHT, tipoDHT);

// Variável que recebe valor do ADC (POT)
int valor; 
int percentual;
float temp;
float umid;

// Biblioteca já instalada
#include <WiFi.h>

// Biblioteca a instalar
#include <DHT.h>
#include <ThingSpeak.h>

// Insira as credenciais da rede WiFi:
// Nome da rede (SSID: Service Set Identifier)
#define SSID "Wokwi-GUEST" // SSID do Public IOT Gateway do Wokwi
// Senha da rede
#define SENHA ""


// Configurações do ThingSpeak
WiFiClient client;
unsigned long channelID = 3077494; // Substitua 00000 pelo seu Channel ID
const char* writeAPIKey = "HR4FJWB09QXRXRJN"; // Substitua pela sua Write API Key


void setup() {
  Serial.begin(115200);
  Wifi.mode(WIFI_STA);
  ThingSpeak.begin(client);
  Serial.println("Aguardando 2 segundos para iniciar... ");
  Serial.println("");
  delay(2000);

  // Informações da conexão
  Serial.println("Rede conectada: ");
  Serial.println(WiFi.SSID());
  Serial.println("IP Local: ");
  Serial.println(WiFi.localIP());
  Serial.println("MAC Address: ");
  Serial.println(Wifi.macAddress());
  Serial.println("");
}

void loop() {
    // Verificação, conexão ou reconexão com a rede WiFi
  if(WiFi.status() != WL_CONNECTED){
    Serial.print("Tentando conectar a rede SSID: ");
    Serial.println(SECRET_SSID);
    while(WiFi.status() != WL_CONNECTED){
      WiFi.begin(SECRET_SSID, SECRET_PW);  
      Serial.print(".");
      delay(2000);     
    } 
     // Informações da conexão
    Serial.print("Rede conectada: ");
    Serial.println(WiFi.SSID());
    Serial.print("Endereço IP: ");
    Serial.println(WiFi.localIP());
    Serial.print("MAC Address: ");
    Serial.println(WiFi.macAddress());
    Serial.println("");

    // Geração de daods aleatórios (simulados)
    // Substitua pelos valores que seja enviar ao canal ThingSpeak

    valor = analogRead(POT);
    percentual = map(valor, 0, 4095, 0, 100);
    temp = dht.readTemperature();
    umid = random(100, 500) / 10;


    // Envio para os campos do ThingSpeak
    ThingSpeak.setField(1, valor);
    ThingSpeak.setField(2, percentual);
    ThingSpeak.setField(3, temp);
    ThingSpeak.setField(4, umid);

    int status = ThingSpeak.writeFields(channelID, writeAPIKey);

      
    int status = ThingSpeak.writeFields(channelID, writeAPIKey);

    if (status == 200) {
      Serial.println("Dados enviados com sucesso para canal ThingSpeak!");
    } else {
      Serial.print("Erro ao enviar: ");
      Serial.println(status);
    }

    delay(20000); // Delay de 20s para respeitar o limite gratuito do ThingSpeak
}