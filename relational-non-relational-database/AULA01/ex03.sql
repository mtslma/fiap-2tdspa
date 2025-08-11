/* Habilita o DBSM_OUTPUT para exibição no terminal*/
SET SERVEROUTPUT ON;


DECLARE
    VLR INT:=2; ANT INT; SUC INT;
    
BEGIN
    ANT:=VLR-1;
    SUC:=VLR+1;
    DBMS_OUTPUT.PUT_LINE('Valor inicial: ' || VLR || ' --- Antecessor: ' || ANT || ' --- Sucessor: ' || SUC);

END;