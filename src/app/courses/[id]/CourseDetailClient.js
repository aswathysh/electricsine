"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import { Header } from "@/components/sharables/Header";
import { useCart } from "@/context/CartContext";

import "./page.css";

export default function CourseDetailClient({ course }) {
  const router = useRouter();
  const { setCart } = useCart();
  const [imageLoading, setImageLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    setShowLogin(!sessionStorage.getItem("token"));
  }, []);

  const showUserAlert = (message, success = true) => {
    setIsSuccess(success);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsSuccess(false);
    }, 4000);
  };

  const updateCartStorage = (updatedCart) => {
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart([...updatedCart]);
  };

  const handleCartItem = (item) => {
    if (!item) return;
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const isItemInCart = existingCart.some(
      (cartItem) => cartItem.id === item.id,
    );

    if (!isItemInCart) {
      updateCartStorage([...existingCart, item]);
      showUserAlert(`Added ${item.title} to cart`, true);
      handleBack();
    } else {
      showUserAlert(`${item.title} is already in the cart`, false);
    }
  };

  const handleBack = () => {
    router.push(showLogin ? "/courses" : "/user/home");
  };

  const validityLabel =
    course?.validity && Number(course.validity) % 365 === 0
      ? `${Number(course.validity) / 365} Year${Number(course.validity) > 365 ? "s" : ""}`
      : `${course?.validity || 0} Days`;

  const priceNumber = Number(course?.price);
  const priceDisplay = Number.isFinite(priceNumber)
    ? priceNumber.toLocaleString("en-IN", { minimumFractionDigits: 0 })
    : course?.price;

  const formattedDate = course?.updated_at
    ? new Date(course.updated_at.replace(" ", "T")).toLocaleDateString(
        "en-IN",
        { day: "numeric", month: "short", year: "numeric" },
      )
    : "Recently";

  const handleAlertClose = () => setShowAlert(false);

  return (
    <>
      <Header />

      <Snackbar
        open={showAlert}
        autoHideDuration={4000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={isSuccess ? "success" : "warning"}
          variant="outlined"
          sx={{
            width: "auto",
            backgroundColor: isSuccess ? "#E2FDCB" : "#FCDFDF",
          }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>

      <div className="cm-minimal-container">
        <div className="cm-glow-blob cm-blob-1"></div>
        <div className="cm-glow-blob cm-blob-2"></div>

        <header className="cm-minimal-nav"></header>

        <main className="cm-main-grid">
          <section className="cm-content-panel">
            <div className="cm-meta-badge">
              <span className="cm-dot"></span> Core Program
            </div>

            <h1 className="cm-main-title">{course.title}</h1>

            <div className="cm-horizontal-status-bar">
              <div className="cm-status-item">
                <span className="cm-status-lbl">Duration</span>
                <span className="cm-status-val">{validityLabel}</span>
              </div>
              <div className="cm-status-item">
                <span className="cm-status-lbl">Updated</span>
                <span className="cm-status-val">{formattedDate}</span>
              </div>
            </div>

            <article
              className="cm-article-body"
              dangerouslySetInnerHTML={{ __html: course.description || "" }}
            />
          </section>

          <aside className="cm-action-panel">
            <div className="cm-floating-sticky-card">
              <div className={["cm-image-frame", "ims-src-app-courses-id-CourseDetailClient-js-0001"].filter(Boolean).join(" ")} >
                {(imageLoading || !course.image) && (
                  <Skeleton className="ims-src-app-courses-id-CourseDetailClient-js-0002"
                    variant="rounded"
                    width="100%"
                    height="100%"
                    animation="wave"
                    
                  />
                )}
                {course.image ? (
                  <Image
                    src={course.image}
                    alt={course.image_alt || course.title || "Course"}
                    fill
                    priority
                    className="object-contain"
                    onLoad={() => setImageLoading(false)}
                  />
                ) : (
                  <div className="cm-frame-fallback">⚡</div>
                )}
              </div>
              <div className="cm-pricing-row">
                <div className="cm-price-tag">
                  <span className="cm-currency-sign">₹</span>
                  <span className="cm-amount">{priceDisplay}</span>
                </div>
                <p className="cm-guarantee-text">🔒 Secure One-Time Checkout</p>
                <span className="cm-term-label">Full Access</span>
              </div>
              <div className="course-btn-ali">
                <button
                  type="button"
                  className="cm-btn-checkout"
                  onClick={() => handleCartItem(course)}
                >
                  <span>Add to cart</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="12 5 19 12 12 19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="cm-nav-back-trigger"
                  onClick={handleBack}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line
                      x1="19"
                      y1="12"
                      x2="5"
                      y2="12"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="12 19 5 12 12 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Back to course</span>
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
