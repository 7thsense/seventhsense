import com.typesafe.sbt.S3Plugin.S3._
import com.typesafe.sbt.S3Plugin._
import org.rbayer.GruntSbtPlugin.gruntSettings
import org.rbayer.GruntSbtPlugin.GruntKeys
import sbt.Keys._
import sbt.{Credentials, _}
import S3._
import com.amazonaws.services.s3.model.ObjectMetadata

object Deploy {
    lazy val root = Project("seventhsense", file(".")) dependsOn (s3Plugin)
    lazy val s3Plugin = uri("git://github.com/7thsense/sbt-s3.git")

    val accessKey = sys.env.getOrElse("AWS_ACCESS_KEY_ID", "AKIAIDMRR5XTLVPTYPZQ")
    val secretAccessKey = sys.env.getOrElse("AWS_SECRET_ACCESS_KEY", "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")
    val bucketName = "www.theseventhsense.com"

    val hostName = bucketName + ".s3.amazonaws.com"

    val base = file(".")
    val webBase = base / "dist"

    def webSources(base: File): PathFinder = webBase ** ("*.*" -- ".*")

    val webMappings = webSources(base) pair relativeTo(webBase :: Nil)

    def shortCacheAge = {
        val omd = new ObjectMetadata()
        omd.setCacheControl("max-age=10")
        omd
    }

    def oneYearCacheAge = {
        val omd = new ObjectMetadata()
        omd.setCacheControl("max-age=31536000")
        omd
    }

  /**
    * Files with cache-busted names should get far-future expires. We determine
    * this by looking for filenames with 2 or more "." in them and extracting the
    * "secondary" suffix. If it is 8 characters long, it must be unique.
    *
    * For example: FILENAME.CACHBUST.EXT
    *
    * @param filename
    * @return
    */
    def isCacheable(filename: String): Boolean = {
      val parts = filename.split("\\.")
      if (parts.length <=2) false
      else parts.reverse(1).length == 8
  }

    val fileMetadata = webMappings.toMap.values.map { file =>
      if(isCacheable(file)) {
          file -> oneYearCacheAge
      } else {
          file -> shortCacheAge
      }
    }.toMap


    // Define a new "publish aws" task that publishes a zip file to s3 and then
    // initiates deployment via elastic beanstalk by creating a new "application version"
    val settings: Seq[Setting[_]] = s3Settings ++ gruntSettings ++ Seq(
        credentials += Credentials("Amazon S3", hostName, accessKey, secretAccessKey),
        progress in upload := true,
        host in upload := hostName,
        mappings in upload := webMappings,
        metadata := fileMetadata,
        upload <<= upload dependsOn (GruntKeys.grunt in Compile)
    )
}
