# express-rest-api-boilerplate

## Extract DB Schema to Sequelize

sequelize-auto -h localhost -d mydb -u testuser -x password -p 3306  --dialect mysql -o  /Users/valeri/Documents/models 

## Resources

- https://support.rackspace.com/how-to/installing-mysql-server-on-ubuntu/
- https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
- sudo mysqladmin -u root password {password} // Set password
- (How to set root access)[https://stackoverflow.com/questions/11223235/mysql-root-access-from-all-hosts]
- `CREATE SCHEMA `beingenergy` DEFAULT CHARACTER SET DEFAULT ;`
- `CREATE USER 'dev'@'localhost' IDENTIFIED BY 'password';`
- `GRANT ALL PRIVILEGES ON beingenergy . * TO 'dev'@'localhost';`