# 🎄 Christmas Viral Card App

A beautiful, interactive, and viral web application to create and share magical Christmas greeting cards. Send a unique holiday wish to your loved ones with animated gifts, festive music, and custom themes!

---

## 📖 User Guide

Sending a holiday wish is easy! Just follow these simple steps:

1.  **Open the Application**: Navigate to the home page.
2.  **Fill in the Details**:
    *   **Friend's Name**: Who is the card for?
    *   **Your Name**: Let them know who sent the magic!
    *   **Your Message**: Type a heartfelt holiday wish (up to 280 characters).
3.  **Pick a Festive Theme**: Choose from our curated themes:
    *   **Classic**: Traditional red and white.
    *   **Snowy Night**: Dark, elegant blue with moonlight.
    *   **Golden**: Premium cream and gold aesthetics.
    *   **Modern**: Sleek green and minimal design.
4.  **Generate Magic Link**: Click the "Generate Magic Link" button.
5.  **Share the Joy**:
    *   **Copy Link**: Click to copy the unique URL.
    *   **WhatsApp**: Instantly share the card on WhatsApp.
    *   **Social Preview**: Your link will feature a beautiful Santa preview image and personal message when shared!

---

## ✨ Features

*   **Premium Interactive Experience**: Receivers get to "open" a 3D animated gift box.
*   **Festive Ambiance**:
    *   Animated snowfall and drifting clouds.
    *   Twinkling Christmas lights and decorated trees.
    *   Auto-playing Jingle Bells background music.
*   **Viral Sharing**: Custom OpenGraph (OG) images featuring a 3D Santa Claus.
*   **Fully Responsive**: Looks stunning on Desktop, Tablet, and Mobile.
*   **Fast & Secure**: Powered by Next.js 15, Bun, and Supabase.

---

## 🛠️ Technical Setup

### Prerequisites
*   [Bun](https://bun.sh) (Recommended) or Node.js
*   Supabase Account

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd Chritmas-App
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Database Setup**:
    Run the SQL found in `supabase/schema.sql` in your Supabase SQL Editor to create the `cards` table.

5.  **Music Setup**:
    Place an MP3 file named `jingle-bells.mp3` in the `/public` folder.

### Running the App

```bash
bun dev
```
Open [http://localhost:3000](http://localhost:3000) to start spreading the holiday cheer!

---

## 👨‍💻 Developed By

Made with ❤️ by **[Rohan Balami](https://github.com/Mr-XX23)**.

*Special thanks to the Antigravity AI team for development assistance.*
