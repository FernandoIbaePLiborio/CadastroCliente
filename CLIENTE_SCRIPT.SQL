
--Cliente SCRIPT


Set trims on
Set echo on
Set feed on
Set timi on
Set time on

Spool CREATE_ALL_TABLES.log


CREATE USER liborio identified by liborio;
grant connect, resource to liborio;

CREATE TABLE CLIENTE (
	ID NUMBER(10,0) NOT NULL,
	CPF VARCHAR2(11) NOT NULL,
	NOME VARCHAR2(150) NOT NULL,
	TELEFONE VARCHAR(11) NOT NULL
);

CREATE SEQUENCE SEQ_CLIENTE MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 1000 NOORDER NOCYCLE;
GRANT SELECT, INSERT, UPDATE, DELETE on Cliente to liborio;

Spool off
Exit

