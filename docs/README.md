# VerdiBot Documentation Website

This directory contains the VitePress-based documentation website for the VerdiBot project.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
docs/
├── .vitepress/
│   └── config.ts          # VitePress configuration
├── zh/                    # Chinese documentation
│   ├── index.md          # Chinese home page
│   ├── guide/            # Getting started guide
│   ├── hardware/         # Hardware manufacturing
│   ├── assembly/         # Robot assembly
│   ├── software/         # Software usage
│   └── appendix/         # FAQ, resources, community
├── en/                    # English documentation  
│   ├── index.md          # English home page
│   └── ...               # Similar structure to Chinese
├── public/               # Static assets
└── package.json          # Node.js dependencies
```

## Features

- 📱 **Responsive Design**: Works on desktop and mobile
- 🌐 **Multi-language**: Chinese and English support
- 🔍 **Search**: Built-in search functionality
- 🎨 **Modern UI**: Clean and professional appearance
- ⚡ **Fast**: Static site generation with VitePress
- 📝 **Easy Editing**: Markdown-based content

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

**Live Site**: [http://verdibot.verdure-hiro.cn/](http://verdibot.verdure-hiro.cn/)

## Contributing

To contribute to the documentation:

1. Fork the repository
2. Create your changes in the appropriate language directory
3. Test locally with `npm run dev`
4. Submit a Pull Request

## License

This documentation is licensed under [MIT License](../LICENSE).