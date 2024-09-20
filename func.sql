DROP PROCEDURE IF EXISTS SearchStringInAllColumns;
DELIMITER $$

CREATE PROCEDURE SearchStringInAllColumns(
    IN searchStr VARCHAR(255)
)
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE tblName, colName, colType VARCHAR(255);
    DECLARE cur CURSOR FOR
        SELECT table_name, column_name, data_type
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE table_schema = DATABASE();

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Escape only single quotes (no need to escape double quotes)
    SET @escapedSearchStr = REPLACE(searchStr, "'", "\\'");

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO tblName, colName, colType;
        IF done THEN
            LEAVE read_loop;
        END IF;

        SET @stmt = '';

        -- Handle non-BLOB columns
        IF colType IN ('varchar', 'text', 'char', 'mediumtext', 'longtext') THEN
            -- Use backticks for table and column names and COALESCE to avoid NULL values
            SET @stmt = CONCAT('SELECT * FROM `', tblName, '` WHERE `', colName, '` LIKE \'%', @escapedSearchStr, '%\'');
        
        -- Handle BLOB columns (convert to/from string)
        ELSEIF colType IN ('blob', 'mediumblob', 'longblob') THEN
            -- Use backticks for table and column names and convert BLOB data to UTF8 and back
            SET @stmt = CONCAT('SELECT * FROM `', tblName, '` WHERE CONVERT(`', colName, '` using utf8) LIKE \'%', @escapedSearchStr, '%\'');
        END IF;

        IF @stmt != '' THEN
            -- Debug output (optional)
            -- SELECT @stmt;

            PREPARE stmt FROM @stmt;
            EXECUTE stmt;
            DEALLOCATE PREPARE stmt;
        END IF;

    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;

DROP PROCEDURE IF EXISTS ReplaceStringInAllColumns;

DELIMITER $$

CREATE PROCEDURE ReplaceStringInAllColumns(
    IN searchStr VARCHAR(255), 
    IN replaceStr VARCHAR(255)
)
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE tblName, colName, colType VARCHAR(255);
    DECLARE cur CURSOR FOR
        SELECT table_name, column_name, data_type
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE table_schema = DATABASE();

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Escape only single quotes (no need to escape double quotes)
    SET @escapedSearchStr = REPLACE(searchStr, "'", "\\'");
    SET @escapedReplaceStr = REPLACE(replaceStr, "'", "\\'");

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO tblName, colName, colType;
        IF done THEN
            LEAVE read_loop;
        END IF;

        SET @stmt = '';

        -- Handle non-BLOB columns
        IF colType IN ('varchar', 'text', 'char', 'mediumtext', 'longtext') THEN
            -- Use backticks for table and column names and COALESCE to avoid NULL values
            SET @stmt = CONCAT('UPDATE `', tblName, '` SET `', colName, '` = COALESCE(REPLACE(`', colName, '`, \'', @escapedSearchStr, '\', \'', @escapedReplaceStr, '\'), `', colName, '`) WHERE `', colName, '` LIKE \'%', @escapedSearchStr, '%\'');
        
        -- Handle BLOB columns (convert to/from string)
        ELSEIF colType IN ('blob', 'mediumblob', 'longblob') THEN
            -- Use backticks for table and column names and convert BLOB data to UTF8 and back
            SET @stmt = CONCAT('UPDATE `', tblName, '` SET `', colName, '` = COALESCE(CONVERT(REPLACE(CONVERT(`', colName, '` USING utf8), \'', @escapedSearchStr, '\', \'', @escapedReplaceStr, '\') USING binary), `', colName, '`) WHERE CONVERT(`', colName, '` using utf8) LIKE \'%', @escapedSearchStr,'%\'');
        END IF;

        IF @stmt != '' THEN
            -- Debug output (optional)
            SELECT @stmt;

            PREPARE stmt FROM @stmt;
            EXECUTE stmt;
            DEALLOCATE PREPARE stmt;
        END IF;

    END LOOP;

    CLOSE cur;
END$$

DELIMITER ;
