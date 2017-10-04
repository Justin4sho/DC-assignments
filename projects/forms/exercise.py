import os

import boto3
import tornado.ioloop
import tornado.web
import tornado.log

from jinja2 import \
  Environment, PackageLoader, select_autoescape

from dotenv import load_dotenv
load_dotenv('.env')

PORT = int(os.environ.get('PORT', '8888'))

client = boto3.client(
  'ses',
  aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
  aws_secret_access_key=os.environ.get('AWS_SECRET_KEY'),
  region_name="us-east-1"
)

ENV = Environment(
  loader=PackageLoader('myapp', 'templates'),
  autoescape=select_autoescape(['html', 'xml'])
)


class TemplateHandler(tornado.web.RequestHandler):
  def render_template (self, tpl, context):
    template = ENV.get_template(tpl)
    self.write(template.render(**context))

class MainHandler(TemplateHandler):
  def get(self):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template("index.html", {'name':'justin'})

class PageHandler(TemplateHandler):
  def get(self, hobbies):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template(hobbies + '.html', {})

class WorkHandler(TemplateHandler):
  def get(self):
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template("work.html", {})

  def post(self):
      day = self.get_body_argument('day')

      if day == 'Sunday' or day == 'Saturday':
          self.write('Sleep in')
      else:
          self.write('Go to Work')
def make_app():
  return tornado.web.Application([
    (r"/", MainHandler),
    (r"/page/(.*)", PageHandler),
    (r"/work", WorkHandler),
    (r"/static/(.*)",
        tornado.web.StaticFileHandler,
        {'path': 'static'})
  ], autoreload=True)

if __name__ == "__main__":
  tornado.log.enable_pretty_logging()
  app = make_app()
  app.listen(PORT)
  print('Server started on localhost:' + str(PORT))
  print('Press ctrl + c to stop server')
  tornado.ioloop.IOLoop.current().start()
