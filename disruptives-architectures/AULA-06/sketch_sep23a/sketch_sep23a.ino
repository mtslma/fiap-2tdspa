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

// Biblioteca já instalada
#include <WiFi.h>
#include <Arduino.h> // Necessária na simulação no VSCode com PlatformIO


// Biblioteca a instalar
#include <ThingSpeak.h> // Mesmo nome
#include <DHT.h> // DHT Sensor Library

// Configurações do sensor DHT
#define pinoDHT 15
#define tipoDHT DHT11
DHT dht(pinoDHT, tipoDHT);

// Configurações de WiFi
const char* SECRET_SSID = "FIAP-IOT"; // SSID do Gateway IoT público do Wokwi 
const char* SECRET_PW = "F!@p25.IOT";

// Configurações do ThingSpeak
WiFiClient client;
unsigned long channelID = 3077494; // Substitua 00000 pelo seu Channel ID
const char* writeAPIKey = "HR4FJWB09QXRXRJN"; // Substitua pela sua Write API Key

// Variáveis Globais
float temp;
float umid;

// Rotina de configuração
void setup() {
  Serial.begin(115200);

  dht.begin();

  WiFi.mode(WIFI_STA);   
  ThingSpeak.begin(client);
  Serial.println("Aguardando 2 segundos para iniciar...");
  Serial.println("");
  delay(2000);  
}

// Rotina principal
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
  }

  // Geração de dados aleatórios (simulados)
  // Substituia pelos valores que deseja enviar ao canal ThingSpeak
  temp = dht.readTemperature();
  umid = dht.readHumidity();
  // temp = 23.45;
  // umid = 22.5;

  // temp = random(-400, -800)/10;
  // umid = random(0, 1000)/10;

  Serial.println("Temperatura: " + String(temp) + (F("°C")));
  Serial.println("Umidade: " + String(umid) + (" %"));

  // Envio para os campos do ThingSpeak
  ThingSpeak.setField(1, temp);
  ThingSpeak.setField(2, umid);

  int status = ThingSpeak.writeFields(channelID, writeAPIKey);

  if (status == 200) {
    Serial.println("Dados enviados com sucesso para canal ThingSpeak!");
  } else {
    Serial.print("Erro ao enviar: ");
    Serial.println(status);
  }

  delay(20000); // Delay de 20s para respeitar o limite gratuito do ThingSpeak
}