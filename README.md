# Rishi Gupta - Personal Portfolio & Blog

A minimal, professional personal website built with Jekyll and hosted on GitHub Pages.

## Features

- 📱 Fully responsive design
- 📝 Simple Markdown-based blogging
- 🎨 Minimal aesthetic with custom color palette
- ⚡ Fast static site generation
- 🔍 SEO optimized
- 📄 Professional CV page

## Color Palette

- Background: `#F2EFE9` (warm off-white)
- Secondary Background: `#E9E5DC`
- Light Gray: `#BFBFBD`
- Medium Gray: `#8C8C8C`
- Text: `#262626` (near black)

## Typography

- **Headers**: Oswald (tall, condensed)
- **Body**: Source Sans Pro (clean, readable)
- **Code**: JetBrains Mono

## Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it: `your-username.github.io` (for user site) or any name (for project site)
   - Make it public
   - Don't initialize with README

2. **Upload these files to your repository**
   
   If using command line:
   ```bash
   cd rishi-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

   Or simply drag and drop the files into GitHub's web interface.

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click "Save"

4. **Update configuration**
   - Edit `_config.yml`:
     - If using `username.github.io`: set `baseurl: ""`
     - If using project site: set `baseurl: "/your-repo-name"`
   - Update social links in `_includes/footer.html`

5. **Wait for deployment**
   - GitHub will automatically build and deploy your site
   - Check the "Actions" tab to see build progress
   - Your site will be live at:
     - `https://your-username.github.io` (user site)
     - `https://your-username.github.io/repo-name` (project site)

### Option 2: Run Locally

1. **Install Ruby and Jekyll**
   - Install Ruby: https://www.ruby-lang.org/en/documentation/installation/
   - Install Bundler: `gem install bundler`

2. **Install dependencies**
   ```bash
   cd rishi-portfolio
   bundle install
   ```

3. **Run the site locally**
   ```bash
   bundle exec jekyll serve
   ```
   
4. **View in browser**
   - Open http://localhost:4000

## How to Add Blog Posts

Adding a blog post is super simple:

1. **Create a new file** in the `_posts` folder
2. **Name it** following this format: `YYYY-MM-DD-title-of-post.md`
   - Example: `2024-12-05-my-first-post.md`

3. **Add frontmatter** at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2024-12-05
   ---
   ```

4. **Write your content** in Markdown below the frontmatter

5. **Add images** (optional):
   - Place images in `assets/images/`
   - Reference them: `![Alt text](/assets/images/your-image.jpg)`

6. **Push to GitHub** - your post will appear automatically!

### Example Blog Post

```markdown
---
layout: post
title: "My Journey with BIM"
date: 2024-12-05
---

## Introduction

This is my first blog post about BIM and construction automation.

### Why BIM Matters

BIM has revolutionized the way we approach construction...

![BIM Workflow](/assets/images/bim-workflow.png)

## Conclusion

These are my key takeaways from working with BIM.
```

## Customization

### Update Your Information

1. **_config.yml**: Site title, email, description
2. **cv.md**: Your CV/resume content
3. **index.html**: Homepage hero text
4. **_includes/footer.html**: Social media links

### Change Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --bg-primary: #F2EFE9;
  --text-primary: #262626;
  /* etc. */
}
```

### Modify Layout

- **_layouts/**: HTML templates for different page types
- **_includes/**: Reusable components (header, footer)
- **assets/css/style.css**: All styling

## Project Structure

```
rishi-portfolio/
├── _config.yml           # Site configuration
├── _layouts/             # HTML templates
│   ├── default.html      # Base layout
│   ├── home.html         # Homepage
│   ├── page.html         # Static pages
│   └── post.html         # Blog posts
├── _includes/            # Reusable components
│   ├── header.html
│   └── footer.html
├── _posts/               # Blog posts (add .md files here!)
│   └── 2024-12-01-getting-started.md
├── assets/
│   ├── css/
│   │   └── style.css     # All styles
│   └── images/           # Blog images
├── index.html            # Homepage
├── cv.md                 # CV page
├── blog.html             # Blog listing
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

## Troubleshooting

### Site not updating after push
- Check the "Actions" tab in your GitHub repository
- Look for build errors in the workflow logs
- GitHub Pages can take 1-2 minutes to update

### CSS/styling not loading
- Check your `baseurl` in `_config.yml`
- For project sites, it should be `/your-repo-name`
- For user sites (`username.github.io`), it should be empty: `""`

### Images not showing
- Make sure images are in `assets/images/`
- Use absolute paths: `/assets/images/image.jpg`
- Or relative to baseurl: `{{ '/assets/images/image.jpg' | relative_url }}`

### Local build errors
- Run `bundle update` to update dependencies
- Check Ruby version (requires 2.5.0 or higher)

## Adding Your PDF Resume

1. Copy your PDF resume to `assets/` folder
2. The CV page already links to it: `/assets/RishiCV_.pdf`
3. Rename your PDF to match or update the link in `cv.md`

## Custom Domain (Optional)

To use your own domain (e.g., `rishigupta.com`):

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. Create a file named `CNAME` in your repository root
3. Add your domain to the file: `rishigupta.com`
4. Configure DNS settings at your registrar:
   - Add an A record pointing to GitHub's IPs
   - Or add a CNAME record pointing to `your-username.github.io`
5. See GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Support

- Jekyll Documentation: https://jekyllrb.com/docs/
- GitHub Pages: https://docs.github.com/en/pages
- Markdown Guide: https://www.markdownguide.org/

## License

Free to use and modify for your personal website.

---

Built with ❤️ using Jekyll and GitHub Pages
