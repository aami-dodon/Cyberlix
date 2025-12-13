# Cynalitx User Guide

This guide explains how to manage the content, leadership team, and insights (blog posts) of the Cynalitx website.

## Getting Started

To run the application locally:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) (or the port specified in your `.env`).

---

## 1. Modifying Website Texts

The textual content of the website is managed through JSON files located in `src/content/`. This allows you to update text without touching the code.

### General Content
*   **Location**: `src/content/*.json`
*   **Files**:
    *   `home.json`: Homepage content.
    *   `services.json`: Services page descriptions.
    *   `about.json`: About page content.
    *   `footer.json` / `socials.json`: Footer links and social media URLs.

### Updating Social Links
To update the main social media links (e.g., in the footer):
1.  Open `src/content/socials.json`.
2.  Update the values for `linkedIn`, `twitter`, `facebook`, etc.
    ```json
    {
      "linkedIn": "https://linkedin.com/company/cynalitx",
      "twitter": "https://twitter.com/cynalitx"
    }
    ```

---

## 2. Managing Leaders Data

The leadership team section is powered by a dedicated data file.

*   **File**: `src/content/leadership.json`

### Adding or Editing a Leader
The `leaders` array contains objects representing each team member.

```json
{
  "name": "Raamesh Kotian",
  "title": "Co-Founder",
  "image": "/images/team/ramesh.jpeg",
  "shortBio": "...",
  "socials": {
    "linkedin": "...",
    "email": "mailto:..."
  }
}
```

*   **Image**: Place new images in `public/images/team/` and reference them by path (e.g., `/images/team/photo.jpg`).
*   **Socials**: Update the `linkedin` or `email` fields within the `socials` object for that specific leader.

---

## 3. Managing Insights (Admin Panel)

Cynalitx features a built-in content management system (CMS) for "Insights" (Blog Posts).

### Accessing the Admin Panel
1.  Navigate to `/admin` (e.g., `http://localhost:3000/admin`).
2.  Login with your administrator credentials.

![Admin Login](public/docs/admin-login.png)

### Admin Dashboard
Once logged in, you will see the Dashboard, which lists all existing posts.

![Admin Dashboard](public/docs/admin-dashboard.png)

### Creating a New Insight
1.  Click the **"Create Post"** button on the top right of the Dashboard.
2.  Fill in the form:
    *   **Title**: The headline of the article.
    *   **Slug**: URL-friendly version of the title (auto-generated usually, or manual).
    *   **Author**: Select the author.
    *   **Category**: Choose a category (e.g., Industry Trends).
    *   **Content**: Write your post using the Markdown editor.
    *   **Cover Image**: Upload or provide a URL for the post header image.
3.  Click **"Publish"** to make it live immediately, or **"Save Draft"**.

### Editing an Insight
1.  On the Dashboard, locate the post you wish to modify.
2.  Click the **Pencil Icon** (Edit) next to the post.
3.  Update the content and click **"Save Changes"**.

### Deleting an Insight
1.  On the Dashboard, locate the post to remove.
2.  Click the **Trash Icon** (Delete).
3.  Confirm the deletion when prompted. **This action cannot be undone.**
