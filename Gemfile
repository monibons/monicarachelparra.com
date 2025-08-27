source "https://rubygems.org"

ruby "~> 3.3"
gem "jekyll", "~> 4.3.3"
gem "minima", "~> 2.5"
gem "webrick", "~> 1.7"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end


# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
