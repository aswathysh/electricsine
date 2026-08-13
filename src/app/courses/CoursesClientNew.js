"use client";

import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Skeleton, Alert, Snackbar } from "@mui/material";
import { Header } from "@/components/sharables/Header";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "22px", height: "22px" }}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "22px", height: "22px" }}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px", opacity: 0.6 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "18px", height: "18px", opacity: 0.6 }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function CourseCard({ course, handleCartItem }) {  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleView = (item) => {
    router.push(`/course_view/${item.id}`);
  };

  const handleTryItOut = (item) => {
    router.push(`/sample_questions/${item.id}`);
  };

  const validityLabel =
    Number(course?.validity) % 365 === 0
      ? `${Number(course?.validity) / 365} Year`
      : `${course?.validity} Days`;

  return (
    <div className="course-card">
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        {isLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
          />
        )}

        <Image
          src={
            course?.image
              ? `https://rubiksoftwares.com/electricsine-api/public/public${course.image}`
              : "/assets/images/logincoverpic.jpg"
          }
          alt={course?.title || "Course Image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
          style={{ 
            objectFit: "cover",
            opacity: isLoading ? 0 : 1, 
            transition: "opacity 0.3s ease-in-out"
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="course-body">
        <h3>{course.title}</h3>
        <p>{course.short || "Explore the fundamental concepts and industry relevance."}</p>

        <div className="course-meta-timeline">
          <div className="meta-item-duration">
            <IconClock />
            <span>{validityLabel}</span>
          </div>

          <div className="topic-tags-container">
            <span className="topic-tag">
              {'Competitive exam'}
            </span>
          </div>
          <div className="meta-item-duration">
            <IconBook />
            <span>₹ {Number(course.price).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      <div className="card-actions-wrapper">
        <div className="secondary-actions-row">
          <button onClick={() => handleView(course)} type="button" className="action-btn-split">
            <IconEye />
            <span>View</span>
          </button>
          <button onClick={() => handleTryItOut(course)} type="button" className="action-btn-split">
            <IconPlay />
            <span>Try it</span>
          </button>
        </div>
        <button 
          type="button" 
          className="primary-enrol-btn"
          onClick={() => handleCartItem(course)}
        >
          <IconCart />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default function CoursesPage({ subjects = [] }) {
  const { setCart } = useCart();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showUserAlert = (message, success = true) => {
    setIsSuccess(success);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsSuccess(false);
    }, 6000);
  };
 
  const updateCartStorage = (updatedCart) => {
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart([...updatedCart]);
  };

  const handleCartItem = (item) => {
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const isItemInCart = existingCart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      const newCart = [...existingCart, item];
      updateCartStorage(newCart);
      showUserAlert(`Added ${item.title} to cart`, true);
    } else {
      showUserAlert(`${item.title} is already in the cart`, false);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <main>
      <Header />

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={isSuccess ? 'success' : 'warning'}
          variant="outlined"
          sx={{ width: 'auto', backgroundColor: isSuccess ? '#E2FDCB' : '#FCDFDF' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>

      <div className="hero">
        <div className="eyebrow">
          Department of Electrical &amp; Electronics
        </div>
        <h1>Our Courses</h1>
        <p>
          Four tracks from first-principles circuits to industrial-scale power
          systems — pick a path, try a sample lesson, or enrol straight away.
        </p>
      </div>

      <div className="cardMain">
        {subjects.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            handleCartItem={handleCartItem} 
          />
        ))}
      </div>

      <div className="statsContainer">
        <div className="statItem">
          <div className="statNum courses-statNumBlue">
            10<span className="course-statSuffix">K+</span>
          </div>
          <div className="courses-statLabel">Questions &amp; Solutions</div>
        </div>

        <div className="statItem">
          <div className="statNum courses-statNumAmber">
            99<span className="courses-statNumBlue">%</span>
          </div>
          <div className="courses-statLabel">Pass Rate</div>
        </div>
      </div>
    </main>
  );
}