## Local Setup

This site runs on **Ruby 3.3.x** with **Jekyll 4.3.x**.

### Quickstart

1. Install Ruby 3.3 (via Homebrew on macOS):
   ```sh
   brew install ruby@3.3
   echo 'export PATH="$(brew --prefix ruby@3.3)/bin:$PATH"' >> ~/.zshrc
   exec zsh

2. Install Bundler
   ```sh
   gem install bundler

3. Install Dependencies
   ```sh
   bundle install

4. Run the site
   ```sh
   make serve

5. Visit http://localhost:4000 