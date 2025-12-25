# Loopin Dashboard

A modern SaaS dashboard for managing feedback widgets. Loopin allows users to create projects, generate embeddable feedback widgets, and view user feedback in real-time.

🔗 **Live Demo:** [https://loopin-dasahboard.vercel.app/](https://loopin-dasahboard.vercel.app/)

## 🚀 Features

- **Secure Authentication:** User login and management via **Clerk**.
- **Project Management:** Create and manage multiple projects (websites).
- **Script Generation:** Automatically generates a unique `<script>` tag for each project to embed the feedback widget.
- **Data Visualization:** View and filter feedback using **TanStack Tables**.
- **Responsive Design:** Built with **Tailwind CSS** and **Shadcn UI**.
- **Type-Safe Database:** Database interactions handled via **Drizzle ORM**.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Authentication:** Clerk
- **Database ORM:** Drizzle ORM
- **Tables/Data:** TanStack Table
- **Server Actions:** For backend logic and database mutations

### 1. Clone the Repository
```bash
git clone https://github.com/yogi03/saas-dasahboard.git
cd saas-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your clerk publishable key"
CLERK_SECRET_KEY="your clerk secret key"
DATABASE_URL="your database url"
WIDGET_URL="your widget url"
```

### 4. Database Setup
```bash
npx drizzle-kit push
```

### 5. Run Deployment Server
```bash
npm run dev
```

Open http://localhost:3000 to view the dashboard locally.