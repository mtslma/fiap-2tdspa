/* 
-- Criando uma tabela aluno
CREATE TABLE Aluno (
    id_aluno int primary key,
    nome_aluno varchar2(255),
    nota_aluno number
);

DROP TABLE Aluno;
*/

SET SERVEROUTPUT ON

DECLARE
    -- O sinal de porcentagem indica a herança, nesse caso a herança do tipo
    nota Aluno.nota_aluno%type;
BEGIN
    nota := 10;
    dbms_output.put_line('Nota:  ' || nota); 
END;