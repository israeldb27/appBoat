-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.0.95-community-nt


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema boat
--

CREATE DATABASE IF NOT EXISTS boat;
USE boat;

--
-- Definition of table `avaliacaobarco`
--

DROP TABLE IF EXISTS `avaliacaobarco`;
CREATE TABLE `avaliacaobarco` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataAvaliacao` datetime NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `observacao` varchar(200) NOT NULL,
  `barcoId` bigint(20) NOT NULL,
  `usuarioSolicitanteId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avaliacaobarco`
--

/*!40000 ALTER TABLE `avaliacaobarco` DISABLE KEYS */;
INSERT INTO `avaliacaobarco` (`id`,`dataAvaliacao`,`pontuacao`,`observacao`,`barcoId`,`usuarioSolicitanteId`) VALUES 
 (1,'2017-10-18 23:38:41',0,'string',0,0),
 (2,'2017-10-18 23:46:51',0,'string',0,0),
 (3,'2017-10-18 23:46:51',0,'string',0,0),
 (4,'2017-10-19 00:04:24',0,'string',0,0);
/*!40000 ALTER TABLE `avaliacaobarco` ENABLE KEYS */;


--
-- Definition of table `avaliacaodonobarco`
--

DROP TABLE IF EXISTS `avaliacaodonobarco`;
CREATE TABLE `avaliacaodonobarco` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataAvaliacao` datetime NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `observacao` varchar(200) NOT NULL,
  `usuarioSolicitanteId` bigint(20) NOT NULL,
  `donoBarcoId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avaliacaodonobarco`
--

/*!40000 ALTER TABLE `avaliacaodonobarco` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacaodonobarco` ENABLE KEYS */;


--
-- Definition of table `avaliacaousuariosolicitante`
--

DROP TABLE IF EXISTS `avaliacaousuariosolicitante`;
CREATE TABLE `avaliacaousuariosolicitante` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataAvaliacao` datetime NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `observacao` varchar(200) NOT NULL,
  `usuarioSolicitanteId` bigint(20) NOT NULL,
  `donoBarcoId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `avaliacaousuariosolicitante`
--

/*!40000 ALTER TABLE `avaliacaousuariosolicitante` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacaousuariosolicitante` ENABLE KEYS */;


--
-- Definition of table `barco`
--

