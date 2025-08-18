/*
-- Inserindo dados na tabela
INSERT INTO Aluno (id_aluno, nome_aluno, nota_aluno) VALUES (1, 'João', 8.5);
INSERT INTO Aluno (id_aluno, nome_aluno, nota_aluno) VALUES (2, 'Maria', 7.0);
INSERT INTO Aluno (id_aluno, nome_aluno, nota_aluno) VALUES (3, 'Pedro', 6.8);
INSERT INTO Aluno (id_aluno, nome_aluno, nota_aluno) VALUES (4, 'Ana', 9.2);
INSERT INTO Aluno (id_aluno, nome_aluno, nota_aluno) VALUES (5, 'Carlos', 5.5);
*/

-- Criando a variável
VARIABLE media number;

EXEC :media:=8;

SELECT * FROM Aluno;


SELECT * FROM Aluno WHERE nota_aluno>:media;