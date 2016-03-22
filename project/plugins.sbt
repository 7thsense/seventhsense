import sbt.Keys._
import sbt.Resolver
import sbt._

addSbtPlugin("org.rbayer" % "grunt-sbt" % "1.0")

lazy val root = (project in file(".")).dependsOn(s3Plugin)

lazy val s3Plugin = uri("https://github.com/7thsense/sbt-s3.git#cc77ccdd21c8d2733e7a63fac764b8374ded8eca")

addSbtPlugin("com.github.alexarchambault" % "coursier-sbt-plugin" % "1.0.0-M10")
