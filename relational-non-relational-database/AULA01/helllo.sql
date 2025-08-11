/* Habilita o DBSM_OUTPUT para exibição no terminal*/
SET SERVEROUTPUT ON;

DECLARE 
    -- Área de declaração de variáveis
    ola VARCHAR2(50);
BEGIN
    -- Área de instruções
    ola := 'Olá mundo PL/SQL';
    DBMS_OUTPUT.PUT_LINE(ola); 
END;    