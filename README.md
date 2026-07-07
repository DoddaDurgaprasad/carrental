# Car Rental Platform

A full-stack **Car Rental Platform** built using the **MERN Stack** with secure **Razorpay** payment integration, **Redis + BullMQ** powered background job processing, automated **email notifications**, **ImageKit** image management, and **Docker** support.

The platform enables users to browse available cars, make bookings, complete secure online payments, and manage reservations. Car owners can list vehicles, manage bookings, monitor earnings through a dedicated dashboard, and receive booking notification emails.

---

## Live Demo

**Frontend:** https://carrental-rlmwvb4el-durgaprasad2.vercel.app

**Backend API:** https://carrental-gtu0.onrender.com

---

## Features

### User Features

- User Registration and Login
- Secure JWT Authentication
- Browse Available Cars
- View Car Details
- Select Pickup and Return Dates
- Real-Time Availability Checking
- Online Payments using Razorpay
- Booking History
- Profile Management
- Booking Confirmation Email

### Owner Features

- Become a Car Owner
- Add New Cars
- Upload Car Images using ImageKit
- Manage Listed Cars
- Toggle Car Availability
- View Bookings
- Dashboard Analytics
- Track Total Revenue
- Track Owner Earnings
- Receive Booking Notification Emails

### Payment Features

- Razorpay Order Creation
- Secure Payment Verification
- HMAC Signature Validation
- Automatic Booking Creation after Successful Payment
- Payment Status Tracking

### Background Processing

- Redis Queue
- BullMQ Job Processing
- Asynchronous Email Notifications
- Reliable Booking Confirmation Delivery

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Redis
- BullMQ
- Nodemailer
- JWT Authentication
- bcrypt

### Third-Party Services

- Razorpay
- ImageKit
- MongoDB Atlas
- Upstash Redis

### Deployment

- Vercel
- Render

### DevOps

- Docker
- Docker Compose

---

## Project Structure

```text
carrental/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── workers/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── server.js
│   └── package.json
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## Database Models

### User

```js
{
  name,
  email,
  password,
  role,
  image,
  earnings
}
```

### Car

```js
{
  brand,
  model,
  pricePerDay,
  image,
  owner,
  isAvailable
}
```

### Booking

```js
{
  car,
  user,
  owner,
  pickupDate,
  returnDate,
  price,
  status,
  paymentStatus,
  paymentId,
  orderId
}
```

---

## Booking Flow

```text
User Selects Dates
        │
        ▼
Check Availability
        │
        ▼
Create Razorpay Order
        │
        ▼
Open Razorpay Checkout
        │
        ▼
User Completes Payment
        │
        ▼
Verify Razorpay Signature
        │
        ▼
Create Booking
        │
        ▼
Update Owner Earnings
        │
        ▼
Push Email Job to Redis
        │
        ▼
BullMQ Worker Processes Job
        │
        ▼
Send Emails
        │
        ▼
Booking Confirmed
```

---

## System Architecture

```text
                    React + Vite
                          │
                          ▼
                Express REST API
                          │
      ┌───────────┬────────────┬───────────┐
      ▼           ▼            ▼           ▼
 MongoDB      Razorpay     ImageKit     Redis
   Atlas                                   │
                                           ▼
                                       BullMQ
                                           │
                                           ▼
                                   Email Worker
                                           │
                                           ▼
                                      Nodemailer
```

---

## Dashboard Metrics

- Total Cars
- Total Bookings
- Pending Payments
- Confirmed Bookings
- Total Revenue
- Owner Earnings
- Recent Bookings

---

## Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Ownership Validation
- Razorpay Signature Verification
- Booking Availability Validation
- Secure Environment Variables
- Server-side Payment Verification

---

## Environment Variables

### Server (.env)

```env
PORT=3000

MONGODB_URI=

JWT_SECRET=

REDIS_URL=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

EMAIL_FROM=

CLIENT_URL=
```

### Client (.env)

```env
VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
VITE_RAZORPAY_KEY_ID=
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/DoddaDurgaprasad/carrental.git
cd carrental
```

---

### Backend Setup

```bash
cd server

npm install

npm start
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Docker Setup

### Build Images

```bash
docker compose build
```

### Start Containers

```bash
docker compose up
```

### Stop Containers

```bash
docker compose down
```

---

## Email Notifications

### User Receives

- Booking Confirmation
- Booking Details
- Payment Confirmation

### Owner Receives

- New Booking Notification
- Customer Details
- Booking Information

---

## Deployment

### Frontend

- Hosted on **Vercel**

### Backend

- Hosted on **Render**

### Database

- **MongoDB Atlas**

### Redis

- **Upstash Redis**

### Image Storage

- **ImageKit**

---

## Future Enhancements

- Admin Dashboard
- Booking Cancellation
- Refund Management
- SMS Notifications
- Reviews and Ratings
- Advanced Search Filters
- Coupon System
- Wishlist
- Real-time Booking Updates

---



## Author

**Durga Prasad Dodda**

Built as a full-stack MERN application demonstrating secure authentication, Razorpay payment integration, Redis-powered background job processing with BullMQ, Dockerized development, automated email notifications, cloud deployment, and scalable REST API architecture.