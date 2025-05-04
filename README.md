# Gorepoint
Gorepoint.com website content

[![Netlify Status](https://api.netlify.com/api/v1/badges/b79a9a4c-cce0-4755-9cea-9a82336c7c05/deploy-status)](https://app.netlify.com/sites/epic-pike-25287d/deploys)

## Notes

Netlify is configured to create a preview site from each PR and publish to gorepoint.com when those changes are merged.

### Updates

The Gem package versions should periodically be updated to be clear of any security issues and to use a current version of Ruby.

Notes from May 2025 where I needed a big upgrade and also had a new Mac which didn't have Ruby on it yet:

1. Install RVM
2. Install Ruby 3.4.3 `rvm install 3.4.3 --with-openssl-dir=$(brew --prefix openssl@3)`
3. Check if compiler set up correctly `ruby -rrbconfig -e 'puts RbConfig::CONFIG["CXX"]'` - proper value is `g++`

If value False is returned, need to reinstall (details learned from [this eventmachine issue](https://github.com/eventmachine/eventmachine/issues/990#issuecomment-2448081063)):
1. Remove existing XCode CLI tools `sudo rm -rf /Library/Developer/CommandLineTools`
2. Reinstall `xcode-select --install`
3. Reinstall Ruby `rvm reinstall 3.4.3 --with-openssl-dir=$(brew --prefix openssl@3)`

With a working Ruby environment, do the following to update packages:
1. Run `bundle install` to install Jekyll and dependent packages
2. Or run `bundle upgrade` to upgrade to the latest
3. Make sure the site works with `bundle exec jekyll serve`
4. Commit changes made to `Gemfile.lock` to a branch and create a PR
5. If the PR preview looks good, merge it