DROP TABLE IF EXISTS `barco`;
CREATE TABLE `barco` (
  `id` bigint(20) NOT NULL auto_increment,
  `nome` varchar(100) NOT NULL,
  `cor` varchar(45) default NULL,
  `pes` bigint(20) default NULL,
  `tipoCasco` varchar(45) default NULL,
  `motor` varchar(45) default NULL,
  `capacidadePessoas` int(11) default NULL,
  `autonomia` int(11) default NULL COMMENT 'autonomia do barco em milhas',
  `comprimento` int(11) default NULL,
  `tipoCombustivel` varchar(45) default NULL,
  `capacidadeCombustivel` int(11) default NULL,
  `velocidade` int(11) default NULL COMMENT 'velocidade do barco em nos',
  `quantidadeCabines` int(11) default NULL,
  `observacoes` varchar(200) default NULL,
  `descricao` varchar(200) default NULL,
  `dataCadastro` datetime NOT NULL COMMENT 'data de quando o barco foi cadastrado no sistema',
  `idDonoBarco` bigint(20) NOT NULL,
  `dataUtilmaAtualizacao` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barco`
--

/*!40000 ALTER TABLE `barco` DISABLE KEYS */;
INSERT INTO `barco` (`id`,`nome`,`cor`,`pes`,`tipoCasco`,`motor`,`capacidadePessoas`,`autonomia`,`comprimento`,`tipoCombustivel`,`capacidadeCombustivel`,`velocidade`,`quantidadeCabines`,`observacoes`,`descricao`,`dataCadastro`,`idDonoBarco`,`dataUtilmaAtualizacao`) VALUES 
 (1,'string','string',0,'string','string',0,0,0,'string',0,0,0,'string','string','2017-10-18 23:33:42',0,'2017-10-18 23:33:42.746'),
 (2,'Jato','string',0,'string','string',0,0,0,'string',0,0,0,'string','string','2017-11-03 00:00:00',3,'2017-11-03 00:00:00.000'),
 (4,'Barco do Tombo','cinza',10,'madeira','yamaha',100,100,10,'diesel',100,12,2,NULL,NULL,'2017-11-19 03:44:44',8,'2017-11-19 03:44:44.683');
/*!40000 ALTER TABLE `barco` ENABLE KEYS */;


--
-- Definition of table `formagpagamentousuario`
--

DROP TABLE IF EXISTS `formagpagamentousuario`;
CREATE TABLE `formagpagamentousuario` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataCadastro` datetime NOT NULL,
  `banco` int(11) default NULL,
  `numeroCartao` int(11) default NULL,
  `agencia` int(11) default NULL,
  `conta` int(11) default NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formagpagamentousuario`
--

/*!40000 ALTER TABLE `formagpagamentousuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `formagpagamentousuario` ENABLE KEYS */;


--
-- Definition of table `historicoplanoreservabarco`
--

DROP TABLE IF EXISTS `historicoplanoreservabarco`;
CREATE TABLE `historicoplanoreservabarco` (
  `id` bigint(20) NOT NULL auto_increment,
  `barcoId` bigint(20) NOT NULL,
  `dataCadastro` datetime NOT NULL,
  `valorAluguelKm` decimal(19,2) default NULL,
  `quantMaxPessoas` int(11) default NULL,
  `distanciaMax` int(11) default NULL,
  `quantHorasDisponivel` int(11) default NULL,
  `opcaoPlano` varchar(20) NOT NULL,
  `dataInicio` date default NULL,
  `dataFim` date default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `historicoplanoreservabarco`
--

/*!40000 ALTER TABLE `historicoplanoreservabarco` DISABLE KEYS */;
INSERT INTO `historicoplanoreservabarco` (`id`,`barcoId`,`dataCadastro`,`valorAluguelKm`,`quantMaxPessoas`,`distanciaMax`,`quantHorasDisponivel`,`opcaoPlano`,`dataInicio`,`dataFim`) VALUES 
 (14,4,'2017-11-20 16:12:01','700.00',12,21,33,'D',NULL,NULL),
 (15,4,'2017-11-20 16:12:24','7008.00',12,21,33,'D',NULL,NULL);
/*!40000 ALTER TABLE `historicoplanoreservabarco` ENABLE KEYS */;


--
-- Definition of table `opcional`
--

DROP TABLE IF EXISTS `opcional`;
CREATE TABLE `opcional` (
  `id` bigint(20) NOT NULL auto_increment,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(200) default NULL,
  `observacao` varchar(200) default NULL,
  `dataCadastro` datetime NOT NULL,
  `dataUltimaAtualizacao` datetime NOT NULL,
  `barcoId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `opcional`
--

/*!40000 ALTER TABLE `opcional` DISABLE KEYS */;
INSERT INTO `opcional` (`id`,`nome`,`descricao`,`observacao`,`dataCadastro`,`dataUltimaAtualizacao`,`barcoId`) VALUES 
 (2,'Ar-condicionado3','Ar-condicionado3','Ar-condicionado3','2017-11-19 03:51:47','2017-11-19 03:51:47',4);
/*!40000 ALTER TABLE `opcional` ENABLE KEYS */;


--
-- Definition of table `ordempagamento`
--

DROP TABLE IF EXISTS `ordempagamento`;
CREATE TABLE `ordempagamento` (
  `id` bigint(20) NOT NULL auto_increment,
  `idBarco` bigint(20) NOT NULL,
  `idPlanoReservaBarco` bigint(20) NOT NULL,
  `idUsuarioSolicitante` bigint(20) NOT NULL,
  `valorPagamento` decimal(19,2) NOT NULL,
  `dataCriacao` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `dataPagamento` date default NULL,
  `dataCancelamento` date default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ordempagamento`
--

/*!40000 ALTER TABLE `ordempagamento` DISABLE KEYS */;
INSERT INTO `ordempagamento` (`id`,`idBarco`,`idPlanoReservaBarco`,`idUsuarioSolicitante`,`valorPagamento`,`dataCriacao`,`status`,`dataPagamento`,`dataCancelamento`) VALUES 
 (1,0,0,0,'0.00','2017-11-07','string','2017-11-07','2017-11-07');
/*!40000 ALTER TABLE `ordempagamento` ENABLE KEYS */;


--
-- Definition of table `planoreservabarco`
--

DROP TABLE IF EXISTS `planoreservabarco`;
CREATE TABLE `planoreservabarco` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataInicio` date default NULL,
  `dataFim` date default NULL,
  `valorAluguelKm` decimal(19,2) default NULL,
  `quantMaxPessoas` int(11) default NULL,
  `distanciaMax` int(11) default NULL,
  `quantHorasDisponivel` int(11) default NULL,
  `opcaoPlano` varchar(5) NOT NULL,
  `status` varchar(20) NOT NULL,
  `barcoId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `planoreservabarco`
--

/*!40000 ALTER TABLE `planoreservabarco` DISABLE KEYS */;
INSERT INTO `planoreservabarco` (`id`,`dataInicio`,`dataFim`,`valorAluguelKm`,`quantMaxPessoas`,`distanciaMax`,`quantHorasDisponivel`,`opcaoPlano`,`status`,`barcoId`) VALUES 
 (13,NULL,NULL,'7008.00',12,21,33,'D','criado',4);
/*!40000 ALTER TABLE `planoreservabarco` ENABLE KEYS */;


--
-- Definition of table `reservabarco`
--

DROP TABLE IF EXISTS `reservabarco`;
CREATE TABLE `reservabarco` (
  `id` bigint(20) NOT NULL auto_increment,
  `dataSolicitacao` datetime NOT NULL,
  `dataPagamento` datetime default NULL,
  `dataCancelamento` datetime default NULL,
  `dataUltimaAtualizacao` datetime NOT NULL,
  `statusReserva` varchar(45) NOT NULL,
  `dataReservaBarco` datetime NOT NULL,
  `barcoId` bigint(20) NOT NULL,
  `usuarioSolicitanteId` bigint(20) NOT NULL,
  `planoReservaBarcoId` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservabarco`
--

/*!40000 ALTER TABLE `reservabarco` DISABLE KEYS */;
INSERT INTO `reservabarco` (`id`,`dataSolicitacao`,`dataPagamento`,`dataCancelamento`,`dataUltimaAtualizacao`,`statusReserva`,`dataReservaBarco`,`barcoId`,`usuarioSolicitanteId`,`planoReservaBarcoId`) VALUES 
 (1,'2017-11-04 00:40:18',NULL,NULL,'2017-11-04 00:40:18','solicitado','2017-11-04 00:40:18',1,1,1);
/*!40000 ALTER TABLE `reservabarco` ENABLE KEYS */;


--
-- Definition of table `tipoformapagamento`
--

DROP TABLE IF EXISTS `tipoformapagamento`;
CREATE TABLE `tipoformapagamento` (
  `id` bigint(20) NOT NULL auto_increment,
  `nomeTipo` varchar(45) NOT NULL,
  `dataCadastro` datetime NOT NULL,
  `descricao` varchar(200) default NULL,
  `observacao` varchar(200) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoformapagamento`
--

/*!40000 ALTER TABLE `tipoformapagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipoformapagamento` ENABLE KEYS */;


--
-- Definition of table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL auto_increment,
  `nome` varchar(100) NOT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` varchar(45) NOT NULL,
  `perfil` varchar(45) NOT NULL,
  `dataCadastro` datetime NOT NULL,
  `dataNascimento` datetime NOT NULL,
  `dataUltimaAtualizacao` datetime NOT NULL,
  `dataUltimoAcesso` datetime default NULL,
  `cpf` varchar(45) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`,`nome`,`login`,`password`,`email`,`status`,`perfil`,`dataCadastro`,`dataNascimento`,`dataUltimaAtualizacao`,`dataUltimoAcesso`,`cpf`) VALUES 
 (1,'israel','israel','israel','israel','criado','cliente','2017-11-03 00:00:00','2017-11-03 00:00:00','2017-11-03 00:00:00','2017-11-03 00:00:00','4564444'),
 (2,'gsp','gsp','gsp','gsp','criado','donoBarco','2017-11-03 00:00:00','2017-11-03 00:00:00','2017-11-03 00:00:00','2017-11-03 00:00:00',''),
 (3,'Marli Dias Barreto','marli','marli','marli@gmail.com','criado','donoBarco','2017-11-06 00:45:14','2017-11-06 00:45:14','2017-11-06 00:45:14',NULL,''),
 (4,'Antonio Carlos','antonio','123','antonio@gmail.com','criado','cliente','2017-11-06 00:47:40','2017-11-06 00:47:40','2017-11-06 00:47:40',NULL,''),
 (5,'Jon Jones','jones','123','jones@gmail.com','criado','donoBarco','2017-11-06 23:10:10','2017-11-06 23:10:10','2017-11-06 23:10:10',NULL,'05566790755'),
 (6,'Yasmin','yasmin','123','yasmin@gmail.com','criado','cliente','2017-11-06 23:20:37','2017-11-17 00:00:00','2017-11-06 23:20:37',NULL,'05566790755'),
 (7,'Kyra Gracie','kyra','123','kyra@gmail.com','criado','cliente','2017-11-19 01:34:17','1980-11-19 00:00:00','2017-11-19 01:34:17',NULL,'05566790755');
INSERT INTO `usuario` (`id`,`nome`,`login`,`password`,`email`,`status`,`perfil`,`dataCadastro`,`dataNascimento`,`dataUltimaAtualizacao`,`dataUltimoAcesso`,`cpf`) VALUES 
 (8,'Claudio Pitombo','pitombo','123','jjjj','criado','donoBarco','2017-11-19 01:37:01','2017-11-03 00:00:00','2017-11-19 01:37:01',NULL,'0555666');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
