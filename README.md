# Car Rental Platform

A full-stack Car Rental Platform built using the MERN Stack with secure Razorpay payment integration. Users can browse available cars, make bookings, complete online payments, and manage reservations. Car owners can list vehicles, monitor bookings, and track earnings through an owner dashboard.

---

## Features

### User Features

* User Registration and Login
* Secure Authentication
* Browse Available Cars
* View Car Details
* Select Pickup and Return Dates
* Real-Time Availability Checking
* Online Payments using Razorpay
* Booking History
* Profile Management

### Owner Features

* Become a Car Owner
* Add New Cars
* Upload Car Images using ImageKit
* Manage Listed Cars
* Toggle Car Availability
* View Bookings
* Dashboard Analytics
* Track Total Revenue
* Track Owner Earnings

### Payment Features

* Razorpay Order Creation
* Secure Payment Verification
* HMAC Signature Validation
* Automatic Booking Creation after Successful Payment
* Payment Status Tracking

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Third-Party Services

* Razorpay
* ImageKit

---

## Project Structure

```text
client/
├── src/
├── public/
└── package.json

server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── configs/
├── utils/
└── package.json
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

## Environment Variables

### Server (.env)

```env
PORT=8000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Client (.env)

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_BASE_URL=http://localhost:8000
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd carrental
```

### Backend Setup

```bash
cd server
npm install
npm run server
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## Payment Flow

```text
User Selects Dates
        ↓
Check Availability
        ↓
Create Razorpay Order
        ↓
Open Razorpay Checkout
        ↓
User Completes Payment
        ↓
Verify Signature
        ↓
Create Booking
        ↓
Update Owner Earnings
        ↓
Booking Confirmed
```

---

## Dashboard Metrics

* Total Cars
* Total Bookings
* Pending Payments
* Confirmed Bookings
* Total Revenue
* Owner Earnings
* Recent Bookings

---

## Security Features

* JWT Authentication
* Password Hashing
* Razorpay Signature Verification
* Protected Routes
* Ownership Validation
* Booking Availability Checks

---

## Future Enhancements

* Owner Withdrawal Requests
* Admin Dashboard
* Booking Cancellation
* Refund Management
* Email Notifications
* SMS Notifications
* Reviews and Ratings
* Advanced Search Filters
* Production Deployment

---

## Author

**Nani Dodda**

Built as a full-stack MERN project with Razorpay payment integration and owner earnings management.
