import sbt.Keys._
import sbt.Resolver
import sbt._

addSbtPlugin("org.rbayer" % "grunt-sbt" % "1.0")

lazy val root = (project in file(".")).dependsOn(s3Plugin)

lazy val s3Plugin = uri("https://github.com/7thsense/sbt-s3.git#aaad47c5e24f86e0f2249a52b7b18be9e55315e7")
