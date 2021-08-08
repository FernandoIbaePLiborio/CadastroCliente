# CadastroCliente

-----------------------------------------------------------------------------------------------------------------------------------
Documento Técnico Back - End -> Java jdk 1.8 -> Jersey Rest
-----------------------------------------------------------------------------------------------------------------------------------
--Feature Cadastro Cliente (SCRIPT - Oracle)

ScriptCadastroCliente.txt encontra-se neste diretório.

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
