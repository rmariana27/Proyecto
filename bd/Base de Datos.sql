-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dolcebanana
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dolcebanana
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dolcebanana` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dolcebanana` ;

-- -----------------------------------------------------
-- Table `dolcebanana`.`comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dolcebanana`.`comentario` (
  `idComentario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cuenta` VARCHAR(100) NULL DEFAULT NULL,
  `detalle` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idComentario`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dolcebanana`.`contacto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dolcebanana`.`contacto` (
  `idContacto` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `apellido` VARCHAR(100) NULL DEFAULT NULL,
  `telefono` VARCHAR(100) NULL DEFAULT NULL,
  `mail` VARCHAR(100) NULL DEFAULT NULL,
  `fecha` VARCHAR(30) NULL DEFAULT NULL,
  `consulta` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idContacto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dolcebanana`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dolcebanana`.`usuario` (
  `idUsuario` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `cuenta` VARCHAR(100) NULL DEFAULT NULL,
  `contraseña` VARCHAR(15) NULL DEFAULT NULL,
  `rol` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `dolcebanana` ;

-- -----------------------------------------------------
-- procedure comentarioAddOrEdit
-- -----------------------------------------------------

DELIMITER $$
USE `dolcebanana`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `comentarioAddOrEdit`(
	in _id int,
	in _usuario varchar (30),
	in _detalle varchar(1000),
	in _fecha datetime
)
begin
	if _id=0 then
		insert into dolcebanana.comentarios (usuario, detalle, fecha)
		values (_usuario, _detalle, _fecha);
		set _id = last_insert_id();
    else
		update comentarios
        set 
			usuario = _usuario,
            detalle = _detalle,
            fecha = _fecha
            where id = _id;
	end If;
    
    select _id as id;
end$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
