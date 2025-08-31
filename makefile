.PHONY: build serve clean

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --livereload --host 0.0.0.0

clean:
	bundle exec jekyll clean
