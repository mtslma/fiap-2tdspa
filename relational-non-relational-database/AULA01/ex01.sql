/* Habilita o DBSM_OUTPUT para exibição no terminal*/
SET SERVEROUTPUT ON;

DECLARE
-- Declarando a variável nome
    nome VARCHAR2(30);
BEGIN
    -- Atribuindo um valor para a variável 
    nome := 'Mateus Lima';
    DBMS_OUTPUT.PUT_LINE('Olá, meu nome é ' || nome || '!');
END;    