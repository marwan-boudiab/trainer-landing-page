# Blaze 🔥

A fully responsive landing page for a Calisthenics Trainer, featuring a comprehensive admin panel for managing all website content dynamically with a live preview pane for immediate feedback on changes.

<div align="center">
  <a href="https://www.marwan-boudiab.com/projects/blaze-calisthenics#demo">
    <img src="https://crrwymojtb.ufs.sh/f/0ge4q9E4PJeZIsDvv0OZ8Xl0zfouBViqs5UPYatnhkv74p2j" alt="Blaze Calisthenics Demo" width="600" style="border-radius: 12px;">
    <br>
    <p><strong>▶️ Click to watch project demo</strong></p>
  </a>
</div>

## 🚀 Features

### User-Facing Experience
- **Interactive Single Page Design**: Smooth scrolling navigation between sections
- **Responsive Layout**: Adapts seamlessly to all device sizes (desktop, tablet, mobile)
- **Engaging Hero Section**: Dynamic introduction with customizable title, subtitle, description, and background image
- **About Section**: Highlights key selling points with customizable feature cards
- **Gallery Showcase**: Visual display of calisthenics training images
- **Membership Plans**: Clearly presented pricing options with features and benefits
- **Testimonials Carousel**: Interactive slider showcasing client feedback
- **Contact Integration**: User-friendly form with validation and email delivery

### Admin Content Management
- **Secure Authentication**: Protected admin access with username and password
- **Live Preview System**: Instant visual feedback for all content changes
- **Complete CRUD Operations**:
  - Hero section management
  - Feature cards creation and editing
  - Gallery items management
  - Pricing plans configuration
  - Testimonials administration
  - Social/contact links customization
  - Global branding elements
- **Image Management**: Cloudinary integration for easy media uploads and storage

### Technical Capabilities
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Interactive Components**: Carousels, forms, and responsive elements
- **Email Integration**: Contact form connected to Resend email service
- **Data Validation**: Secure input handling with Zod schema validation
- **Global State Management**: Efficient state handling with Zustand
- **Responsive Logic**: Adaptive design implementation with React Responsive

## 🛠️ Technology Stack

- **Frontend**:
  - Next.js 14+
  - React 18+
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Swiper
  - React Scroll
  - Lucide React icons

- **Backend**:
  - Next.js API Routes
  - MongoDB with Mongoose
  - bcryptjs for authentication
  - Zod for validation

- **Integrations**:
  - Cloudinary for image management
  - Resend for email delivery
  - Zustand for state management

## 📦 Getting Started

### Prerequisites
- Node.js (v18.17 or later)
- npm or yarn
- MongoDB instance
- Cloudinary account
- Resend account

### Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd trainer-landing-page
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Database Connection
   MONGO_URI=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>

   # Cloudinary Credentials
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   NEXT_PUBLIC_CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   # Resend Email
   RESEND_API_KEY=

   # Base URL
   URL=
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at http://localhost:3000
   Access the admin panel at http://localhost:3000/admin

## 🔧 Development Workflow

### Production Build
```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm run start
# or
yarn start
```

### Code Quality
```bash
# Run linting
npm run lint
# or
yarn lint
```

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

This project uses various open-source libraries and tools:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper](https://swiperjs.com/)
- [Cloudinary](https://cloudinary.com/)
- [Resend](https://resend.com/)
- [And many more...](#)