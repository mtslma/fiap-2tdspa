/*
RM561061 - Arthur Thomas Mariano de Souza
RM559873 - Davi Cavalcanti Jorge
RM561061 - Mateus da Silveira Lima 
*/

SET SERVEROUTPUT ON;

-- EXERCÍCIO 01 (Checkpoints)

ACCEPT CP1 NUMBER FORMAT '999.99' PROMPT 'Informe a nota da CP01: ';
ACCEPT CP2 NUMBER FORMAT '999.99' PROMPT 'Informe a nota da CP02: ';
ACCEPT CP3 NUMBER FORMAT '999.99' PROMPT 'Informe a nota da CP03: ';

VARIABLE media_check NUMBER;

DECLARE
   CP1 NUMBER := &CP1;
   CP2 NUMBER := &CP2;
   CP3 NUMBER := &CP3;
   maior1 NUMBER;
   maior2 NUMBER;
BEGIN
   IF (CP1 BETWEEN 0 AND 10) AND (CP2 BETWEEN 0 AND 10) AND (CP3 BETWEEN 0 AND 10) THEN
       IF CP1 IS NULL THEN CP1 := 0; END IF;
       IF CP2 IS NULL THEN CP2 := 0; END IF;
       IF CP3 IS NULL THEN CP3 := 0; END IF;
       -- Encontrando as duas maiores notas
       IF CP1 <= CP2 AND CP1 <= CP3 THEN
           maior1 := CP2;
           maior2 := CP3;
       ELSIF CP2 <= CP1 AND CP2 <= CP3 THEN
           maior1 := CP1;
           maior2 := CP3;
       ELSE
           maior1 := CP1;
           maior2 := CP2;
       END IF;
       :media_check := (maior1 + maior2) / 2;
       DBMS_OUTPUT.PUT_LINE('Média Checkpoint: ' || TO_CHAR(:media_check));
   ELSE
       DBMS_OUTPUT.PUT_LINE('Erro: As notas devem estar entre 0 e 10.');
   END IF;
END;
/
-- EXERCÍCIO 02 (Sprint)

ACCEPT SP1 NUMBER FORMAT '999.99' PROMPT 'Informe a nota da Sprint 01: ';
ACCEPT SP2 NUMBER FORMAT '999.99' PROMPT 'Informe a nota da Sprint 02: ';

VARIABLE media_sprint NUMBER;

DECLARE
   SP1 NUMBER := &SP1;
   SP2 NUMBER := &SP2;
BEGIN
   IF (SP1 BETWEEN 0 AND 100) AND (SP2 BETWEEN 0 AND 100) THEN
       IF SP1 IS NULL THEN SP1 := 0; END IF;
       IF SP2 IS NULL THEN SP2 := 0; END IF;
       :media_sprint := ((SP1 + SP2) / 2) / 10;
       DBMS_OUTPUT.PUT_LINE('Média Sprint: ' || TO_CHAR(:media_sprint));
   ELSE
       DBMS_OUTPUT.PUT_LINE('Erro: As notas devem estar entre 0 e 100.');
   END IF;
END;
/
-- EXERCÍCIO 03 (Global Solution)

ACCEPT gs1 NUMBER FORMAT '999.99' PROMPT 'Insira sua nota na Global Solution: ';

VARIABLE media_gs NUMBER;
DECLARE
   gs1 NUMBER;
BEGIN
   gs1 := &gs1;
   IF gs1 IS NULL THEN
       gs1 := 0;
   ELSIF gs1 < 0 OR gs1 > 100 THEN
       DBMS_OUTPUT.PUT_LINE('Nota inválida para Global Solution. Digite entre 0 e 100.');
       gs1 := 0;
   END IF;
   :media_gs := (gs1 / 10);
   DBMS_OUTPUT.PUT_LINE('Média Global Solution: ' || :media_gs);
END;
/
-- EXERCÍCIO 04 (Média Final)

VARIABLE med_final NUMBER;
DECLARE
   med_final NUMBER;
BEGIN
   -- Mostrar cálculo detalhado
   DBMS_OUTPUT.PUT_LINE('Cálculo da Média Final:');
   DBMS_OUTPUT.PUT_LINE('Global Solution (60%): ' || :media_gs || ' * 0.6 = ' || (:media_gs * 0.6));
   DBMS_OUTPUT.PUT_LINE('Checkpoint (20%): ' || :media_check || ' * 0.2 = ' || (:media_check * 0.2));
   DBMS_OUTPUT.PUT_LINE('Sprint (20%): ' || :media_sprint || ' * 0.2 = ' || (:media_sprint * 0.2));
   med_final := (:media_gs * 0.6) + (:media_check * 0.2) + (:media_sprint * 0.2)/10;
   :med_final := med_final;
   DBMS_OUTPUT.PUT_LINE('Média Final: ' || TO_CHAR(:med_final));
   IF med_final >= 6 THEN
       DBMS_OUTPUT.PUT_LINE('Situação: APROVADO');
   ELSIF med_final >= 2 AND med_final < 6 THEN
       DBMS_OUTPUT.PUT_LINE('Situação: EXAME');
   ELSE
       DBMS_OUTPUT.PUT_LINE('Situação: REPROVADO');
   END IF;
END;
/