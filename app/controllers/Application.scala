package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def app() = Action {
    Ok(views.html.app())
  }
}
