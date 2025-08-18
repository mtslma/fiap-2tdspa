/* -----------------
|   EXERCÍCIO 01   |
----------------- */

SET SERVEROUTPUT ON;

DECLARE
    nome VARCHAR2(30);
BEGIN
    nome := 'Mateus Lima';
    dbms_output.put_line(nome);
END;

/* -----------------
|   EXERCÍCIO 02   |
----------------- */

DECLARE 
    total NUMBER;
    vlr_real NUMBER;
    qtd_dolar NUMBER;
BEGIN
    
    vlr_real := 4.99;
    qtd_dolar := 15;
    
    total := qtd_dolar * vlr_real;
    dbms_output.put_line(total);
END;