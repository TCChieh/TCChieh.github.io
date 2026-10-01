# Tzu-Chi Chieh — personal academic website

Live site: https://tcchieh.github.io/

Built with [Jekyll](https://jekyllrb.com/) on GitHub Pages and Bootstrap 5.

## Where to edit

| What | File |
| --- | --- |
| Site title, description, CV link, analytics | `_config.yml` |
| Navbar | `_includes/nav.html` |
| Shared `<head>`, footer, scripts | `_layouts/default.html` |
| About, education, experience, awards, contact | `index.html` |
| Publications | `_data/publications.yml` |
| Conferences | `_data/conferences.yml` |
| Web projects | `_data/projects.yml` |
| Photography | `photos.json` |
| Styles | `style.css`, `assets/css/extra.css` |

## Run locally

```bash
gem install bundler jekyll jekyll-seo-tag
jekyll serve
```

Then open http://localhost:4000.
