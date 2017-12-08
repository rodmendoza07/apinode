CREATE DATABASE testapimysql;

USE testapimysql;

CREATE TABLE IF NOT EXISTS users (
    id int (10) unsigned NOT NULL AUTO_INCREMENT
    , username varchar(50) COLLATE utf8_unicode_ci NOT NULL
    , email varchar(100) COLLATE utf8_unicode_ci NOT NULL
    , passwd varchar(200) COLLATE utf8_unicode_ci NOT NULL
    , created_at timestamp DEFAULT CURRENT_TIMESTAMP
    , update_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    , PRIMARY KEY(id)
    , UNIQUE KEY users_email_unique (email)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;