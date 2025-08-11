/* Habilita o DBSM_OUTPUT para exibição no terminal*/
SET SERVEROUTPUT ON;

DECLARE
    TOTAL NUMBER; VL1 NUMBER; VL2 NUMBER; VL3 NUMBER;
    -- VL1, VL2, VL3, TOTAL NUMBER;
BEGIN
    -- Atribuindo valores para as variáveis
    VL1 := 1; VL2 := 2; VL3 := 3;
    -- Definindo o total como a soma dos valores
    TOTAL := VL1 + VL2 + VL3;
    DBMS_OUTPUT.PUT_LINE('O valor total após a soma é '|| TOTAL);
END;    