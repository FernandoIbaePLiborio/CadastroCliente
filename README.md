# CadastroCliente

-----------------------------------------------------------------------------------------------------------------------------------
Documento Técnico Back - End -> Java jdk 1.8
-----------------------------------------------------------------------------------------------------------------------------------
--Feature Cadastro Cliente (SCRIPT - Oracle)

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

-----------------------------------------------------------------------------------------------------------------------------------
Server -> Standalone Wildfly -> wildfly-10.1.0.Final -> Configurações
-----------------------------------------------------------------------------------------------------------------------------------

<datasource jndi-name="java:jboss/ProjectClient" pool-name="ProjectClient" enabled="true" use-java-context="true">
    <connection-url>jdbc:oracle:thin:@localhost:1521/xe</connection-url>
    <driver>oracle</driver>
    <security>
        <user-name>liborio</user-name>
        <password>liborio</password>
    </security>
</datasource>
<drivers>
    <driver name="oracle" module="com.oracle">
        <xa-datasource-class>oracle.jdbc.xa.client.OracleXADataSource</xa-datasource-class>
    </driver>
</drivers>

Obs -> Drive ojdbc8-12.2.0.1.jar
-----------------------------------------------------------------------------------------------------------------------------------
Documento das Requisições do serviço em Doc_Service.docx encontrado neste mesmo diretório.
-----------------------------------------------------------------------------------------------------------------------------------
