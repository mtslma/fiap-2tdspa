/*------------------
|    EXEMPLO 01    |
------------------*/

-- Declarando uma BIND VARIABLE, uma variável declarada fora do corpo de DECLARE ou BEGIN

VARIABLE teste_bind VARCHAR2(255);

SET SERVEROUTPUT ON;

BEGIN 
    :teste_bind := 'Nosso teste';
    dbms_output.put_line(:teste_bind);
END;

-- "Imprimindo a variável"
PRINT teste_bind;

/*------------------
|    EXEMPLO 02    |
------------------*/

-- Criando a variável
VARIABLE media number;

-- Alterar/ incluir valor na variável
EXEC :media:=8;

-- Buscando pela variável
SELECT :media FROM DUAL;

-- "Imprimindo a variável"
PRINT media;