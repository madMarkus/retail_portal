<?php
    class db {
        // Properties
        private $db_host = 'localhost';
        private $db_user = 'root';
        private $db_password = '';
        private $db_name = 'retail_db';

        // Connect
        public function connect(){
            $mysql_connection_string = "mysql:host=$this->db_host;dbname=$this->db_name;charset=utf8";
            $db_connection = new PDO($mysql_connection_string, $this->db_user, $this->db_password);
            $db_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $db_connection;
        }
    }
?>