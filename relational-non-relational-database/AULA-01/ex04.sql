/* Habilita o DBSM_OUTPUT para exibição no terminal*/
SET SERVEROUTPUT ON;

DECLARE
    SALARIO_MINIMO NUMBER:=1412;
    MEU_SALARIO NUMBER;
    QTD NUMBER;    
BEGIN
    MEU_SALARIO := 2824;
    QTD := MEU_SALARIO/SALARIO_MINIMO;
    DBMS_OUTPUT.PUT_LINE('Você recebe ' || QTD || ' salários mínimos');
END;