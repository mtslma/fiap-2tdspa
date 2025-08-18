SET SERVEROUTPUT ON;

DECLARE
    v1 NUMBER(2);
    v2 v1%TYPE; 
BEGIN
    v1 := 15;
    v2 := v1;
    DBMS_OUTPUT.PUT_LINE('v1: ' || v1);
    DBMS_OUTPUT.PUT_LINE('v2: ' || v2);
END;