# QUICK START GUIDE

## 🚀 Getting Your Site Live in 5 Minutes

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `your-username.github.io` (use your actual GitHub username)
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Files

**Option A - Using GitHub Web Interface (Easiest):**
1. Download all files from this folder
2. On your new repository page, click "uploading an existing file"
3. Drag and drop ALL files and folders
4. Scroll down and click "Commit changes"

**Option B - Using Command Line:**
```bash
cd rishi-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository "Settings"
2. Click "Pages" in left sidebar
3. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
4. Click "Save"

### Step 4: Wait & Visit

- Wait 2-3 minutes for GitHub to build your site
- Your site will be live at: `https://your-username.github.io`

---

## ✍️ How to Add a Blog Post

1. In your repository, go to the `_posts` folder
2. Click "Add file" → "Create new file"
3. Name it: `2024-12-05-my-post-title.md` (use today's date)
4. Paste this template:

```markdown
---
layout: post
title: "My First Blog Post"
date: 2024-12-05
---

Write your content here using Markdown.

## Subheading

Your text goes here.
```

5. Click "Commit changes"
6. Wait 1-2 minutes - your post will appear automatically!

---

## 🎨 Customize Your Site

### Update Your Information

1. **_config.yml** - Change title, email, description
2. **index.html** - Update hero text on homepage
3. **cv.md** - Already filled with your information
4. **_includes/footer.html** - Add your GitHub/LinkedIn links

### Add Images to Blog Posts

1. Upload images to `assets/images/` folder
2. In your post, use: `![Description](/assets/images/your-image.jpg)`

---

## 📋 Blog Post Markdown Examples

### Headers
```markdown
## Main Section
### Subsection
```

### Lists
```markdown
- Item one
- Item two
- Item three
```

### Links
```markdown
[Link text](https://example.com)
```

### Code
```markdown
Inline `code` looks like this.

```python
# Code block
def hello():
    print("Hello!")
```
```

### Images
```markdown
![Alt text](/assets/images/photo.jpg)
```

---

## 🆘 Common Issues

**Site not showing?**
- Check repository settings → Pages
- Make sure repository is Public
- Wait 2-3 minutes after pushing changes

**Styling looks broken?**
- Check `_config.yml` baseurl setting
- For username.github.io, it should be empty: `baseurl: ""`

**Post not appearing?**
- Make sure filename starts with date: `YYYY-MM-DD-title.md`
- Check frontmatter has correct layout: `layout: post`
- File must be in `_posts/` folder

---

## 🔗 Important Links

- Your Repository: `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`
- Your Live Site: `https://YOUR-USERNAME.github.io`
- Check Build Status: Repository → Actions tab

---

## 📝 Next Steps

1. ✅ Upload files to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Update your information in _config.yml
4. ✅ Add your social media links in footer
5. ✅ Write your first blog post
6. ✅ Share your site!

**Questions?** Read the full README.md for detailed documentation.
