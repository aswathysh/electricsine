"use client";
import {
  usePurchasedSubjects,
  useSampleQuestionSections,
  useSubjects,
} from "@/services/PracticeQueris";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../sharables/sharables.css";
import { CourseViewModal } from "@/components/sharables/CourseViewModal";
import { useCart } from "@/context/CartContext";
import { Alert, Snackbar } from "@mui/material";

function IconEye() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: "20px", height: "20px" }}
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: "20px", height: "20px" }}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: "20px", height: "20px" }}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconPractice() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: "20px", height: "20px" }}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

function IconExam() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: "20px", height: "20px" }}
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function SubjectCard({
  item,
  handleCartItem,
  handleView,
  handleTryItOut,
  handlePracticeMode,
  handleExamMode,
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="course-card">
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        {isLoading && <div className="subject-image-skeleton" />}
        <Image
          className="responsive-image"
          layout="fill"
          objectFit="cover"
          src={
            item.image
              ? `https://rubiksoftwares.com/demoelectric/public${item?.image}`
              : "/assets/images/logincoverpic.jpg"
          }
          alt="courseimg"
          onLoad={() => setIsLoading(false)}
          style={{
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        />
      </div>

      <div className="course-body">
        <h3>{item.title}</h3>
        <div
          className="subject_card_subtitle sub-font"
          dangerouslySetInnerHTML={{ __html: item?.description || "" }}
        />
      </div>

      <div className="card-actions-wrapper">
        {item.has_access == 0 ? (
          <>
            <div className="secondary-actions-row">
              <button
                onClick={() => handleView(item)}
                type="button"
                className="action-btn-split"
              >
                <IconEye />
                <span>View</span>
              </button>
              <button
                onClick={() => handleTryItOut(item)}
                type="button"
                className="action-btn-split"
              >
                <IconPlay />
                <span>Try it out</span>
              </button>
            </div>
            <button
              type="button"
              className="primary-enrol-btn"
              onClick={() => handleCartItem(item)}
            >
              <IconCart />
              <span>Purchase</span>
            </button>
          </>
        ) : (
          <div className="dual-primary-actions-row">
            <button
              type="button"
              className="primary-enrol-btn"
              onClick={() => handlePracticeMode(item.id)}
            >
              <IconPractice />
              <span>Practice Mode</span>
            </button>
            <button
              type="button"
              className="primary-enrol-btn"
              onClick={() => handleExamMode(item.id)}
            >
              <IconExam />
              <span>Exam Mode</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export const UserHome = () => {
  const router = useRouter();
  const { cart, setCart } = useCart();
  const [courseListItems, setCourseListtems] = useState([]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewItem, setViewItem] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { data: subjectListDatas, isLoading, error } = usePurchasedSubjects(); // Call the custom hook
  console.log("subjectListItems", subjectListDatas);

  useEffect(() => {
    // Only run the effect if data is available and not in a loading state
    if (isLoading) {
      console.log("Loading...");
      return; // Early return to avoid further logic while loading
    }

    if (error) {
      console.log("Error:", error);
      return; // Early return to avoid further logic if error
    }

    // Ensure that subjectListDatas is not undefined
    if (subjectListDatas && subjectListDatas.data) {
      console.log("subjectListItems", subjectListDatas);
      setCourseListtems(subjectListDatas.data); // Set course list items when data is available
    }
  }, [subjectListDatas, isLoading, error]);

  const handleCartItem = (item) => {
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const isItemInCart = existingCart.some(
      (cartItem) => cartItem.id === item.id,
    );

    if (!isItemInCart) {
      existingCart.push(item);
      sessionStorage.setItem("cart", JSON.stringify(existingCart));
      const updatedCart = [...existingCart];
      setCart(updatedCart);
      let msg = `Added ${item.title} to cart`;
      setIsSuccess(true);
      setAlertMessage(msg);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        setIsSuccess(false);
      }, 20000);
    } else {
      let msg = `${item.title} is already in the cart`;
      setIsSuccess(false);
      setAlertMessage(msg);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 20000);
      //alert(`${item.title} is already in the cart`);
    }

    console.log(existingCart);
  };
  const handlePracticeMode = (id) => {
    // alert("comming soon")
    router.push(`practice/${id}`);
  };
  const handleExamMode = (id) => {
    // alert("comming soon")

    router.push(`exam/${id}`);
  };
  const handleView = (item) => {
    router.push(`/course_view/${item.id}`);

    // setViewItem(item);
    // setShowViewModal(true);
  };
  const handleTryItOut = (item) => {
    // setViewItem(item);
    // setShowViewModal(true);
    router.push(`sample_questions/${item.id}`);
  };
  const closeView = () => {
    setShowViewModal(!showViewModal);
  };
  const handlealertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="subjects-page-wrap">
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handlealertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handlealertClose}
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

      <div className="cardMain">
        {courseListItems?.map((item) => (
          <SubjectCard
            key={item.id}
            item={item}
            handleCartItem={handleCartItem}
            handleView={handleView}
            handleTryItOut={handleTryItOut}
            handlePracticeMode={handlePracticeMode}
            handleExamMode={handleExamMode}
          />
        ))}
      </div>

      <CourseViewModal
        showViewModal={showViewModal}
        closeView={closeView}
        item={viewItem}
      />
    </div>
  );
};
