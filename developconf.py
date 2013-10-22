# -*- coding: utf-8 -*-

AUTHOR = u"Rúnar Berg Baugsson Sigríðarson"
SITENAME = AUTHOR
SITESUBTITLE = u"Pælingar, sögur og önnur ritverk"
SITEURL = "//localhost:8000"

DEFAULT_LANG = u"is"
TIMEZONE = "Atlantic/Reykjavik"
DATE_FORMATS = {
    'is': '%d. %B %Y',
}

PLUGIN_PATH = "/home/alka/develop/pelican/pelican-plugins"
PLUGINS = ["assets",]
THEME = "theme"

PATH = "contents/"
ARTICLE_PATH = "articles/"
OUTPUT_PATH = "develop/"
STATIC_PATHS = ["extras/",]
EXTRA_PATH_METADATA = {
    "extras/robots.txt": {'path': "robots.txt"},
    "extras/humans.txt": {'path': "humans.txt"},
    "extras/.htaccess": {'path': ".htaccess"},
    "extras/apple-touch-icon-precomposed.png": {
        'path': "apple-touch-icon-precomposed.png"},
    "extras/favicon.ico": {'path': "favicon.ico"},
}
DELETE_OUTPUT_DIRECTORY = True
OUTPUT_RETENTION = (".git", ".git*", "README*")

ARTICLE_URL = "{category}/{slug}.html"
ARTICLE_SAVE_AS = ARTICLE_URL
CATEGORY_URL = "{slug}/"
CATEGORY_SAVE_AS = "{slug}/index.html"

IGNORE_FILES = ['.#*', '#*#']
