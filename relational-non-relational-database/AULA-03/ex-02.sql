SET SERVEROUTPUT ON;

ACCEPT altura NUMBER FORMAT '999.99' PROMPT 'Digite a sua Altura (ex: 1.75): ';
ACCEPT peso NUMBER FORMAT '999.99' PROMPT 'Digite o seu Peso (ex: 70.5): ';

DECLARE
    imc NUMBER(5,2);
BEGIN
    imc := &peso / (&altura * &altura);
    
    DBMS_OUTPUT.PUT_LINE('--------------------');
    DBMS_OUTPUT.PUT_LINE('CALCULO DO IMC');
    DBMS_OUTPUT.PUT_LINE('Altura: ' || &altura);
    DBMS_OUTPUT.PUT_LINE('Peso: ' || &peso);
    DBMS_OUTPUT.PUT_LINE('--------------------');
    
    IF imc < 18.5 THEN
        DBMS_OUTPUT.PUT_LINE('IMC: ' || TO_CHAR(imc, '99.99') || ' - Abaixo do Peso');
    
    ELSIF imc >= 18.5 AND imc < 24.9 THEN
        DBMS_OUTPUT.PUT_LINE('IMC: ' || TO_CHAR(imc, '99.99') || ' - Normal');
    
    ELSIF imc >= 25 AND imc < 29.9 THEN
        DBMS_OUTPUT.PUT_LINE('IMC: ' || TO_CHAR(imc, '99.99') || ' - Sobrepeso - Grau I');
    
    ELSIF imc >= 30 AND imc < 39.9 THEN
        DBMS_OUTPUT.PUT_LINE('IMC: ' || TO_CHAR(imc, '99.99') || ' - Obesidade - Grau II');
    
    ELSE 
        DBMS_OUTPUT.PUT_LINE('IMC: ' || TO_CHAR(imc, '99.99') || ' - Obesidade Grave - Grau III');
    END IF;
END;
