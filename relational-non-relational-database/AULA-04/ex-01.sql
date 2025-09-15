SET SERVEROUTPUT ON;

DECLARE
    soma NUMBER := 0;
BEGIN
    FOR i IN 1..10 LOOP
        DBMS_OUTPUT.PUT_LINE(soma || '+' || i);
        soma := soma + 1;
        DBMS_OUTPUT.PUT_LINE('=' || soma);

    END LOOP;
    DBMS_OUTPUT.PUT_LINE('O total é: ' || soma);
END;