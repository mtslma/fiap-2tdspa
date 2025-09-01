SET SERVEROUTPUT ON;

BEGIN
    if &num MOD 2 = 0 then
        dbms_output.put_line('O número é par');
    else
        dbms_output.put_line('O número é impar');
    end if;
END;
