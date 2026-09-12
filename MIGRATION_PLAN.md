# Portfolio React Migration Plan

## Current inventory

- Static entrypoint: `index.html`
- Styling and interaction: `styles.css` and `script.js`
- Existing asset: `profile-img.jpg`
- Existing useful content: Sabbir Ahmed's Python/Django/ML profile, thesis, five project descriptions, education history, skills, email, and phone number
- Existing behavior: responsive navigation, smooth scrolling, scroll reveals, contact-form demo alert, and a rule-based portfolio chatbot
- Referenced but unavailable assets: `sa1.jpg` through `sa5.jpg`; the new UI will use a graceful project visual fallback instead of broken images
- Social URLs in the old page are placeholders (`#`), so no social destination will be fabricated

## Migration approach

1. Preserve the existing static files and `profile-img.jpg`; use the root `index.html` as the new Vite entrypoint rather than deleting the old work.
2. Create a Vite React application with reusable section components and data modules for projects, skills, and education.
3. Preserve factual content exactly where it exists, while improving hierarchy, accessibility, responsive behavior, and visual polish.
4. Carry forward the chatbot as a small client-side assistant, with safe text rendering and the existing factual answers.
5. Add theme persistence, active-section navigation, project filtering, validated contact form feedback, and reduced-motion support.
6. Add SEO metadata, favicon support using the existing profile asset, and a `robots.txt` file.
7. Validate with `npm run build`, then run the dev server and check navigation, filtering, theme switching, form validation, images, responsive layouts, and browser console output.

## Known manual configuration

- Add real GitHub and LinkedIn URLs when available; the source site only contains placeholder links.
- Connect the contact form to a real backend or form provider before treating it as a message delivery workflow. The UI will clearly report that it is currently a local demo.
- Restore the original project screenshots if they become available by placing them in `public/project-images/` and updating the project data entries.
