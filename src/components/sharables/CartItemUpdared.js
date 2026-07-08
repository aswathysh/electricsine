"use client";

import Image from "next/image";
import "@/app/cart/cart.css";
import { useRouter } from "next/navigation";

export default function CartItemCard({ item, index, removeItem }) {
  const plainDescription = item?.description?.replace(/<[^>]*>/g, "") ?? "";

  const router = useRouter();

  const handleView = (id) => {
    router.push(`/course_view/${id}`);
  };
  return (
    <article
      className="cart-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      {item?.badge && <span className="cart-badge">{item?.badge}</span>}

      <div className="cart-main">
        <div className="cart-thumb">
          {item?.image ? (
            <Image
              src={`https://rubiksoftwares.com/demoelectric/public${item?.image}`}
              alt={
                item?.title
                  ? `${item.title} course thumbnail`
                  : "Course thumbnail"
              }
              itemProp="image"
              fill
              style={{ objectFit: "cover" }}
              sizes="96px"
            />
          ) : (
            <span className="cart-thumb-fallback" aria-hidden="true">
              🛍️
            </span>
          )}
        </div>

        <div className="cart-info">
          <h3 className="cart-title" itemProp="name">
            {item?.title}
          </h3>
          {item?.title && <p className="cart-variant">{plainDescription}</p>}

          <div
            className="cart-rating-row"
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <span className="cart-stars" aria-hidden="true">
              {renderStars(4.5)}
            </span>
            <meta itemProp="ratingValue" content="4.5" />
            <span className="cart-rating-value">{"4.5"}</span>
          </div>

          <div
            className="cart-price-block"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="INR" />
            <meta itemProp="price" content="500" />
            <div className="cart-price-row">
              {10 != null && (
                <span className="cart-discount">
                  <ArrowDownIcon />
                  {"17"}%
                </span>
              )}
              <span className="cart-mrp">
                ₹
                {Math.round(Number(item.price) / (1 - 0.17)).toLocaleString(
                  "en-IN",
                )}
              </span>

              <span className="cart-price">
                ₹{item.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-actions">
        <button
          onClick={() => handleView(item?.id)}
          className="cart-action"
          aria-label={item?.title ? `View ${item.title}` : "View course"}
        >
          <IconEye />
          <span>View</span>
        </button>
        <button
          type="button"
          className="cart-action"
          onClick={() => removeItem?.(index)}
          aria-label={
            item?.title
              ? `Remove ${item.title} from cart`
              : "Remove item from cart"
          }
        >
          <TrashIcon />
          Remove
        </button>
      </div>
    </article>
  );
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  const roundedUp = rating - full >= 0.75;
  const totalFull = full + (roundedUp ? 1 : 0);

  return (
    <>
      {Array.from({ length: totalFull }).map((_, i) => (
        <StarIcon key={`f${i}`} fill="full" />
      ))}
      {hasHalf && <StarIcon fill="half" />}
      {Array.from({ length: 5 - totalFull - (hasHalf ? 1 : 0) }).map((_, i) => (
        <StarIcon key={`e${i}`} fill="empty" />
      ))}
    </>
  );
}

function StarIcon({ fill }) {
  const id = `half-${Math.random().toString(36).slice(2)}`;
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      className={`cart-star cart-star-${fill}`}
      aria-hidden="true"
    >
      {fill === "half" && (
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M10 1.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7z"
        fill={fill === "half" ? `url(#${id})` : "currentColor"}
        stroke={fill === "empty" ? "currentColor" : "none"}
        strokeWidth={fill === "empty" ? 1 : 0}
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      className="cart-icon-inline"
      aria-hidden="true"
    >
      <path
        d="M12 4v14m0 0l-5-5m5 5l5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m2 0v14a1 1 0 01-1 1H8a1 1 0 01-1-1V7h10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEye() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ width: "18px", height: "18px" }}
      aria-hidden="true"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
