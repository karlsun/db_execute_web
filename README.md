## Install

### For Windows

Requirement: `Node.js`  `VisualStudio 2010/VisualStudio 2012`

You need to download and install [Oracle instant client](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html) from following links:

http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html

1. Instant Client Package - Basic or Basic Lite: All files required to run OCI, OCCI, and JDBC-OCI applications
2. Instant Client Package - SDK: Additional header files and an example makefile for developing Oracle applications with Instant Client

For Windows, please make sure 12_1 version is used.

**Please make sure you download the correct packages for your system architecture, such as 64 bit vs 32 bit**
**Unzip the files 1 and 2 into the same directory, such as /opt/instantclient\_11\_2 or c:\instantclient\_12\_1**

#### On Windows, you need to set the environment variables:

If you have VisualStudio 2012 installed,

    OCI_INCLUDE_DIR=C:\instantclient_12_1\sdk\include
    OCI_LIB_DIR=C:\instantclient_12_1\sdk\lib\msvc\vc11
    Path=...;c:\instantclient_12_1\vc11;c:\instantclient_12_1
    OCI_VERSION=12
    NLS_LANG=american_america.AL32UTF8

**Please make sure c:\instantclient_12_1\vc11 comes before c:\instantclient_12_1**

If you have VisualStudio 2010 installed,

    OCI_INCLUDE_DIR=C:\instantclient_12_1\sdk\include
    OCI_LIB_DIR=C:\instantclient_12_1\sdk\lib\msvc\vc10
    Path=...;c:\instantclient_12_1\vc10;c:\instantclient_12_1
    OCI_VERSION=12
    NLS_LANG=american_america.AL32UTF8

**Please make sure c:\instantclient_12_1\vc10 comes before c:\instantclient_12_1**


### Install node_modules
    > npm install
    
### Run Server
    > node bin\db_execute_web